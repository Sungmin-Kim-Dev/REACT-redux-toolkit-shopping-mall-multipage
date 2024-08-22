import React from "react";

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
    console.log("log in user function", e);
  };
  return (
    <div className="container mx-auto">
      <div className="mx-auto my-20 max-w-md">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-gray-700">Log in</h1>
          <p className="text-gray-500">Log in to access your account</p>
        </div>
        <div className="m-7">
          <form onSubmit={(e) => loginUser(e)} className="space-y-8">
            <div className="email-box">
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-100"
              />
            </div>
            <div className="password-box">
              <div className="mb-2 flex justify-between">
                <label htmlFor="password" className="text-sm text-gray-600">
                  Password
                </label>
                <a
                  href="#!"
                  className="text-sm text-gray-400 hover:text-red-500 focus:text-red-500 focus:outline-none"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-100"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-red-400 px-3 py-4 text-white hover:bg-red-500 focus:outline-none"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
