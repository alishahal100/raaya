// local imports
import Footer from "./views/Footer";
import Hero from "./views/Hero";
import Products from "./views/Products";
//import Services from "./views/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import ProductDetails from "./views/ProductDetails";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/products/:productId" element={<ProductDetails/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
