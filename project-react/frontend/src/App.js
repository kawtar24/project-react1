import logo from './logo.svg';
import './App.css';
import { ProductList } from './compenents/component.product.list';
import { ProductAddForm } from './compenents/component.product.add';
import {Routes,Route} from 'react-router-dom';
import { AdminLayout } from './compenents/component.admin.layout';
import { Home } from './compenents/component.home';
import {Connexion} from'./compenents/component.connexion';
import {Contact} from './compenents/component.contact';
function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout/>}>
      <Route path="/products" element={<ProductList />}/> 
      <Route path='/products/new'element={<ProductAddForm/>}/>

      <Route path="/home" element={<Home/>}/> 
      <Route path="/connexion" element={<Connexion/>}/> 
      <Route path="/contact" element={<Contact/>}/> 

      </Route>
    </Routes>
   
    
  );
}

export default App;
