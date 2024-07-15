import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useProfileQuery } from "../../services/users";
import { closeModal, openModal } from "../../services/modalSlice";
import Navbar from "../../components/User/Navbar";
import FilterForm from "../../components/User/FilterForm";

const MainLayout = () => {
  const { data } = useProfileQuery();
  const modalOpen = useSelector((state) => state.modal.modalOpen);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const dispatch = useDispatch();

  const handleFilterClick = () => {
    isFilterVisible ? dispatch(closeModal()) : dispatch(openModal());
    setIsFilterVisible(!isFilterVisible);
  };

  const handleSubmitFilter = () => {
    console.log("Submit filter");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar handleFilterClick={handleFilterClick} />
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-10 ${
            isFilterVisible ? "block" : "hidden"
          }`}
          onClick={handleFilterClick}
        ></div>
        <div className="p-4 lg:p-8 flex flex-col lg:flex-row">
          <FilterForm
            close={handleFilterClick}
            isVisible={isFilterVisible}
            handleFilterClick={handleSubmitFilter}
          />
          <div className="w-full lg:ml-8">
            <Outlet />
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-graydark opacity-75"></div>
      )}
    </>
  );
};

export default MainLayout;
