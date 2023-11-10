import React from "react";
import "./Card.css";

export const Card = ({ id, name, stl, age, children }) => {
  console.log(age);

  const handlChange=()=>{}
  return (
    <div
      onClick={()=>alert(id)}
      className={stl}
      style={{ margin: "20px", display: "flex" }}
    >
      {name}
      {age}
      {children}
    </div>
  );
};
