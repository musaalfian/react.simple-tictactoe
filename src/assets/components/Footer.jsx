function Footer() {
  return (
    <>
      <div className='border-t border-white w-full sm:w-1/2 mx-auto pt-4 flex flex-wrap justify-center gap-1.5 md:justify-between text-center mt-14 text-white'>
        <p className='font-bold'>Simple TicTacToe.</p>
        <p className='text-sm text-slate-400'>
          Created by <span className='text-white font-semibold'>Musa</span>. Made with{' '}
          <span className='text-white font-semibold'>Love.</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
