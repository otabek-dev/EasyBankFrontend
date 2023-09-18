import axios from "axios";
import { useState } from "react";

const MainSelectBox = ({ req, customerData }) => {
  const [startDate, setStartDate] = useState("2023-01-01");
  const [endDate, setEndDate] = useState("2023-01-01");
  const [employeeId, setEmployeeId] = useState(
    "3103e37f-3b9c-4b91-8ac9-3b9672ee5eda"
  );

  const getStats = () => {
    req.startDate = startDate;
    req.endDate = endDate;
    req.employeeId = employeeId;
    axios
      .post("https://localhost:7042/api/report", req)
      .then((response) => {
        console.log(response.data.data);
        customerData.labels = [
          "CreateCustomer",
          "UpdateCustomer",
          "ReadCustomer",
          "DeleteCustomer",
        ];
        console.log(customerData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="selectBox">
      <div>
        <span className="dateSelect">Start data</span>
        <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      </div>

      <div>
        <span className="dateSelect">End data</span>
        <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      </div>

      <div>
        <span>Employee id</span>
        <input
          type="text"
          style={{ width: "380px" }}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
      </div>
      <button onClick={getStats}>GO</button>
    </div>
  );
};

export default MainSelectBox;
