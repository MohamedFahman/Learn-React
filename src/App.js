import React from "react";
import NavigationBar from "./Component/NavigationBar";
import Footer from "./Component/Footer";
import Hearder from "./Component/Header";
import Student from "./Component/Student";

const App = () => {
  const navigationItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ];

  const studentDetails1 = {
    name: "Fahman M.H.M.",
    age: "23",
    reg: "E/19/105",
  };

  const studentDetails2 = {
    name: "Faseeh M.F.M.",
    age: "23",
    reg: "E/19/106",
  };

  return (
    <div>
      <Hearder />
      <Student details={studentDetails1} />
      <Student details={studentDetails2} />
      {/* <NavigationBar items={navigationItems} /> */}
      <Footer />
      {/* Other content */}
    </div>
  );
};

export default App;
