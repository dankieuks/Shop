import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { HiKey } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { iconSize } from "../Constants/Constants";
/* eslint-disable react/prop-types */
function Register({ handleCardClick }) {
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
    <div className=" flex col-span-1 my-4  w-[400px] h-[420px] justify-center items-center bg-cyan-500 bg-opacity-50 rounded-md relative">
      <Link to={"/"}>
        <AiFillCloseCircle
          className="absolute top-5 right-5 "
          size={iconSize}
        />
      </Link>
      <form className="text-center px-5">
        <h3 className="text-3xl">Create New Account</h3>
        <p className="text-xs">
          Please register by filling in your persion data
        </p>
        <div className="relative mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center px-2">
            <FaUserCircle className="text-gray-500" />
          </div>
          <input
            type="name"
            placeholder="Name"
            className="w-full h-[45px] pl-10 rounded-lg text-sm"
          />
        </div>
        <p className="  text-black-400 text-xs italic pt-2">
          {validationMsg.username}
        </p>
        <div className="relative mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center px-2">
            <FaUser className="text-gray-500" />
          </div>
          <input
            type="Email"
            value={email}
            placeholder="Email"
            className="w-full h-[45px] pl-10 rounded-lg text-sm"
            autoComplete="email"
            required
            onChange={onChangeEmail}
          />
        </div>
        <p className=" text-black-400 text-xs italic pt-2">
          {validationMsg.email}
        </p>
        <div className="relative mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center px-2">
            <HiKey className="text-gray-500" />
          </div>
          <input
            type={showPassWord ? "text" : "password"}
            value={password}
            placeholder="Password"
            className="w-full h-[45px] pl-10 rounded-lg text-sm"
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
        <p className="text-black-400 text-xs italic py-3">
          {validationMsg.password}
        </p>
        <button
          className="  bg-orange-500 rounded-md py-1 px-2 "
          onClick={onSubmitLogin}
        >
          Submit
        </button>
        <p className="text-sm mt-4">
          Do not have an account?{" "}
          <Link
            to="/login"
            className="text-green-500 text-lg font-bold hover:underline"
            onClick={handleCardClick}
          >
            Login
          </Link>
        </p>
      </form>
      
    </div>
  );
}

export default Register;
