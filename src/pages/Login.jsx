// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInAuthUserWithEmailAndPassword,
// } from "../firebase";

// // import "./sign-in-form.styles.scss";

// const defaultFormFields = {
//   email: "",
//   password: "",
// };

// const Login = () => {
//   const [formFields, setFormFields] = useState(defaultFormFields);
//   const { email, password } = formFields;
//   const navigate = useNavigate();

//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   };

//   const signInWithGoogle = async () => {
//     resetFormFields();
//     const { user } = await signInWithGooglePopup();
//     await createUserDocumentFromAuth(user);
//   };

//   const navigateToDash = () => {
//     navigate("/dashboard");
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await signInAuthUserWithEmailAndPassword(
//         email,
//         password
//       );
//       console.log(response);
//       resetFormFields();
//       navigateToDash();
//     } catch (error) {
//       switch (error.code) {
//         case "auth/wrong-password":
//           alert("incorrect password for email");
//           break;
//         case "auth/user-not-found":
//           alert("no user associated with this email");
//           break;
//         case "auth/invalid-email":
//           alert("Invalid E-Mail");
//           break;
//         default:
//           console.log(error);
//       }
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormFields({ ...formFields, [name]: value });
//   };
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import FormInput from '../form-input/form-input.component';
// import Button from '../button/button.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../firebase";

// import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const navigateToDashboard = () => {
      navigate("/dashboard");
    };
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
      navigateToDashboard("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid Email");
          break;
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

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
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-[#F5F5F5] mt-2  focus:bg-gray-800 focus:outline-none"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
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
            onClick={handleSubmit}
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
};

export default Login;
