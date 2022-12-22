import React, { useState } from "react";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";
import TextAreaField from "../form/textAreaField";

const AddCommentForm = ({ onSubmit }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const validatorConfig = {
    content: {
      isRequired: {
        message: "Сообщение не может быть пустым"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearForm = () => {
    setData({});
    setErrors({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    onSubmit(data);
    clearForm();
  };
  return (
    <div>
      <h2 className="text-[20px] mt-10 text-center dark:text-gray-100">
        Оставить комментарий
      </h2>
      <form onSubmit={handleSubmit}>
        <TextAreaField
          value={data.content || ""}
          onChange={handleChange}
          name="content"
          error={errors.content}
        />
        <div className="flex justify-end">
          <button className="p-2 border border-2 border-indigo-600 dark:text-white dark:border-indigo-300 mt-2 rounded-[20px]">
            Опубликовать
          </button>
        </div>
      </form>
    </div>
  );
};
AddCommentForm.propTypes = {
  onSubmit: PropTypes.func
};

export default AddCommentForm;
