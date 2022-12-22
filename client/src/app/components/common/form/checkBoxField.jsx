import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name, value: !value });
  };

  return (
    <div className="mb-4 flex">
      <div className="mr-2">
        <input
          type="checkbox"
          value=""
          id={name}
          onChange={handleChange}
          checked={value}
        />
      </div>
      <label htmlFor={name}>{children}</label>
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  error: PropTypes.string
};

export default CheckBoxField;
