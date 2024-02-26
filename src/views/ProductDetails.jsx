import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import Footer from "./Footer";
import Navbar from "./navbar";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId));

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
    <div className="w-screen  flex flex-col text-center">
     <Navbar/>
      <h1 className="product-title">{product.title}</h1>
      <div className=" w-full flex flex-col px-20 lg:flex-row  justify-between items-center mt-8">

      <img src={product.img} alt={product.title} className=" rounded-md w-[40vw] h-[40vh] lg:h-[60vh] " />
      <p className="product-inner">{product.inner}</p>
      </div>

      <div className="types-container">
        {product.types.map((type, index) => (
          <div key={index} className=" w-full flex flex-col items-center mt-10">
            <h2 className="type-title">{type.title}</h2>
             <div className="details-container">
              {type.details.map((detail, idx) => (
                <div key={idx} className=" flex px-10 mt-10 justify-between items-center gap-20">
                  <img src={detail.img} alt={product.title} className=" rounded-md w-[40vw] h-[45vh]" />
                  <div className="sizes-container">
                    <h3 className="size-title">Sizes:</h3>
                    <ul className="grid grid-cols-3 gap-5  place-content-center">
                      {detail.sizes.map((size, i) => (
                        <li key={i} className="w-20 h-10 mt-5 bg-black text-white rounded-md ">{size}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
