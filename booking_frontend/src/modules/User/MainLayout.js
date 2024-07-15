import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useProfileQuery } from "../../services/users";
import { useLogoutMutation } from "../../services/authentication";
import { closeModal, openModal } from "../../services/modalSlice";
import Navbar from "../../components/User/Navbar";
import FilterForm from "../../components/User/FilterForm";

const MainLayout = () => {
  const { data } = useProfileQuery();
  const modalOpen = useSelector((state) => state.modal.modalOpen);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const handleFilterClick = () => {
    isFilterVisible ? dispatch(closeModal()) : dispatch(openModal());
    setIsFilterVisible(!isFilterVisible);
  };

  const handleSubmitFilter = () => {
    console.log("Submit filter");
  };

  const handleLogout = () => {
    logout().then(() => {
      // redirect to /
      localStorage.removeItem("token");
      window.location.href = "/";
      // remove token from local storage
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar
          handleFilterClick={handleFilterClick}
          handleLogout={handleLogout}
        />
        <div className="w-full">
          <Outlet />
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-graydark opacity-75"></div>
      )}
    </>
  );
};

export default MainLayout;
