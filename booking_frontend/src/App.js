// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./modules/Admin/Inventory/Car/List";
import CarEdit from "./modules/Admin/Inventory/Car/Edit";
import CarCreate from "./modules/Admin/Inventory/Car/Create";
import BrandList from "./modules/Admin/Inventory/Brand/List";
import BrandCreate from "./modules/Admin/Inventory/Brand/Create";
import AdminMainLayout from "./modules/Admin/AdminMainLayout";
import MainLayout from "./modules/User/MainLayout";
import BrandEdit from "./modules/Admin/Inventory/Brand/Edit";
import { ROUTES } from "./constant";
import RegisterPage from "./modules/User/Auth/Register";
import LoginPage from "./modules/User/Auth/Login";
import BookingCreate from "./modules/Admin/Booking/Create";
import BookingList from "./modules/Admin/Booking/List";
import AdminLoginPage from "./modules/Admin/Auth/AdminLoginPage";
import HomePage from "./modules/User/HomePage";
import UserList from "./modules/Admin/User/List";
import MyBookingPage from "./modules/User/MyBookingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={`/admin/${ROUTES.login}`} element={<AdminLoginPage />} />
        <Route path="/admin/*" element={<AdminMainLayout />}>
          <Route exact path={ROUTES.bookings} element={<BookingList />} />
          <Route exact path={ROUTES.cars} element={<CarList />} />
          <Route exact path={ROUTES.brands} element={<BrandList />} />
          <Route exact path={ROUTES.users} element={<UserList />} />
        </Route>
        
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />

        <Route path="/*" element={<MainLayout />}>
          <Route exact path="" element={<HomePage />} />
          <Route exact path="mybookings" element={<MyBookingPage />} />
        </Route>
        
        
      </Routes>
    </Router>
  );
}

export default App;
