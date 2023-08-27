import React from "react"; // Import React

const Footer = () => {
  const footerStyle = {
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light mt-5 text-center" style={footerStyle}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              We are a dedicated team of engineering students working on the PLC
              Remote System project. Our goal is to create an innovative
              solution that enables remote control of Programmable Logic
              Controllers (PLCs).{" "}
            </p>
          </div>
          <div className="col-md-6">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email 📧: syntaxsavants@gmail.com</li>
              <li>Phone ☎️: +1 123-456-7890</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center py-3">
        &copy; 2023 CO227-Project. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
