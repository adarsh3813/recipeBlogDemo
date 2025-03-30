import React from "react";

// Basic Footer for the App
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <p>
        &copy; {new Date().getFullYear()} Receipe Blog App 2025. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
