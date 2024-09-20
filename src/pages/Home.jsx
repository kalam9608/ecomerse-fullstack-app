import React from "react";
import NavBar from "../components/header/NavBar";
import ProductList from "../components/features/products/ProductList";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ProductList />
    </div>
  );
};

export default Home;
