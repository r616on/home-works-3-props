import React from "react";

function Typing({ from, item }) {
  const { time, text } = item;

  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      {text && (
        <div className="message other-message float-right">
          {text ? text : false}
        </div>
      )}
    </li>
  );
}

export default Typing;
