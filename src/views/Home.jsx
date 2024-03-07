// local imports
import Footer from "./Footer";
import Hero from "./Hero";
import Products from "./Products";
import Dummy from "./dummy";
import Navbar from "./navbar";
//import Services from "./views/Services";


function Home() {
  return (
    <>
    
    <Navbar/>
      <Hero />    
       
      <Products />
      <Dummy/>
      <Footer />
    </>
  );
}

export default Home;
