import './App.css';
import Layout from './components/Layout/Layout';
import Routes from '././Routes/routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Layout>
      <Routes/>   
    </Layout>
    <Footer/>

    </>
  );
}

export default App;
