import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Contact from './main/Contact';
import Home from './main/Home';
import Products from './main/Products';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Products /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
