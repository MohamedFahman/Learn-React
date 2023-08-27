import React from "react";

function Header() {
  const styleName = {
    color: "dodgerblue",
    padding: "15px",
    display: "block",
    textAlign: "center",
  };
  return (
    <div className="container">
      <h2 style={styleName}>PLC Kit Remote Control System.</h2>
      <hr />
    </div>
  );
}

export default Header;
