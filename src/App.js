import React from "react";
import MenuConfig from "./component/MenuConfig/MenuConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "./component/MenuConfig/item";

function App() {
  console.log("====================================");
  console.log(items);
  console.log("====================================");
  return (
    <div className="App">
      <div className="menu-config">Menu Config</div>
      {items.map((item) => (
        <MenuConfig items={item} />
      ))}
    </div>
  );
}

export default App;
