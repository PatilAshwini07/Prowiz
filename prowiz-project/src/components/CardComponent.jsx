import React from "react";
import "./CardComponent.css";

const data = [
  { icon: "", title: "Units Processed", value: "2,500" },
  { icon: "", title: "Units Passed", value: "800" },
  { icon: "", title: "Units Rejected", value: "10" },
  { icon: "", title: "Throughput (Units/Minute)", value: "105.5" },
];

const Card = ({ icon, title, value }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
      <p className="value">{value}</p>
    </div>
  );
};

const CardComponent = () => {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default CardComponent;
