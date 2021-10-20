import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SingleEmployee.css";

const SingleEmployee = () => {
  let { id } = useParams();
  const [employeeDetails, setemployeeDetails] = useState([]);
  const [matchedEmployee, setMatchEmployee] = useState([]);

  useEffect(() => {
    fetch("/employeeDetails.json")
      .then((res) => res.json())
      .then((data) => setemployeeDetails(data.employee));
  }, []);

  useEffect(() => {
    const foundEmployee = employeeDetails.find(
      (employee) => employee.login.id === id
    );
    setMatchEmployee(foundEmployee);
  }, [employeeDetails]);
  // console.log(matchedEmployee?.picture.thumbnail);

  return (
    <div>
      <div className="container">
        <h1>Profile Details</h1>
        <div className="cardcontainer">
          <div className="photo">
            <img src={matchedEmployee?.picture?.thumbnail} />
            <div className="photos">Details</div>
          </div>
          <div className="content">
            <p className="txt4">{matchedEmployee?.name}</p>
            <p className="txt5">{matchedEmployee?.email}</p>
          </div>
          <div className="footer">
            <p className="txt3">
              <i className="far fa-clock"></i>
              {matchedEmployee?.location?.street}
              <span className="comments">
                <i className="fas fa-comments"></i>{" "}
                {matchedEmployee?.location?.city}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleEmployee;
