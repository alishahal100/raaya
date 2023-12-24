// React
import { useState,useEffect } from "react";

// local imports
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

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
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${'/hero6.jpg'})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // Add a fallback background color for browsers that do not support background images
        backgroundColor: "#ffffff",
        // Use media query for small devices
        '@media (max-width: 768px)': {
          background: `url(${'/hero.jpg'})`,
          backgroundSize:"contain",
          backgroundPosition:"top"
        },
      }}
    >
      <div
        className="relative w-full max-w-[1490px] flex 
        items-center justify-between pt-5 mx-auto px-10"
      >
        <img className="w-[180px] h-[120px]  " src='/logo.png'  alt="" />
        <ul className="hidden md:flex items-center text-[#373d3f] gap-10 lg:gap-[68px] mr-[100px]">
          <NavLink  to="services">Services</NavLink>
          <NavLink to="products">Shop</NavLink>
          <NavLink to="Contact">Contact</NavLink>
          <button onClick={handleDownload} className=" w-auto px-10 text-lg">Get the Brochure</button>
          
        </ul>

        
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-black"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="products" mobileMenu>
              Shop
            </NavLink>
            <NavLink to="Contact">Contact</NavLink>
            <button onClick={handleDownload} className=" w-auto px-10 text-lg">Get the Brochure</button>
          
            
          </ul>

          <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="" />
        </div>
      </div>

      <FadeIn delay={0.2} direction="down" padding fullWidth>
  {isSmallScreen ? (
    <h1 className="text-center mt-10 font-semibold text-2xl xs:text-2xl text-[#373d3f] max-w-[500px]">
      Elevate your sleep with premium comfort.
    </h1>
  ) : (
    <h1 className="text-center text-5xl leading-tight xs:text-[54px] text-[#373D3F] max-w-[1050px]">
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


    

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Hero;
