import "./App.css";
import Stars from "./components/Stars/Stars";
import Listing from "./components/Listing/Listing";
import MessageHistory from "./components/MessageHistory/MessageHistory";
import data from "./etsy.json";
import list from "./list.json";

function App() {
  return (
    <div>
      <div className="App">
        <Stars count={4} />
        <Listing items={data} />
      </div>
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <MessageHistory list={list} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
