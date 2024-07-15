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
import RegisterPage from "./modules/Auth/Register";
import LoginPage from "./modules/Auth/Login";
import BookingCreate from "./modules/Admin/Booking/Create";
import BookingList from "./modules/Admin/Booking/List";
import HomePage from "./modules/User/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminMainLayout />}>
          <Route exact path={ROUTES.inventory.createBooking} element={<BookingCreate />} />
          <Route exact path={ROUTES.inventory.bookings} element={<BookingList />} />

          <Route exact path={ROUTES.inventory.createCar} element={<CarCreate />} />
          <Route exact path={ROUTES.inventory.editCar} element={<CarEdit />} />
          <Route exact path={ROUTES.inventory.cars} element={<CarList />} />

          <Route exact path={ROUTES.inventory.brands} element={<BrandList />} />
          <Route exact path={ROUTES.inventory.createBrand} element={<BrandCreate />} />
          <Route exact path={ROUTES.inventory.editBrand} element={<BrandEdit />} />
        </Route>
        
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />

        <Route path="/*" element={<MainLayout />}>
          <Route exact path="" element={<HomePage />} />
        </Route>
        
        
      </Routes>
    </Router>
  );
}

export default App;
