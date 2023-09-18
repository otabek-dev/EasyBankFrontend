import { useEffect, useState } from 'react';
import './App.css' 
import axios from "axios";

function App() {
  const req = {
    employeeId: "3103e37f-3b9c-4b91-8ac9-3b9672ee5eda",
    startDate: "2023-09-01",
    endDate: "2023-09-19",
  };

  const [startDate, setStartDate] = useState("2023-01-01");
  const [endDate, setEndDate] = useState("2023-01-01");

 useEffect(() => {
  console.log(startDate);
  console.log(endDate);
  
  req.startDate = startDate;
  req.endDate = endDate;
   axios
     .post("https://localhost:7042/api/report", req)
     .then((response) => {
       console.log(response.data.data);
     })
     .catch((error) => {
       console.log(error);
     });
 }, [startDate, endDate]);

  return (
    <div className=''>
      <h3>Start data</h3>
      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <h3>End data</h3>
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />
    </div>
  );
}

export default App
