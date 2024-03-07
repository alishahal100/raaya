// React
import { useState, useEffect } from "react";

// local imports
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";
import Navbar from "./navbar";
// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDownload = () => {
    // Perform any necessary actions before initiating the download
    // For example, you can make an API call to fetch the file URL

    // Simulate a file URL (replace this with your actual file URL)
    const fileUrl = '/brochure.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = fileUrl;

    // Set the download attribute with the desired file name
    link.download = 'brochure.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
  <div className="flex flex-col gap-32">


    <div
      className="h-screen relative flex flex-col items-center "
      style={{
        background: `url(${'/hero6.1.jpg'})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // Add a fallback background color for browsers that do not support background images
        backgroundColor: "#ffffff",
        // Use media query for small devices
        '@media (max-width: 768px)': {
          background: `url(${'/hero.jpg'})`,
          backgroundSize: "contain",
          backgroundPosition: "top"
        },
      }}
    >
      

      <div>

        <FadeIn delay={0.2} direction="down" padding fullWidth >
          {isSmallScreen ? (
            <h1 className="text-center mt-[210px] lg:mt-10 font-semibold text-2xl xs:text-2xl text-[#373d3f] max-w-[500px]">
             {heroTitle}
              </h1>
          ) : (
            <h1 className="text-center text-5xl leading-tight xs:text-[54px] text-[#373D3F] max-w-[1050px] pt-[180px]">
              {heroTitle}
            </h1>
          )}
        </FadeIn>
        <FadeIn delay={0.4} direction="down" padding fullWidth>
          {isSmallScreen ? (
            <p className="text-center mt-2 text-lg xs:text-2xl text-[#373d3f] max-w-[500px]">
              Discover your perfect mattress for ultimate rest, delivered to your doorstep.
            </p>
          ) : (
            <h5 className="text-center text-lg xs:text-xl text-[#373d3f] max-w-[500px]">
              {heroSubtitle}
            </h5>
          )}
        </FadeIn>

      </div>



      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
      
    </div>
  );
};

export default Hero;
