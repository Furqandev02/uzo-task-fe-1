import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">Trade</Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Users List
          </Link>
          <Link
            to="/create"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Create User
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
