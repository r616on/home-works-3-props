import React from "react";

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
      <div className="message my-message">{text ? text : false}</div>
    </li>
  );
}

export default Response;
