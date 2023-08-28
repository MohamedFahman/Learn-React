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
    age: 23,
    reg: "E/19/105",
    projects: [
      "Student Result Management System",
      "Online Shopping System",
      "PLC kit Remote Control System",
    ],
  };

  return (
    <div>
      <Hearder />
      <NavigationBar items={navigationItems} />
      <Student details={studentDetails1} />
      <Student />
      <Footer />
      {/* Other content */}
    </div>
  );
};

export default App;
