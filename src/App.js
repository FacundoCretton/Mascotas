import './App.css';
import Layout from './components/Layout/Layout';
import Routes from '././Routes/routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/UI/WhatsAppButton/whatsAppButton';

function App() {
  return (
    <>
    <Navbar/>
    <Layout>
      <Routes/>   
    </Layout>
    <Footer/>
    <WhatsAppButton phoneNumber="5492944932206" />

    </>
  );
}

export default App;
