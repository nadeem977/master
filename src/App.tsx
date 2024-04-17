import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './auth/Register';
import Login from './auth/Login';
import Home from './pages/Home';
import Navbars from './components/Navbars';
import AddProduct from './dashboard/AddProduct';
import Footer from './pages/Footer';
import ProductDetails from './pages/ProductDetails';
import SelectedProduct from './pages/SelectedProduct';
import Message from './pages/Message';


const App = () => {



  return (
    <>
      <BrowserRouter>
      <Navbars/>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='AddProduct' element={<AddProduct/>} />
          <Route path='SelectedProduct' element={<SelectedProduct/>} />
          <Route path='ProductDetails' element={<ProductDetails/>} />
          <Route path='Message' element={<Message/>} />
          <Route path='signIn' element={<Login/>} />
          <Route path='signUp' element={<Register/>} />
        </Routes>
        <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
