import React from "react";

const Dummy = () => {
  return (
    <div>
      <div className=" hidden  w-screen lg:flex flex-col items-center justify-center pr-5 " id="about">
        <img
          src="/dummy.webp"
          alt="raaya mattress details image"
          className=" w-[95vw] h-[85vh]"
        />
        <div className="w-[35vw] h-[40vh] bg-[#f5f1ea] ml-auto -mt-60 mr-16 text-start flex gap-5 flex-col justify-center px-10">
          <h1 className=" text-3xl font-bold">Visit us in store or at Target</h1>
          <p className=" text-lg">
            Want to test our products before you buy? Our Sleep Ambassadors will
            offer you a personalized, no-pressure in-store experience. 
          </p>
          <a  href="https://maps.app.goo.gl/yJYvd5uRG3xsYLaB6"
            target="_blank"
            rel="noopener noreferrer">

          <button className=" rounded-2xl hover:bg-black hover:text-white border-[2px] font-semibold border-solid border-black w-48 h-10">
            View store locations
          </button>
          </a>
        </div>
      </div>
      <div  className="lg:hidden  w-screen flex flex-col ">
      <img
          src="/dummy.webp"
          alt="raaya mattress details image"
          className=" w-full h-[30vh] "

        />
        <div className="bg-[#f5f1ea] py-10 text-start flex flex-col gap-5">
    
            <h1 className=" text-2xl font-bold ml-auto mr-auto ">Visit us in store or at Target</h1>
            <p className="px-5 text-sm font-semibold ml-auto mr-auto">
              Want to test our products before you buy? Our Sleep Ambassadors will
              offer you a personalized, no-pressure in-store experience.
            </p>
            <button className=" rounded-2xl border-[2px] hover:bg-black hover:text-white font-semibold border-solid border-black w-3/6 h-9 mx-auto block">
              View store locations
            </button>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
