import React, { useEffect, useState } from "react";

function Student(props) {
  const defaultDetails = {
    name: "NULL",
    age: "NULL",
    reg: "E/19/***",
    projects: ["No projects"],
  };

  let { details = defaultDetails } = props;

  const [dynamicAge, setDynamicAge] = useState(parseInt(details.age)); // Parse age as an integer

  const handleclick = () => {
    setDynamicAge(dynamicAge + 1);
  };

  useEffect(() => {
    console.log("Initial Age: " + details.age);
  }, []);

  useEffect(() => {
    if (dynamicAge >= 30) {
      // Check dynamicAge instead of details.dynamicAge
      alert("Age is greater than or equal to 30.");
    }
  }, [dynamicAge]); // Watch for changes in dynamicAge

  return (
    <div className="container">
      <div style={{ fontSize: "20px" }}>Name: {details.name}</div>
      <div>Age: {dynamicAge}</div>
      <div>Reg. No: {details.reg}</div>
      <div>
        <b>Projects : </b>
        {details.projects.map((project, index) => (
          <div key={index}>
            {index + 1}. {project}
          </div>
        ))}
      </div>
      <br />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleclick}
      >
        Increase Age
      </button>
      <hr />
    </div>
  );
}

export default Student;
