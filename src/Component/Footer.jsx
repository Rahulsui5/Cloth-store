import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 ">
      <div className=" hover:text-white border-t border-gray-800 mt-10 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;