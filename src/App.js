import './App.css';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Productos from './componentes/Productos';
import Product from './componentes/Product';
import Contact from './componentes/Contact';
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/productos/:id" element={<Product/>} />
        <Route path="/contacto" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
