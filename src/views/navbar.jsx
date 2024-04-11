import React, { useState } from "react";

import {
  AiOutlineWhatsApp,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHeatMap,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleDownload = () => {
    // Perform any necessary actions before initiating the download
    // For example, you can make an API call to fetch the file URL

    // Simulate a file URL (replace this with your actual file URL)
    const fileUrl = "/brochure.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = fileUrl;

    // Set the download attribute with the desired file name
    link.download = "brochure.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };
  return (
    <div className=" shadow-md ">
      <div className=" lg:flex flex-row hidden  w-screen fixed z-50 top-0  bg-white h-20  gap-96 px-10 ">
        <div>
          <img
            src="/logo.png"
            alt="Raaya mattress logo"
            className=" w-32 h-18"
          />
        </div>
        <div>
          <ul className="flex flex-row w-[25vw] justify-between mt-8 cursor-pointer">
            {/* Check if the current path is the homepage, then use anchor link */}
            {window.location.pathname === "/" ? (
              <a href="#product">
                <li className="text-lg">Mattress</li>
              </a>
            ) : (
              /* If not on the homepage, use regular link */
              <Link to="/#product">
                <li className="text-lg">Mattress</li>
              </Link>
            )}

            {window.location.pathname === "/" ? (
              <a href="#about">
                <li className="text-lg">About Us</li>
              </a>
            ) : (
              /* If not on the homepage, use regular link */
              <Link to="/#about">
                <li className="text-lg">About Us</li>
              </Link>
            )}
         <li className="text-lg " onClick={handleDownload}>
              Brochure
            </li>
          </ul>
        </div>
        <div className=" ml-24 flex flex-row gap-6 mt-10 ">
          <a
            href="https://maps.app.goo.gl/yJYvd5uRG3xsYLaB6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="cursor-pointer h-5 w-5.5" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=%2B919207217770"
            target="_blank"
          >
            <AiOutlineWhatsApp className=" cursor-pointer h-6 w-6" />
          </a>
        </div>
      </div>

      {/* mobilenav */}
      <div>
        <div className="flex lg:hidden justify-between w-screen z-10 fixed bg-white px-10 ">
          <div className="flex items-center">
            {showMenu ? (
              <AiOutlineClose
                onClick={toggleMenu}
                className="w-5 h-5 cursor-pointer"
              />
            ) : (
              <AiOutlineMenu
                className="h-5 w-5 mr-4 cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
          <div>
            <img
              src="/logo.png"
              alt="Raaya mattress logo"
              className="w-24 h-14 mt-3"
            />
          </div>
          <div className="flex flex-row gap-6 mt-6 ">
            <a
              href="https://maps.app.goo.gl/yJYvd5uRG3xsYLaB6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="h-5 w-5" />
            </a>
            <a
             href="https://api.whatsapp.com/send?phone=%2B919207217770"
              target="_blank"
            >
              <AiOutlineWhatsApp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div
          className={`fixed top-14 left-0 bottom-0  bg-white lg:hidden overflow-y-auto z-20 w-screen transform transition-transform duration-300 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-start w-screen h-auto mt-5 gap-5  px-10 py-2">
            <ul>
              <li className="text-lg mb-2">Products</li>
              <li className="text-lg mb-2">About Us</li>
              <li className="text-lg mb-2" onClick={handleDownload}>
                Brochure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
