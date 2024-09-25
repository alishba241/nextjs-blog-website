"use client"

import React, { useState } from 'react';

function Register() {
  const [alert, Setalert] = useState(false);
  const [firstname, Setfirstname] = useState("");
  const [lastname, Setlastname] = useState("");
  const [username, Setusername] = useState("");

  // toggle alert for form submission

  const toggleAlert = (event: any) => {
    event.preventDefault();
    Setalert(true);
  };

  // Login form state

  const [login, Setlogin] = useState(false);

  // handling of login submission and show alert

  const handleLoginSubmit = (event: any) => {
    event.preventDefault();
    Setalert(true);
  };

  // toggle between Login and Register forms

  const toggleBetween = () => {
    Setlogin(!login);
    Setalert(false); // Reset the alert state when switching forms
  };

  return (
    <div className="mt-[40px] md:mt-[50px] mb-10">
      <h2 className="font-bold text-4xl text-center text-cyan-900">
        {login ? "Login" : "Get Register"}
      </h2>
      <div className="flex mt-[10px] justify-center ">
        <section className="relative py-12 bg-transparent">
          <div className="container mx-auto text-center px-4">
            <div className="relative w-[350px] md:w-[500px] mx-auto bg-cyan-900 backdrop-filter backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg space-y-6">

              {/* alert message on conditions */}

              {alert && (
                <div className="text-yellow-400 font-bold md:text-lg">
                  {login
                    ? `${username}, Welcome back!`
                    : `${firstname} ${lastname}, You are Registered!`}
                </div>
              )}

              {/* Conditionally render either the Register or Login form */}

              {login ? (
                <form onSubmit={handleLoginSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="User Name"
                      value={username}
                      onChange={(e) => Setusername(e.target.value)}
                      required
                      className="w-full p-3 md:p-4 text-black rounded-lg placeholder:text-gray-500 border-2 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 md:p-4 text-black rounded-lg border-2 placeholder:text-gray-500 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 md:p-4 text-black rounded-lg border-2 placeholder:text-gray-500 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-cyan-600 to-yellow-400 text-white rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
                  >
                    Login
                  </button>
                </form>
              ) : (
                <form onSubmit={toggleAlert} className="space-y-4 md:space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstname}
                      onChange={(e) => Setfirstname(e.target.value)}
                      required
                      className="w-full p-3 md:p-4 text-black rounded-lg placeholder:text-gray-500 border-2 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => Setlastname(e.target.value)}
                      required
                      className="w-full p-3 md:p-4 text-black rounded-lg border-2 placeholder:text-gray-500 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 md:p-4 text-black rounded-lg border-2 placeholder:text-gray-500 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 md:p-4 text-black rounded-lg border-2 placeholder:text-gray-500 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-cyan-600 to-yellow-400 text-white rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
                  >
                    Register
                  </button>
                </form>
              )}

              <div className="mt-8">
                <p className="text-md md:text-lg text-gray-300">
                  {login ? "Or Register" : "Or Login"}
                </p>

                <div className="mt-4">
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button" 
                      onClick={toggleBetween}
                      className=" px-5 py-2 text-sm md:text-base md:px-8 md:py-3 bg-yellow-400 text-black rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition duration-300">
                      {login ? "Go to Register" : "Go to Login"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
