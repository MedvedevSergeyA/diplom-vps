import React from "react";
import { ThemeContext } from "../../../context/ThemeContext/themeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-yellow-500 text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-[#c9dcf0] dark:text-[#03638a] text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};
export default Toggle;
