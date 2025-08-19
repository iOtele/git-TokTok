import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "AboutUs", path: "/aboutus" },
    { name: "SMS Service", path: "/sms-service" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `transition-colors ${
              isActive
                ? "text-gray-800 hover:text-green-600 font-medium"
                : "text-gray-600 hover:text-green-600"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
