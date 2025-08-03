import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Register.css";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { setDoc, doc } from "firebase/firestore";


function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleRegister = async () => {
    if (password !== confirmpassword) {
      setError("Parolni mos emas");
      toast.error(error);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid),{

  uid: user.uid,
  email: user.email,
  username: username,
  createdAt: new Date()

      })
      toast.success("Ro'yxatdan o'tdingiz🎉")
      console.log("Ro'yxatdan o'tdi", user);
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div className="Register w-full h-full flex items-center justify-center">
      <div className="hidden lg:flex w-[50%] h-full ">
        <img
          src="https://picsum.photos/200/300"
          className=" w-full h-[100vh]"
          alt=""
        />
      </div>
      <div className=" w-[50%] h-full   flex items-center justify-center ">
        <div className=" w-[400px] h-[400px]  flex flex-col items-center justify-center gap-[20px]">
          <h1 className=" font-mono font-extrabold text-3xl"> Register</h1>
          <div className=" w-full  flex flex-col items-center justify-center gap-[20px]">
            <label className="input w-[85%]  input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input w-[85%]  input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="input w-[85%]  input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password "
                className="grow"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className=" w-[85%] input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="w-full">
            <div className="w-full  flex items-center justify-center  gap-[20px]">
              <button
                onClick={handleRegister}
                className="btn btn-info w-[125px] rounded-3xl"
              >
                Register
              </button>
              <button className="btn btn-secondary w-[145px] rounded-3xl">
                Google
              </button>
            </div>
            <div className=" flex gap-7 relative top-4 items-center justify-center">
              <Link to={"/login"} className=" text-blue-600 hover:underline">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
