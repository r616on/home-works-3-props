import React from "react";
import PropTypes from "prop-types";

function Response({ from, item }) {
  const { time, text } = item;

  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text ? text : null}</div>
    </li>
  );
}

Response.propTypes = {
  from: PropTypes.object,
  item: PropTypes.object,
};
Response.defaultProps = {
  from: { name: "Виктор" },
  item: {
    time: "10",
    text: "Нет",
  },
};
export default Response;
