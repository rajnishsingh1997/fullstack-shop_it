import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-1 py-1 bg-gray-100 shadow-md">
      <div>
        <img className="w-24 rounded-md" src="/logo.webp" alt="Logo" />
      </div>

      <nav className="flex gap-6 text-gray-700 text-lg font-medium">
        <p className="cursor-pointer hover:text-blue-600">Your Account</p>
        <p className="cursor-pointer hover:text-blue-600">Your Orders</p>
        <p className="cursor-pointer hover:text-blue-600">Cart</p>
      </nav>

      <div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
