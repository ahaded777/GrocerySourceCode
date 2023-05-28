import './App.css';
import Heaader from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services'
import Feature from './components/feature1/Feature1'
import Featur from './components/feature2/Feature2'
import Cta from './components/cta/Cta'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Heaader/>
      <Home/>
      <Services/>
      <Feature/>
      <Featur/>
      <Cta/>
      <Footer/>
    </>
  );
}

export default App;
