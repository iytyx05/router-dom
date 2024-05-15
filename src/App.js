import React from "react";
import Navbar from "./components/Navbar";
import MainRouter from "./routers/MainRouter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRouter />
      <Footer />
    </div>
  );
};

export default App;
