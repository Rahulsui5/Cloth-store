import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-indigo-600 mb-6">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-700 mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
