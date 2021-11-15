import React from "react";
import Star from "./Star/Star";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

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
      {arr.map((item) => (
        <Star key={uuidv4(item)} />
      ))}
    </ul>
  );
}
Stars.propTypes = {
  count: PropTypes.number,
};
Stars.defaultProps = {
  count: 0,
};
export default Stars;
