import Item from "./components/Item";
import "./App.css";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Item name="MacBook" price="100000" />
      <Item name="PenDrive" price="4000" />
      <Item name="Mobile" price="35000" />
      <Cart />
    </div>
  );
}

export default App;
