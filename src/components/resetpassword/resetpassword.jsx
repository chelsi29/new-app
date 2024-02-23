import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { resetPasswordValidationSchema } from "../schema/resetpasswordvalidation";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [typee, setTypee] = useState("password");
  const [tyype, setTyype] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [Icone, setIcone] = useState(eyeOff);
  const [Iccon, setIccon] = useState(eyeOff);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Reset Password form submitted!", values);
    setSubmitting(false);
  };

  const handleToggleOldPassword = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
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
        <Formik
          initialValues={{
            email: "",
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={resetPasswordValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <img
                src="Images/image.png"
                className="transform translate-x-12 flex justify-center"
                alt="login"
              />
              <h2 className="font-bold mb-8 text-center">Reset Password</h2>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold text-grey"
                  htmlFor="email"
                >
                  Email Address<sup className="text-red">*</sup>
                </label>
                <Field
                  className="block w-full px-4 py-0 bg-white border-b-[1px] border-black outline-none focus:outline-none focus:underline"
                  id="email"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red "
                />
              </div>

              <div className="mb-2">
                <label
                  id="oldPassword"
                  className="block text-sm font-semibold text-grey"
                >
                  Old Password<sup className="text-red">*</sup>
                </label>
                <span
                  className="relative flex flex-col"
                  onChange={(event) => setPassword(event.target.value)}
                ></span>
                <Field
                  type={type}
                  name="oldPassword"
                  id="oldPassword"
                  className="block w-full px-4 py-0  bg-white border-b-[1px] border-black outline-none focus:outline-none focus:underline"
                />
                <span
                  className="absolute mr-[27%] mt-[-12] bottom-[44%] 	 right-[11%] -translate-y-1/2 cursor-pointer"
                  onClick={handleToggleOldPassword}
                >
                  <Icon icon={icon} size={25} />
                </span>

                <ErrorMessage
                  name="oldPassword"
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
                  className="absolute mr-[27%] mt-[-12] bottom-[37%] 	 right-[11%] -translate-y-1/2 cursor-pointer"
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
                  className="absolute mr-[27%] mt-[-12] bottom-[29.55%] 	 right-[11%] -translate-y-1/2 cursor-pointer"
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
                  className="w-full px-4 py-2 mt-2 text-white font-semibold bg-yellow rounded-md hover:bg-darkyellow focus:outline-nonee"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Reset"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
