import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct, MyProducts, Cart , ProductDetails, Profile,CreateAddress,SelectAddress ,OrderConfirmation,Orders} from "./Routes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/createproduct/:id" element={<CreateProduct />} />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/createaddress' element={<CreateAddress />} />
        <Route path="/selectaddress" element={<SelectAddress />} />
        <Route path="/orderconformation" element={<OrderConfirmation />} />
        <Route path ="/order"  element ={<Orders/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App