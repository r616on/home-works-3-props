import React from "react";

function Message({ from, item }) {
  const { time, text } = item;

  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {text ? text : null}
      </div>
    </li>
  );
}

export default Message;
