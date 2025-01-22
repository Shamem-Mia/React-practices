import { Component, useState } from "react";
import "./App.css";
import ShopingList from "./components/shopingList.jsx";
import Component1 from "./components/props_example/component1.jsx";
import Component2 from "./components/props_example/component2.jsx";
import Component3 from "./components/props_example/component3.jsx";
import ApiHandling from "./components/apiHandling/component1.jsx";
import ButtonComponent from "./context-component/button.jsx";
import TextComponent from "./context-component/text.jsx";

function App() {
  //  const [count, setCount] = useState(0);
  const persons = [
    {
      id: 1,
      name: "Al-Amin",
      age: 22,
    },
    {
      id: 2,
      name: "Piyas",
      age: 22,
    },
  ];

  const personsArray = ["Mahbub", "BMB", "Rumman"];

  return (
    <>
      {/* comment other  components while using this components */}

      {/* <Component1 name="Shamem" age={22} city="Mymensingh" />
      <br />
      <Component2 name="Ifti" age={22} city="Mymensingh" />
      <Component3 persons={persons} personsArray={personsArray} /> */}

      {/* comment other components while using ShopingList components */}

      {/* <ShopingList /> */}
      {/* <ApiHandling /> */}

      {/* concept of context handlig */}
      <ButtonComponent />
      <TextComponent />
    </>
  );
}

export default App;
