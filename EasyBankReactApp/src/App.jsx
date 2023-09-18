import { useState } from "react";
import "./App.css";
import MainSelectBox from "./Components/MainSelectBox";
import Charts from "./Components/Charts";

function App() {
  const req = {
    employeeId: "3103e37f-3b9c-4b91-8ac9-3b9672ee5eda",
    startDate: "2023-09-01",
    endDate: "2023-09-19",
  };

  const customerData = {
    labels: [
      // "CreateCustomer",
      // "UpdateCustomer",
      // "ReadCustomer",
      // "DeleteCustomer",
    ],
    datasets: [
      {
        label: "Customer Data",
        data: [1, 1, 10, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
      },
    ],
  };

  const customerOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Customer Operations",
      },
    },
  };

  const cardData = {
    labels: [
      "CreateCard",
      "UpdateCard",
      "ReadCard",
      "DeleteCard",
      "UnBlockCard",
      "BlockCard",
    ],
    datasets: [
      {
        label: "Card Options",
        data: [1, 1, 3, 1, 1, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
      },
    ],
  };

  const cardOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Card Options",
      },
    },
  };

  return (
    <div>
      <MainSelectBox req={req} customerData={customerData} />

      <div className="charts">
        <Charts data={customerData} options={customerOptions} />
        <Charts data={cardData} options={cardOptions} />
      </div>
    </div>
  );
}

export default App;
