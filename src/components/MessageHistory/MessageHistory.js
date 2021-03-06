import "./desktop.scss";
import React from "react";
import Message from "./Message/Message";
import Response from "./Response/Response";
import Typing from "./Typing/Typing";

function MessageHistory({ list }) {
  let listArr = [];
  if (list.length > 0) {
    listArr = list;
  } else {
    listArr = null;
  }
  return (
    listArr && (
      <ul>
        {listArr.map((item) => {
          const { from, id, type } = item;
          if (type === "message") {
            return <Message key={id} from={from} item={item} />;
          } else if (type === "response") {
            return <Response key={id} from={from} item={item} />;
          } else if (type === "typing") {
            return <Typing key={id} from={from} item={item} />;
          } else {
            return null;
          }
        })}
      </ul>
    )
  );
}

export default MessageHistory;
