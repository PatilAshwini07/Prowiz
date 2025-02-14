import React from "react";
import "./TableComponent.css";

const TableComponent = () => {
  const data = [
    { application: "Application 1", line: "Line 1", product: "Party Pack", reason: "Wrong Coding", quantity: 10, time: "01/02/2024" },
    { application: "Application 2", line: "Line 2", product: "Tub", reason: "Wrong Price", quantity: 12, time: "01/02/2024" },
    { application: "Application 3", line: "Line 3", product: "Party Pack", reason: "Wrong Factory Code", quantity: 8, time: "01/02/2024" }
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Application</th>
            <th>Line Number</th>
            <th>Product</th>
            <th>Reason For Rejection</th>
            <th>Quantity</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.application}</td>
              <td>{row.line}</td>
              <td>{row.product}</td>
              <td>{row.reason}</td>
              <td>{row.quantity}</td>
              <td>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
