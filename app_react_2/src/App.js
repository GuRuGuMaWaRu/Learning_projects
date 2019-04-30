import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-area">
        <Sidebar />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
