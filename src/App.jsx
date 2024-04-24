import Footer from './assets/components/Footer';
import Game from './assets/components/Game';
import Header from './assets/components/Header';

function App() {
  return (
    <>
      <div className='bg-slate-900 min-h-screen px-3 py-8 md:p-8'>
        <Header />
        <Game />
        <Footer />
      </div>
    </>
  );
}

export default App;
