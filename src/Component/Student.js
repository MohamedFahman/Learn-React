import React from "react";

function Student(props) {
  const defaultDetails = {
    name: "NULL",
    age: "NULL",
    reg: "E/19/***",
    projects: ["No projects"],
  };

  const { details = defaultDetails } = props;

  return (
    <div className="container">
      <div style={{ fontSize: "20px" }}>Name: {details.name}</div>
      <div>Age: {details.age}</div>
      <div>Reg. No: {details.reg}</div>
      <div>
        <b>Projects : </b>
        {details.projects.map((project, index) => (
          <div key={index}>
            {index + 1}. {project}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Student;
