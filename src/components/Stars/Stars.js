import React from "react";
import Star from "./Star/Star";

function generateStar(count) {
  const arr = [];
  if (count > 0 && count < 6) {
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
  }
  return arr;
}

function Stars({ count }) {
  const arr = generateStar(count);
  return (
    <ul className={"card-body-stars u-clearfix"}>
      {arr.map((item, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
}

export default Stars;
