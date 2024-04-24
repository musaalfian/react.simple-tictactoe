import { useEffect, useState } from 'react';
import Square from './Square';

function Board({ xIsNext, squares, onPlay, boxRemaining, handlePlayAgain }) {
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  // const handleResetSquare = () => setSquares(Array(9).fill(null));

  const calculateWinner = (squares) => {
    const rules = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < rules.length; i++) {
      const [a, b, c] = rules[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Mengembalikan pemenang jika ditemukan
      }
    }

    return false;
  };

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(winner);
    }
  }, [squares]);

  let status = '';
  if (winner) {
    status = winner;
  } else {
    status = xIsNext ? 'X' : 'O';
  }

  return (
    <>
      <div className='flex justify-between mb-6'>
        {winner ? (
          <p className='text-slate-300'>
            Winner: <span className='font-bold text-white'>{status}</span>
          </p>
        ) : (
          <p className='text-slate-300'>
            Next player: <span className='font-bold text-white'>{status}</span>
          </p>
        )}
        <p className='text-slate-300'>
          Box left : <span className='font-bold text-white'>{boxRemaining}</span>
        </p>
      </div>

      <div className='grid grid-cols-3 grid-rows-3 h-[14rem] md:h-[20rem] mt-3 gap-2'>
        {squares.map((square, index) => (
          <Square key={index} square={square} handleClick={() => handleClick(index)} xIsNext={xIsNext}></Square>
        ))}
      </div>
      {winner && (
        <p
          onClick={() => {
            handlePlayAgain();
            setWinner(null);
          }}
          className='px-4 text-sm py-3.5 mx-auto mt-8 font-bold hover:bg-green-800 duration-300 border-slate-300 border cursor-pointer rounded-full bg-green-700 text-white w-1/3 text-center'
        >
          Mulai lagi
        </p>
      )}
    </>
  );
}

export default Board;
