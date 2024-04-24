function Square({ square, handleClick }) {
  return (
    <>
      <div
        onClick={handleClick}
        className={`grid place-items-center border border-slate-600 ${
          square === 'X'
            ? 'text-green-400 border-green-600 hover:border-green-600'
            : square === 'O'
            ? 'text-yellow-400 border-yellow-400 hover:border-yellow-400'
            : 'text-transparent hover:border-slate-300'
        } duration-300 text-3xl font-semibold cursor-pointer rounded-[.25rem]`}
      >
        {square}
      </div>
    </>
  );
}
export default Square;
