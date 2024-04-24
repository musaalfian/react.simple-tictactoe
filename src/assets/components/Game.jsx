import { useEffect, useState } from 'react';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [boxRemaining, setBoxRemaining] = useState(currentSquares.length);
  const [resetGame, setResetGame] = useState(false);
  const [isGamePlay, setIsGamePlay] = useState(false);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setBoxRemaining(boxRemaining - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setBoxRemaining(currentSquares.length - nextMove);
  }

  const handlePlayAgain = () => {
    setResetGame(true);
    setBoxRemaining(currentSquares.length);
  };

  useEffect(() => {
    if (resetGame) {
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
      setResetGame(false);
    }
  }, [resetGame]);

  const moves = history.map((square, move) => {
    let desc = move > 0 ? 'Go to move #' + move : 'Start the game!';

    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className='px-3 py-2 rounded-full border border-slate-600 text-white text-sm w-full hover:bg-white hover:text-slate-800 duration-300'
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className='game w-full sm:w-1/2 mx-auto border border-slate-400 py-8 px-4 md:px-12 bg-slate-800 rounded-lg '>
        {isGamePlay ? (
          <div className=''>
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
              boxRemaining={boxRemaining}
              handlePlayAgain={handlePlayAgain}
            />
            <p className='mb-3 mt-10 text-slate-200 font-bold'>History</p>
            <ol className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>{moves}</ol>
          </div>
        ) : (
          <div className='grid place-items-center min-h-[10rem]'>
            <button
              onClick={() => setIsGamePlay(true)}
              className='px-4 w-1/2 md:w-1/5 py-2.5 rounded-full bg-green-700 hover:bg-green-800 duration-200 border border-slate-200 text-white font-semibold'
            >
              Play
            </button>
          </div>
        )}
      </div>
    </>
  );
}
