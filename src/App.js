import './App.css';
import Categorias from './components/Categories/Categorias';
import InteractiveCarousel from './components/Hero/Hero';
import ResponsiveAppBar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <InteractiveCarousel/>
    <Categorias/>
    
    </>
  );
}

export default App;
