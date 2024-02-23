import Login from "./components/login/login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/forgotpassword/forgotpassword";
import ResetPassword from "./components/resetpassword/resetpassword";

function App() {
  return (
    <>
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
