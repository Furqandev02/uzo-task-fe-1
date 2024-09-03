import { ErrorMessage, Field } from "formik";
import React from "react";

const CustomFormField = ({ name, value }) => {
  return (
    <div>
      <label
        htmlFor={value}
        className="block text-sm font-medium text-gray-700"
      >
        {name}
      </label>
      <Field
        id={value}
        name={value}
        type={value}
        className="block w-full border border-gray-300 rounded-md p-2 mt-1"
      />
      <ErrorMessage
        name={value}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default CustomFormField;
