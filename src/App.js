// 使用套件
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.scss';
import './styles/global.scss';

// 頁面用元件(路由組件)
import Home from './pages/Home';

//資訊
//會員
import LogIn from './pages/Members/MemberLogin/LogIn';
import Member from './pages/Members/Member';
//課程
import Courses from './pages/Course/Courses';
import CourseContent from './pages/Course/CourseContent';

//商城
import ProductDetails from './pages/Products/ProductDetails';
import Products from './pages/Products/Products';
//購物車
// import CartPreOrder from './pages/Products/Cart/CartPreOrder';
// import CartManage from './pages/Products/Cart/CartManage';
// import CartConfimOrder from './pages/Products/Cart/CartConfimOrder';
// import CartComplete from './pages/Products/Cart/CartComplete';
//客製化浪板
import Customized from './pages/Customized/Customized';
//浪點
import SurfSpot from './pages/SurfSpot/SurfSpot';

// 組合用元件(一般組件)
// import Breadcrumb from './components/Breadcrumb';
// import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
// import Footer from './components/Footer';
// import MainContent from './components/MainContent';
// import SideBar from './components/SideBar';
// import Notfound from './components/Notfound';
// import axios from 'axios';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/surfspot" element={<SurfSpot />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Customized" element={<Customized />} />
        <Route path="/member" element={<Member />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/Course/CourseContent" element={<CourseContent />} />
      </Routes>
    </>
  );
}

export default App;
