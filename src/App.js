import './App.css';
import Layout from './components/Layout/Layout';
import Routes from '././Routes/routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Layout>
      <Routes/>   
    </Layout>
    </>
  );
}

export default App;
