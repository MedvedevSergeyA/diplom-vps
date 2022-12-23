import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <div className="block mb-2">
        <label htmlFor={name}>{label}</label>
        <div className="flex">
          <input
            type={showPassword ? "text" : type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-[2px] focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
          />
          {type === "password" && (
            <button
              type="button"
              onClick={toggleShowPassword}
              className="p-2.5 text-sm font-medium text-white dark:bg-[#14458f] dark:border-[#14458f] bg-indigo-400 border rounded-r-[2px] hover:bg-indigo-500 bg-indigo-400 focus:ring-2 focus:outline-none focus:ring-indigo-400"
            >
              <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
            </button>
          )}
        </div>
      </div>

      {error && <div className="text-red-800">{error}</div>}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default TextField;
