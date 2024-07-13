import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:8000/api/cars").then((response) => response.json());
  }, []);

  return (
    <div>
      <h1>Available Cars</h1>
    </div>
  );
};

export default Home;
