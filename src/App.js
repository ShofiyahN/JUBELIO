import logo from './logo.svg';
import './App.css';
import CallToAction from './views/pages/home/cta';
import IndexHome from './views/pages/home';
import { RouteApp } from './Routes/RoutesApp/Index';
import Header from './views/pages/home/header';
import Footer from './views/pages/home/footer';


function App() {
  return (
    <>
    <Header/>
    <RouteApp/>
    <Footer/>
    </>
  );
}

export default App;
