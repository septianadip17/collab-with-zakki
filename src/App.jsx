import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Achievement from "./components/Achievement";
import Highlights from "./components/Highlights";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Achievement />
      <Highlights />
      <Downloads />
      <Footer />
    </>
  );
};

export default App;
