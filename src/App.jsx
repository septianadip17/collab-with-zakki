import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Achievement from "./components/Achievement";
import Highlights from "./components/Highlights";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Achievement/>
      <Highlights/>
    </>
  );
};

export default App;
