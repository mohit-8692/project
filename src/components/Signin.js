import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = credentials;

    try {
      //later use the hash function for the security
      const response = await axios.post("http://localhost:8080/Login", {
        email,
        password,
      });
      
      if (response.status === 200) 
      {
        console.log("login successful");
        
        localStorage.setItem('token', response.data.authtoken); 
        
        navigate('/');
      }
      else
      {
        console.log("incorrct password");
      }
    } catch (err) {
      console.log("internal server issue");
    }
  };
  return (
    <div>
      <div className="login-image"></div>
      <img
        src="E:\react\project\images\sampleImage2.jpeg"
        alt="Image"
        class="w-64 h-64"
      />
import sampleImage from "../assets/logo (1).png";
const Signin = () => {
  // New Update as git branch
  return (
    <div>
      <div className="login-image">

      <img src={sampleImage} alt="image" className="cuh-logo mx-5" style={{height:'450px ',border: 'none ',outline: 'none',margin:'0px',padding:'0',}}/> 
      
      </div>
      <div>
        <section className="absolute top-20 right-0 ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <htmlForm className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={onChange}
                      id="email"

                      required="true"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required="true"
                      onChange={onChange}
                      placeholder="••••••••"

                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""

                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-blue-grey"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      htmlForgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Log in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/Signup"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </htmlForm>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signin;
