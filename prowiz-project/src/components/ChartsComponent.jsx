import React from "react";
import "./ChartsComponent.css";

const ChartsComponent = () => {
  return (
    <div className="charts-container">
      <div className="chart-card">
        <h3 class="heading">Split of Units Processed Today</h3>
        <div className="bar-chart">
          <div className="bar">
            <div className="bar-label">Party Pack</div>
            <div className="bar-segment passed" style={{ height: "110px" }}></div>
            <div className="bar-segment rejected" style={{ height: "90px" }}></div>
          </div>
          <div className="bar">
            <div className="bar-label">Tub</div>
            <div className="bar-segment passed" style={{ height: "90px" }}></div>
            <div className="bar-segment rejected" style={{ height: "115px" }}></div>
          </div>
        </div>
        <div className="legend">
          <span className="legend-box passed"></span> Passed
          <span className="legend-box rejected"></span> Rejected
        </div>
      </div>

      <div className="chart-card">
        <h3>Reasons For Rejection</h3>
        <div className="pie-chart">
          <div className="pie-half incorrect"></div>
          <div className="pie-half missing"></div>
        </div>
        <div className="legend">
          <span className="legend-box incorrect"></span> Incorrect Price
          <span className="legend-box missing"></span> Missing Coding
        </div>
      </div>
    </div>
  );
};

export default ChartsComponent;
