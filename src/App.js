import './App.css';
import Categorias from './components/Categories/Categorias';
import InteractiveCarousel from './components/Hero/Hero';
import ResponsiveAppBar from './components/Navbar/Navbar';
import CardsProductos from './components/Products/CardsProductos';

function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <InteractiveCarousel/>
    <Categorias/>
    <CardsProductos/>
    
    </>
  );
}

export default App;
