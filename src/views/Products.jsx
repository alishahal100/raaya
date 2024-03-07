import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../data";
import { useNavigate } from "react-router-dom";
import FadeIn from "../components/FadeIn";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="container">
      <FadeIn key={product.id} direction="up">
  <div className="group relative flex flex-col items-center justify-center text-center w-[80%] md:w-[320px] h-[350px] md:h-[400px] shadow-lg bg-[#C1D0E4] overflow-hidden transition-transform transform hover:scale-105" onClick={handleClick}>
    <img src={product.img} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
    <div className="absolute bottom-0 left-0 pb-4 pl-4 text-left">
      <h3 className="text-white text-xl font-bold">{product.title}</h3>
    </div>
  </div>
</FadeIn>

    </div>
  );
};

const ProductsCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="relative" id="product">
      <Slider {...settings} ref={sliderRef}>
        {products.map((product, i) => (
          <div key={i}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
      <button className="prevBtn absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 px-3 py-2 rounded-full" onClick={handlePrevClick}>
        <IoIosArrowBack size={24} />
      </button>
      <button className="nextBtn absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 px-3 py-2 rounded-full" onClick={handleNextClick}>
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

const Products = () => {
  return (
    <div>

    <div id="products" className="hidden lg:block mt-16  text-center  h-screen pt-24">
      <h2 className="text-center  text-2xl font-semibold mb-6 tracking-wider">
        Mattresses
      </h2>
      <ProductsCarousel />
    </div>
    <div className="lg:hidden">
      <h2 className="text-center text-2xl font-semibold mt-20 mb-6">
        Mattresses
      </h2>
      <div className="grid grid-cols-1 gap-8 mb-10 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
