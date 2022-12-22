import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-indigo-200 border dark:bg-gray-700 dark:outline-gray-400 dark:placeholder-gray-400 dark:text-white"
        placeholder="Напишите ваш комментарий..."
      />
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

TextAreaField.defaultProps = {
  type: "text"
};
TextAreaField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default TextAreaField;
