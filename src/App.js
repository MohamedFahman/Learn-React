import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Hearder from "./Component/Header";
import Student from "./Component/Student";
import NavigationBar from "./Component/NavigationBar";
import { studentDetails1, onlineshopping, SRMS, PLC } from "./const";
import Projects from "./Component/Projects";
import Aboutme from "./Component/Aboutme";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Hearder />
        <NavigationBar />
        <div className="container">
          <hr />
        </div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Student details={studentDetails1} />
                  <Student />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/project"
              element={
                <div>
                  <div className="row">
                    <row className="col-md-4">
                      {" "}
                      <Projects projectDetails={onlineshopping} />{" "}
                    </row>
                    <row className="col-md-4">
                      {" "}
                      <Projects projectDetails={SRMS} />{" "}
                    </row>
                    <row className="col-md-4">
                      {" "}
                      <Projects projectDetails={PLC} />{" "}
                    </row>
                  </div>
                  <Footer />
                </div>
              }
            />

            <Route
              path="/about"
              element={
                <div>
                  <Aboutme/>
                  <Footer />
                </div>
              }
            />

            <Route
              path="/contact"
              element={
                <div>
                  <Footer />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
