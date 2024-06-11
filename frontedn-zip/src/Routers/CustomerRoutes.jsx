import React from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
import Cart from "../customer/Components/Cart/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from "@mui/material";
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
import Sales from "../Pages/Sales";
import Trending from "../Pages/Trending";
import Marketplace from "../Pages/Marketplace";
import Deals from "../Pages/Deals";
import Vendor from "../Pages/vendor";
import Augment from "../Pages/augment";
import Augment1 from "../Pages/augment1";
import Augment2 from "../Pages/augment2";
import Augment3 from "../Pages/augment3";
import Augment4 from "../Pages/augment4";
import Augment5 from "../Pages/augment5";
import Augment6 from "../Pages/augment6";
import ProductDetailsGlasses from "../customer/Components/Product/ProductDetails/ProductDetailsGlasses";
import ProductDetailsMP from "../customer/Components/Product/ProductDetails/ProductDetailsMP";
import NotFound from "../Pages/Notfound";




const CustomerRoutes = () => {
    const location = useLocation();
    
  
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";

    // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
    
    <ThemeProvider theme={customerTheme}>
    {showNavigation && <Navigation />}
     <Routes>
     <Route path="/login" element={<Homepage />}></Route>
     <Route path="/register" element={<Homepage />}></Route>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/marketplace" element={<Marketplace />}></Route>
        <Route path="/vendor" element={<Vendor />}></Route>
        <Route path="/deals" element={<Deals />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TearmsCondition />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/:lavelThree" element={<Product />}></Route>
        <Route path="/:lavelTwo" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/productGlasses/:productId" element={<ProductDetailsGlasses />}></Route>
        <Route path="/productMP/:productId" element={<ProductDetailsMP />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        <Route path="/augment" element={<Augment />}></Route>
        <Route path="/augmentSunglasses" element={<Augment1 />}></Route>
        <Route path="/augmentDress" element={<Augment2 />}></Route>
        <Route path="/augmentShirt" element={<Augment3 />}></Route>
        <Route path="/augmentJean" element={<Augment4 />}></Route>
        <Route path="/augmentSeater" element={<Augment5 />}></Route>
        <Route path="/augmentJacket" element={<Augment6 />}></Route>
        <Route path="/notfound" element={<NotFound/>} ></Route>

        {/* {productId === "663b87e11a802b3d1aaf045b" && (
    <a href="/augment">Augmented reality</a>
  )}
  {productId === "663b89431a802b3d1aaf0554" && (
    <a href="/augmentSunglasses">Augmented reality</a>
  )}
  {productId === "663b769a1a802b3d1aaf0314" && (
    <a href="/augmentDress">Augmented reality</a>
  )}
  {productId === "663b6bce1a802b3d1aaf012c" && (
    <a href="/augmentShirt">Augmented reality</a>
  )}
  {productId === "663b6d721e5c5114123d8a45" && (
    <a href="/augmentJean">Augmented reality</a>
  )}
  {productId === "663b6dc51a802b3d1aaf01ae" && (
    <a href="/augmentSeater">Augmented reality</a>
  )}
  {productId === "663b74c81e5c5114123f8595" && (
    <a href="/augmentJacket">Augmented reality</a>
  )} */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </ThemeProvider>
      
    </div>
  );
};



export default CustomerRoutes;
