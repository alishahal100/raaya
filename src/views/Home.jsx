// local imports
import Footer from "./Footer";
import Hero from "./Hero";
import Products from "./Products";
import Navbar from "./navbar";
//import Services from "./views/Services";


function Home() {
  return (
    <>
    
    <Navbar/>
      <Hero />      
      <Products />
      <Footer />
    </>
  );
}

export default Home;
