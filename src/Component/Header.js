import React from "react";

function Header() {
  const styleName = {
    color: "dodgerblue",
    padding: "15px",
    display: "block",
    backgroundColor: "lavender",
    textAlign: "center",
  };
  return (
    <div className="container">
      <h2 style={styleName}>PLC Kit Remote Control System.</h2>
    </div>
  );
}

export default Header;
