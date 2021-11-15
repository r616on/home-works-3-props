import React from "react";
import PropTypes from "prop-types";

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
          {text ? text : null}
        </div>
      )}
    </li>
  );
}

Typing.propTypes = {
  from: PropTypes.object,
  item: PropTypes.object,
};
Typing.defaultProps = {
  from: { name: "Виктор" },
  item: {
    time: "10",
    text: "Нет",
  },
};
export default Typing;
