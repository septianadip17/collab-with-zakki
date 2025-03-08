import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Achievement from "./components/Achievement";
import Highlights from "./components/Highlights";
import Downloads from "./components/Downloads";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Achievement/>
      <Highlights/>
      <Downloads/>
    </>
  );
};

export default App;
