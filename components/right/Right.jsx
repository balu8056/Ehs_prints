import React from "react";
import Card from "./Card";

const Right = () => {
  return (
    <div style={{ float: "left", display: "inline-block" }}>
      {[...Array(12)].map((v, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};
export default Right;
