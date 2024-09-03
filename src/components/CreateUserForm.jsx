import React from "react";
import { Formik, Form } from "formik";
import CustomFormField from "@/components/FormField";
import * as Yup from "yup";
import { useUsers } from "@/hooks/useUsers";

const CreateUserForm = () => {
  const { createUser } = useUsers();

  const initialValues = {
    name: "",
    email: "",
    currentBalance: 0,
    initialBalance: 0,
    equityClose: 0,
    equityLow: 0,
    profitTarget: 0,
    absoluteEquityDrawdown: 0,
    tradingDays: 0,
    maxDailyEquityDrawdown: 0,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    currentBalance: Yup.number()
      .min(1, "Current balance must be greater than 0")
      .required("Current balance is required"),
    initialBalance: Yup.number()
      .min(1, "Initial balance must be greater than 0")
      .required("Initial balance is required"),
    equityClose: Yup.number()
      .min(0, "Equity close cannot be negative")
      .required("Equity close is required"),
    equityLow: Yup.number()
      .min(0, "Equity low cannot be negative")
      .required("Equity low is required"),
    profitTarget: Yup.number()
      .min(0, "Profit target cannot be negative")
      .required("Profit target is required"),
    absoluteEquityDrawdown: Yup.number()
      .min(0, "Absolute qquity drawdown cannot be negative")
      .required("Absolute qquity drawdown is required"),
    tradingDays: Yup.number()
      .min(0, "Trading days cannot be negative")
      .required("Trading days is required"),
    maxDailyEquityDrawdown: Yup.number()
      .min(0, "Max daily equityDrawdown cannot be negative")
      .required("Max daily equityDrawdown is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    await createUser(values);
    resetForm();
  };

  return (
    <div className="mt-5">
      <h1 className="text-2xl text-semibold text-center">Create user form</h1>
      <div className="flex items-center justify-center mt-5">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md w-[800px]">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="flex justify-center items-center gap-5">
                  <div className="flex-1">
                    <CustomFormField name="Name" value="name" />
                    <CustomFormField name="Email" value="email" />
                    <CustomFormField
                      name="Current Balance"
                      value="currentBalance"
                    />
                    <CustomFormField
                      name="Initial Balance"
                      value="initialBalance"
                    />
                    <CustomFormField name="Equity Close" value="equityClose" />
                  </div>
                  <div className="flex-1">
                    <CustomFormField name="Equity Low" value="equityLow" />
                    <CustomFormField
                      name="Profit Target"
                      value="profitTarget"
                    />
                    <CustomFormField
                      name="Absolute Equity Drawdown"
                      value="absoluteEquityDrawdown"
                    />
                    <CustomFormField name="Trading Days" value="tradingDays" />
                    <CustomFormField
                      name="Max Daily Equity Drawdown"
                      value="maxDailyEquityDrawdown"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
