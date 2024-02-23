import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "../schema/loginvalidation";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", email);
    console.log("email", email);
    // localStorage.setItem("password", password);
    console.log("password", password);
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md md:max-w-md lg:max-w-xl">
          <img
            src="Images/image.png"
            className="transform translate-x-28 flex justify-center"
            alt="login"
          />
          <p className="mt-8 text-md text-center text-darkgrey">
            Enter the{" "}
            <span className="font-semibold text-black">Email Address</span>
            associated with your account.
          </p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(true);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-6">
                <div className="mb-2">
                  <label
                    id="email"
                    className="block text-sm font-semibold text-grey"
                  >
                    Email Address<sup className="text-red">*</sup>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full px-4 py-0  bg-white border-b-[1px] border-black outline-none focus:outline-none focus:underline"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red"
                  />
                </div>

                <div className="mb-2">
                  <label
                    id="pass"
                    className="block text-sm font-semibold text-grey"
                  >
                    Password<sup className="text-red">*</sup>
                  </label>
                  <span
                    className="relative flex flex-col"
                    onChange={(event) => setPassword(event.target.value)}
                  ></span>
                  <Field
                    type={type}
                    name="password"
                    className="block w-full px-4 py-0  bg-white border-b-[1px] border-black outline-none focus:outline-none focus:underline"
                  />
                  <span
                    className="absolute mr-[27%] mt-[-12] bottom-[36.66%] 	 right-[6.2%] -translate-y-1/2 cursor-pointer"
                    onClick={handleToggle}
                  >
                    <Icon icon={icon} size={25} />
                  </span>

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red"
                  />
                </div>

                <div className="py-2 ">
                  <Link
                    to="/forgot"
                    className="text-sm text-blue underline font-bold mt-2"
                  >
                    Forgot Password?
                  </Link>
                  <Link
                    to="/reset"
                    className="text-sm text-blue underline font-bold mt-2 ml-72 "
                  >
                    Reset Password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white font-semibold bg-yellow rounded-md hover:bg-darkyellow focus:outline-none"
                  disabled={isSubmitting}
                >
                  Continue
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;

// import React, { useState, useEffect } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { loginValidationSchema } from "../Schema/loginvalidation";

// const Login = () => {
//   useEffect(() => {
//     // Clear email and password from localStorage on component mount
//     localStorage.removeItem("email");
//     localStorage.removeItem("password");
//   }, []);

//   const handleLogin = (values) => {

//     // Handle login logic here
//     console.log("Logging in with:", values.email, values.password);
//     localStorage.setItem("email", values.email);
//     localStorage.setItem("password", values.password);
//   };

//   return (
//     <>
//       <div className="flex flex-col justify-center min-h-screen overflow-hidden">
//         <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
//           <img
//             src="Images/image.png"
//             className="transform translate-x-28 flex justify-center"
//             alt="login"
//           />
//           <p className="mt-8 text-md text-center text-darkgrey">
//             Enter the{" "}
//             <span className="font-semibold text-black">Email Address</span>{" "}
//             associated with your account.
//           </p>
//           <Formik
//             initialValues={{
//               email: "",
//               password: "",
//             }}
//             validationSchema={loginValidationSchema}
//             onSubmit={(values, { setSubmitting }) => {
//               handleLogin(values);
//               setSubmitting(false);
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form className="mt-6">
//                 <div className="mb-2">
//                   <label
//                     id="email"
//                     className="block text-sm font-semibold text-grey"
//                   >
//                     Email Address<sup className="text-red">*</sup>
//                   </label>
//                   <Field
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="block w-full px-4 py-2 mt-2 bg-white border-b-[1px] border-black outline-none focus:outline-none focus:underline"
//                   />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-red"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label
//                     id="password"
//                     className="block text-sm font-semibold text-grey"
//                   >
//                     Password<sup className="text-red">*</sup>
//                   </label>
//                   <Field
//                     type="password"
//                     id="password"
//                     name="password"
//                     className="block w-full px-4 py-2 mt-2 bg-white border-b-[1px] border-black focus:outline-none focus:ring"
//                   />
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="text-red"
//                   />
//                 </div>
//                 <div className="mt-6">
//                   <button
//                     type="submit"
//                     className="w-full px-4 py-2 text-white font-semibold bg-yellow rounded-md hover:bg-darkyellow focus:outline-none"
//                     disabled={isSubmitting}
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
