import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Contact from './main/Contact';
import Home from './main/Home';
import Products from './main/Products';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
