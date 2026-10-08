import React from "react";
import { RingLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

const Loader = ({ isShowLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center transition-all duration-300
      ${
        isShowLoading
          ? "opacity-100 visible"
          : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />

      {/* Loader Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl px-10 py-8 flex flex-col items-center gap-4 animate-loaderPop">

        <RingLoader
          color="#d11a50"
          loading={isShowLoading}
          cssOverride={override}
          size={45}
        />

        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-700">
            Loading...
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Please wait a moment
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loader;