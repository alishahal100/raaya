// Import necessary libraries
import React, { useState } from 'react';

// Your existing imports...
import { productsTitle, productsBtnText, products } from "../data";
import arrowIcon from "../assets/arrow-icon.svg";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";
import FadeIn from "../components/FadeIn";
import './products.css'

// New component for the product details popup

// New component for the product details popup
// New component for the product details popup
const ProductDetailsPopup = ({ product, onClose }) => {
  return (
    <div className="popup">
       <h1>{products.title}</h1>
      <div className="popup-content">
        <div className="popup-description">
          {/* Display product types */}
          {Array.isArray(product.types) ? (
            // Handle types as an array
            <div className="type-container">
              {product.types.map((type, index) => (
                <div key={index}>
                  <img src={type.img} alt={type.title} className="type-image" />
                  <h3>{type.title}</h3>
                  {/* Add other details as needed */}
                 
                </div>
              ))}
            </div>
          ) : (
            // Handle types as an object
            <div className="type-container">
              <div>
                <h3>{product.types.title}</h3>
                <img src={product.types.img} alt={product.types.title} className="type-image" />
                {/* Add other details as needed */}
                <p>Product details go here...</p>
              </div>
            </div>
          )}
        </div>
        <button onClick={onClose} className="popup-close-btn">
          Close
        </button>
      </div>
    </div>
  );
};


// Modify the ProductCard component to handle click events
const ProductCard = ({ product, delay, onClick }) => {
  return (
    <FadeIn key={product.id} delay={delay} direction="up">
      <div
        className="group relative flex flex-col 2xl:ml-[50px] items-center justify-center w-[100%] md:w-[250px] h-[250px] md:h-[300px] bg-[#C1D0E4] rounded-[20px] overflow-hidden transition-transform transform hover:scale-105"
        onClick={() => onClick(product)}
      >
        <img
          src={product.img}
          alt=""
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute bottom-0 w-full bg-white h-[80px] flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <h2 className="text-fontBlack text-xl lg:text-lg font-medium mb-2">
            {product.title}
          </h2>
          <img src={starsIcon} alt="" />
        </div>
      </div>
    </FadeIn>
  );
};

// Modify the Products component to include the popup logic
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div id="products" className="flex flex-col items-center gap-[128px] justify-center mt-[160px] mb-[160px] max-w-[1490px] mx-auto px-10 w-full">
      <div>
        <h2 className="text-center md:text-start text-fontBlack text-3xl lg:text-[32px] font-medium mb-6">
          Our Products
        </h2>
      </div>

      <div className="w-full flex flex-col items-center md:flex-row gap-[50px]">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} delay={(i + 1) * 0.2} onClick={openPopup} />
        ))}
      </div>

      {/* Render the popup conditionally */}
      {selectedProduct && (
        <ProductDetailsPopup product={selectedProduct} onClose={closePopup} />
      )}
    </div>
  );
};



export default Products;
