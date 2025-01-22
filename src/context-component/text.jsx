import { createContext, useContext } from "react";
import { GlobalContext } from "../context";

function TextComponent() {
  const { theme } = useContext(GlobalContext);
  return (
    <>
      <h2 style={{ color: theme === "light" ? "blue" : "red" }}>
        This is Shamem
      </h2>
    </>
  );
}

export default TextComponent;
