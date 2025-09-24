import React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex flex-1">
        <ProductCard/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
