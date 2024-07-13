// src/pages/Home.js
import React from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import CarTypes from '../components/CarTypes';
import CarList from '../components/CarList';

const Home = () => {
  return (
    <div className="flex">
      <aside className="w-1/4 p-4">
        <Filters />
      </aside>
      <main className="w-3/4 p-4">
        <SearchBar />
        <CarTypes />
        <CarList />
      </main>
    </div>
  );
};

export default Home;
