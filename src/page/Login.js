/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div className="mx-auto mt-8 w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-6 md:p-8">
      <form className="space-y-6" onSubmit={(e) => loginUser(e)}>
        <h5 className="text-xl font-medium text-gray-900">Sign In</h5>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
            placeholder="name@company.com"
            // required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
            // required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-red-300"
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Remember me
            </label>
          </div>
          <a href="#" className="ms-auto text-sm text-red-700 hover:underline">
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500">
          Not registered?{" "}
          <a href="#" className="text-red-700 hover:underline">
            Create account
          </a>
        </div>
      </form>
      <p className="text-sm text-gray-700">
        테스트 편의를 위해 "required"는 잠시 주석 처리!
      </p>
    </div>
  );
};

export default Login;
