import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block text-white md:w-[70%] bg-black font-bold text-7xl md:leading-[88px] ">
        <div className="text-center align-middle mt-[300px] p-auto mr-10">
          Board.
        </div>
      </div>
      <div className="md:hidden sm:hidden bg-black font-bold text-7xl align-middle text-white pt-5 p-auto mb-[30px] ">
        <div className="text-center align-middle pt-[60px]">Board.</div>
      </div>

      <div className="bg-[#F5F5F5] flex flex-col justify-center md:ml-[-220px] ">
        <h2 className="text-3xl dark:text-black font-bold text-center">
          SIGN IN
        </h2>
        <h5 className=" dark:text-black text-center mb-5 ">
          Sign in to your account
        </h5>
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8">
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-[#F5F5F5] mt-2 p-2  focus:bg-gray-800 focus:outline-none"
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
              // name="email"
              value={email}
              placeholder="E-mail Address"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-[#F5F5F5] mt-2  focus:bg-gray-800 focus:outline-none"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              // name="password"
              value={password}
              placeholder="Min 6 Digits"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p className="text-[#346BD4] cursor-pointer">Forgot Password?</p>
          </div>
          <button
            className="w-full my-5 py-2 bg-black shadow-lg shadow-black-500/50 hover:shadow-black -500/40 text-white font-semibold rounded-lg"
            // onClick={() => logInWithEmailAndPassword(email, password)}
            onClick={signInWithGoogle}
          >
            SIGNIN
          </button>
          <button
            className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 mx-auto"
            onClick={signInWithGoogle}
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Login with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
