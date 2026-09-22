import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_idi_full.png";

const LoginPage = () => {
  const navigate = useNavigate();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async () => {
      navigate("/contact");
  };

  const goToRegistration = () => {
    navigate("/register");
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300 px-4 py-6">
        <div
          className="w-full max-w-lg bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8 md:py-6 md:px-12 transition-colors duration-300"
          style={{ boxShadow: "0 10px 25px rgba(221, 23, 61, 0.1)" }}
        >
          <div className="flex flex-col items-center mb-5">
            <img src={logo} alt="Logo" />
            {/* <h1 className="text-5xl font-black text-[#DD173D] tracking-tight">
              IDI-HUB
            </h1> */}
          </div>

          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
              Login
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Enter User name & password
            </p>
          </div>

          <div className="space-y-6">
            {/* Username */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1 required">
                User Name
              </label>
              <div className="relative">
                <input
                  value=""
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl outline-none text-slate-900 dark:text-white"
                  placeholder="Your Email ID"
                  type="text"
                />
                
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1 required">
                Password
              </label>
              <div className="relative">
                <input
                  value=""
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl outline-none text-slate-900 dark:text-white"
                  placeholder="Enter your password"
                  type="password"
                />

               
              </div>

              <div className="flex justify-between">
                <a
                  className="text-[#000000] hover:underline text-sm font-medium cursor-pointer"
                // href="#"
                onClick={() => navigate("/reset-password")}
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            

            {/* Submit */}
            <div className="pt-1 flex justify-center">
              <button
                className="w-full md:w-48 bg-secondary hover:bg-[#d11a50] active:scale-95 text-white font-bold py-3 rounded-xl transition-all duration-200 text-lg"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default LoginPage;
