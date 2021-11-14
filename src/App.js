import "./App.css";
import Stars from "./components/Stars/Stars";
import Listing from "./components/Listing/Listing";
import data from "./etsy.json";

function App() {
  return (
    <div className="App">
      <Stars count={4} />
      <Listing items={data} />
    </div>
  );
}

export default App;
