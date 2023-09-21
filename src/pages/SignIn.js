import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {ClipLoader} from "react-spinners";
import { useAuth } from '../contexts/AuthContext';
import { auth, provider } from '../firebase/Firebase-Config';
import EyeIcon from "../components/EyeIcon";

const override = {
  display: "block",
  margin: "auto",
  borderColor: "white",
};

const SignIn = () => {
    const { login } = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const loginSchema = yup.object().shape({
        username: yup.string().required("This field cannot be empty"),
        password: yup.string().min(4).max(15).required(),
      });
  const { register, handleSubmit,  formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (data) => {

    try {
      setLoading(true)
    await login(data.username, data.password)
    } catch (error) {
        console.log(error)
        setErrorMessage("Incorrect email or password")
    }  finally {
      setLoading(false)
    }
};
  return (
    <div className="flex flex-col justify-center align-middle items-center h-screen">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(submitForm)} className="my-3 bg-slate-500 w-[75%]  m-4 p-4 rounded-3xl text-center">
        {errorMessage && <p className="p-4 bg-red-500 text-center inline-block mx-auto rounded-lg">{errorMessage}</p>}
            <div className="flex flex-col text-left my-3">
              <label className="text-lotion text-base my-2">
                Username or email
              </label>
              <input
                className="py-3 p-1 rounded-md text-black"
                placeholder="Enter your username or email address"
                type="text"
                name="username"
                {...register("username")}
              />
              <p>{errors.username?.message}</p>
            </div>
            <div className="flex flex-col text-left my-5 relative">
              <label className="text-lotion text-base my-2">Password</label>
              <input
                className="py-3 p-1 rounded-md text-black"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password")}
              />
              <EyeIcon showPassword={showPassword} showPasswordFn={() => setShowPassword(!showPassword)} />
             <p>{errors.password?.message}</p>
            </div>
            <div className="text-center">
              <button
            disabled={loading}
            type="submit"
            className={`col-start-1 col-end-3 bg-[#8bc9d1] text-xs text-center font-bold my-2 py-3 px-12 rounded-xl duration-300 ${
              (loading) ? "opacity-50" : "hover:text-[#FFFDF8]"
            }`}
          >
            {loading ? (<ClipLoader className="" color="#fff"  size={12} cssOverride={override} />) : <p className="">LOGIN</p>}
          </button>
            </div>
          </form>
    </div>
  )
}

export default SignIn