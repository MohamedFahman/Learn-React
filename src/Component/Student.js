import React from "react";

function Student(props) {
  const defaultDetails = {
    name: "NULL",
    age: "NULL",
    reg: "E/19/***",
  };

  const { details = defaultDetails } = props;

  return (
    <div>
      <div className="container">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td class="col-md-4">{details.name}</td>
              <td class="col-md-4">{details.age}</td>
              <td class="col-md-4">{details.reg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
