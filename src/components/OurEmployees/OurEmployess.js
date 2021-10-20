import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const OurEmployess = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("./employeeData.json")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="">
          <h4 className=" text-center">Search Your Employee Here</h4>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search Employee"
          />
        </div>
        <table class="table table-dark table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>
                  <NavLink className="" to={`/employees/${employee.id}`}>
                    Details
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OurEmployess;
