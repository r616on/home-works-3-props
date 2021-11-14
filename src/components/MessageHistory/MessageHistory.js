import "./desktop.scss";
import React from "react";
import Message from "./Message/Message";
import Response from "./Response/Response";
import Typing from "./Typing/Typing";

function MessageHistory({ list }) {
  return (
    <ul>
      {list.map((item) => {
        const { from, id, type } = item;
        if (type === "message") {
          return <Message key={id} from={from} item={item} />;
        } else if (type === "response") {
          return <Response key={id} from={from} item={item} />;
        } else if (type === "typing") {
          return <Typing key={id} from={from} item={item} />;
        } else {
          return false;
        }
      })}
    </ul>
  );
}

export default MessageHistory;
