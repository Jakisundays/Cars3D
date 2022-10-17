import './app.css'
import Hero from './Components/HeroSection/Hero';
import Info from './Components/Info/Info';
import NavBar from './Components/NavBar/NavBar';
import Portada from './Components/Portada/Portada';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Portada />
      <Info />
      <Hero />
    </div>
    
  );
}

export default App;
