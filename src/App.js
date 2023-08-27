import React from "react";
import NavigationBar from "./Component/NavigationBar";
import Footer from "./Component/Footer";

const App = () => {
  const navigationItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div>
      <NavigationBar items={navigationItems} />
      <Footer />
      {/* Other content */}
    </div>
  );
};

export default App;
