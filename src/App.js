import './App.css';
import Categorias from './components/Categories/Categorias';
import Carousell from './components/Hero/Carousel';
import InteractiveCarousel from './components/Hero/Hero';
import ResponsiveAppBar from './components/Navbar/Navbar';
import CardsProductos from './components/Products/CardsProductos';
import Layout from './components/Layout/Layout';
import Routes from '././Routes/routes';

function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <Layout>
      <Routes/>   
    </Layout>
    </>
  );
}

export default App;
