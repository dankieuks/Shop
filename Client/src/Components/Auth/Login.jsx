import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { iconSize } from "../Constants/Constants";
/* eslint-disable react/prop-types */
function Login({ handleCardClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Please input your email address";
    }
    if (isEmpty(password)) {
      msg.password = "Please input your password ";
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const onSubmitLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
    //CallAPI
  };

  const [showPassWord, setShowPassWord] = useState(false);
  const handleShowPassWord = () => setShowPassWord(!showPassWord);

  return (
    <article className="flex col-span-1 my-4 w-[400px] h-[420px] justify-center items-center rounded-md bg-red-400 bg-opacity-60">
      <Link to={"/"}>
        <AiFillCloseCircle
          className="absolute top-5 right-5 "
          size={iconSize}
        />
      </Link>
      <form className=" mx-10 text-center">
        <h3 className="h1">Login</h3>
        <div className="relative mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center px-2">
            <FaUser className="text-gray-500" />
          </div>
          <input
            type="Email"
            value={email}
            placeholder="Email"
            className="w-full h-[45px] px-10 rounded-lg text-sm"
            autoComplete="email"
            required
            onChange={onChangeEmail}
          />
        </div>
        <p className="text-black-400 text-xs italic mt-2">
          {validationMsg.email}
        </p>
        <div className="relative mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center px-2">
            <RiLockPasswordFill className="text-gray-500" />
          </div>
          <input
            type={showPassWord ? "text" : "password"}
            placeholder="Password"
            className="w-full h-[45px] px-10 rounded-lg text-sm"
            required
            onChange={onChangePassword}
          />

          <button
            type="button"
            onClick={handleShowPassWord}
            className="absolute inset-y-0 right-2 flex items-center px-2 focus:outline-none"
          >
            {!showPassWord ? (
              <BsEyeSlashFill className="text-gray-500" />
            ) : (
              <BsEyeFill className="text-gray-500" />
            )}
          </button>
        </div>
        <p className="text-black-400 text-xs italic my-3">
          {validationMsg.password}
        </p>
        <button
          type="button"
          className=" bg-cyan-300 rounded-md py-1 px-2 "
          onClick={onSubmitLogin}
        >
          Submit
        </button>
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/register"
            className="text-slate-100 text-lg font-bold hover:underline"
            onClick={handleCardClick}
          >
            Register
          </Link>
        </p>
      </form>
    </article>
  );
}

export default Login;
