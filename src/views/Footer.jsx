// local imports
import {
  footerLinksColumnOne,
  footerLinksColumnTwo,
  newsletter,
} from "../data";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="relative bg-white pt-8 pb-6">
    <hr class="my-6 border-black"/>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl fonat-semibold text-black">Let's keep in Touch!</h4>
          <h5 class="text-sm mt-0 mb-2 text-black">
            Find us on any of these platforms
          </h5>
          <div class="social-icons social-icons">
            <ul>
              <li class="social-instagram">
                <a
                  href="https://instagram.com/aquilaqatar?utm_medium=copy_link"
                  ><i class="fab fa-instagram"></i
                ></a>
              </li>
              <li class="social-facebook">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li class="social-twitter">
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li class="social-linkedin">
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </li>
              <li class="social-youtube">
                <a href="#"><i class="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4 mt-3">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-6/12 px-4 ml-auto">
              <span class="block uppercase text-black text-sm font-semibold mb-2">Useful Links</span>
              <ul class="list-unstyled">
              {window.location.pathname === "/" ? (
              <a href="#product">
                <li className="text-lg">Mattress</li>
              </a>
            ) : (
              /* If not on the homepage, use regular link */
              <Link to="/#product">
                <li className="text-lg">Mattress</li>
              </Link>
            )}
               {window.location.pathname === "/" ? (
              <a href="https://api.whatsapp.com/send?phone=%2B919207217770">
                <li className="text-lg">Contact Us</li>
              </a>
            ) : (
              /* If not on the homepage, use regular link */
              <Link to="https://api.whatsapp.com/send?phone=%2B919207217770">
                <li className="text-lg">Contact Us</li>
              </Link>
            )}
               
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      <hr class="my-6 border-white "/>
      <div class="col-lg-6 text-center ml-auto mr-auto" >
        <div class="copyright-text">
         Raya mattress All Rights Reserved. | Designed by
          <a href="https://codx.tech" class="text-white">CODX</a>
        </div>
        
      </div>
    </div>
  </footer>
  );
};

export default Footer;
