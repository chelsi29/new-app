import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { forgotPasswordValidationSchema } from "../schema/forgotpasswordvalidation";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [typee, setTypee] = useState("password");
  const [tyype, setTyype] = useState("password");
  const [Icone, setIcone] = useState(eyeOff);
  const [Iccon, setIccon] = useState(eyeOff);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Forgot Password form submitted!", values);
    setSubmitting(false);
  };

  const handleToggleNewPassword = () => {
    if (tyype === "password") {
      setIcone(eye);
      setTyype("text");
    } else {
      setIcone(eyeOff);
      setTyype("password");
    }
  };

  const handleToggleConfirmPassword = () => {
    if (typee === "password") {
      setIccon(eye);
      setTypee("text");
    } else {
      setIccon(eyeOff);
      setTypee("password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <img
          src="Images/image.png"
          className="transform translate-x-16 flex justify-center"
          alt="login"
        />
        <Formik
          initialValues={{
            email: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="font-bold mb-2 text-center">Forgot Password</h2>

              <div className="mb-2">
                <label
                  className="block text-sm font-semibold text-grey"
                  htmlFor="email"
                >
                  Email Address<sup className="text-red">*</sup>
                </label>
                <Field
                  className="block w-full px-4 py-2 bg-white border-b-[1px] border-black outline-none focus:outline-none focus:underline"
                  id="email"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red"
                />
              </div>

              <div className="mb-2">
                <label
                  id="newPassword"
                  className="block text-sm font-semibold text-grey"
                >
                  New Password<sup className="text-red">*</sup>
                </label>
                <span
                  className="relative flex flex-col"
                  onChange={(event) => setPassword(event.target.value)}
                ></span>
                <Field
                  type={tyype}
                  name="newPassword"
                  id="newPassword"
                  className="block w-full px-4 py-0  bg-white border-b-[1px] border-black outline-none focus:outline-none focus:underline"
                />
                <span
                  className="absolute mr-[27%] mt-[-12] bottom-[41.79%] 	 right-[11%] -translate-y-1/2 cursor-pointer"
                  onClick={handleToggleNewPassword}
                >
                  <Icon icon={Icone} size={25} />
                </span>

                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red"
                />
              </div>

              <div className="mb-2">
                <label
                  id="confirmPassword"
                  className="block text-sm font-semibold text-grey"
                >
                  Confirm Password<sup className="text-red">*</sup>
                </label>
                <span
                  className="relative flex flex-col"
                  onChange={(event) => setPassword(event.target.value)}
                ></span>
                <Field
                  type={typee}
                  name="confirmPassword"
                  id="confirmPassword"
                  className="block w-full px-4 py-0  bg-white border-b-[1px] border-black outline-none focus:outline-none focus:underline"
                />
                <span
                  className="absolute mr-[27%] mt-[-12] bottom-[34.55%] 	 right-[11%] -translate-y-1/2 cursor-pointer"
                  onClick={handleToggleConfirmPassword}
                >
                  <Icon icon={Iccon} size={25} />
                </span>

                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="w-full px-4 py-2 mt-2 text-white font-semibold bg-yellow rounded-md hover:bg-darkyellow focus:outline-none"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Confirm"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
