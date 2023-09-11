import './App.css';
import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Inventory from './pages/admin/inventory';
import Nav from './component/Nav';
import Login from './pages/Login';
import Product from './pages/Product';
import Productdetails from './pages/productdetails';
import Updateproduct from './pages/admin/updateProduct';
import Cart from './pages/cart';
// import Reservation from './pages/admin/reservations';
import Reservation from './pages/admin/reservations'
export default function App() {
  return (

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path="/admin" element={<Inventory/>} />
      <Route path='/pages' element={<Product/>}/>
      <Route path='pages/:productId' element={<Productdetails/>}/>
      <Route path='admin/:id' element={<Updateproduct/>}/>
      <Route path='addtocart' element={<Cart/>}/>
      {/* <Route path ='/reservation' element={<Reservation/>}/> */}
      <Route path='admin/reserve' element={<Reservation/>}/>
  
    </Routes>
    </BrowserRouter>
  )
}
