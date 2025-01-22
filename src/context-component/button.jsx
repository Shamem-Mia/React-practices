import { useContext } from "react";
import { GlobalContext } from "../context";

function ButtonComponent() {
  const { setTheme, theme } = useContext(GlobalContext);

  return (
    <>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        change theme
      </button>
    </>
  );
}

export default ButtonComponent;
