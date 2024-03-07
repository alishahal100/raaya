import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import Footer from "./Footer";
import Navbar from "./navbar";
import { QuoteIcon } from "lucide-react";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId));

  const [showSizes, setShowSizes] = useState(false); // State to manage visibility of sizes

  // Function to toggle visibility of sizes
  const toggleSizes = () => {
    setShowSizes(!showSizes);
  };

  return (
    <div className="w-screen flex flex-col h-full ">
      <Navbar />
      <div className=" w-full h-screen">
        <img
          src={product.img}
          alt={product.title}
          className="absolute inset-0 w-full  h-[85vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white tracking-wider ">
            {product.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:gap-[200px]  items-center justify-center mt-20 px-5">
        {product.types.map((type, index) => {
          return (
            <div className="text-center" key={index}>
              <div className="flex flex-col lg:flex-row items-center justify-center mt-16 lg:gap-2 lg:w-[100vw] h-screen lg:h-[50vh]  ">
                <div className="flex-none  lg:-mr-[150px] lg:z-40">
                  <img
                    src={type.img}
                    alt={type.title}
                    className=" w-[100vw] h-[40vh] lg:w-[40vw] lg:h-[50vh]"
                  />
                </div>
                <div className="flex flex-col gap-5 py-20 lg:text-start p-4 justify-center lg:w-[50vw] overflow-hidden lg:px-[200px] lg:h-[67vh] bg-[#f5f1ea] ">
                  <h2 className="lg:text-2xl ">{type.title}</h2>
                  <p>{product.quote}</p>
                  <div className="rounded-lg p-4">
                    <div className="">
                      {/* Button to toggle visibility of sizes */}
                      <button
                        onClick={toggleSizes}
                        className="  border-[2px] hover:bg-black mx-auto lg:mx-0 hover:text-white font-semibold border-solid border-black w-1/2 lg:w-[100px] h-9  block"
                      >
                        Sizes
                      </button>
                      {/* Sidebar for sizes */}
                      {showSizes && (
                        <div
                          className={`fixed top-0 right-0 bottom-0  bg-[#f5f1ea]  overflow-x-auto z-50 w-full lg:w-1/4 transform transition-transform duration-300 ${
                            showSizes ? "translate-x-0" : "-translate-x-full"
                          }`}
                        >
                          {type.details.map((detail, i) => (
                            <div key={i} className="flex flex-col py-5 px-5">
                              <h1
                                className="lg:text-3xl text-end mr-10 cursor-pointer"
                                onClick={() => setShowSizes(false)}
                              >
                                X
                              </h1>
                              <div className="bg-white h-[580px] pt-10 mt-16 shadow-xl">
                                <ul className="grid grid-cols-3 p-5 lg:grid-cols-3 gap-4 mt-32 text-center">
                                  {detail.sizes.map((size, j) => (
                                    <li
                                      key={j}
                                      className="font text-md lg:text-md py-2 bg-white-400 shadow-lg lg:w-20"
                                    >
                                      {size}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
               
              </div>
              
            </div>
            
          );
        })}
         <div className="lg:h-screen w-screen flex flex-col mt-20 lg:mt-0 items-center lg:flex-row px-20 gap-10 py-10 bg-[#f7f5f3]">
                      <img src="/inner.jpg" alt="raaya mattres layers" className=" lg:w-1/2 lg:h-1/2 " />
                      <div className="flex flex-col lg:w-1/4 gap-5 lg:ml-36">
                            <h1 className="text-sm lg:text-xl">Inner </h1>
                            <p className="text-sm lg:text-lg">{product.inner}</p>
                      </div>
                </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
