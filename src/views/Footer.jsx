// local imports
import {
  footerLinksColumnOne,
  footerLinksColumnTwo,
  newsletter,
} from "../data";

const Footer = () => {
  return (
    <div className=" text-black" id="contact">
      <div className="max-w-[1490px] mx-auto px-10 py-[120px]">
        <div className="flex flex-col items-center xl:items-start xl:flex-row xl:justify-between gap-12">
          <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
            <img src="/logo.png" className="w-[100px]  lg:w-[200px] lg:h-[100px]" alt="" />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-[120px] w-full">
            <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
              {footerLinksColumnOne.map((item, index) => (
                <div
                  key={index}
                  className=" max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className="w-full flex mx-auto justify-center xl:justify-start"
                      >
                        <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-16 xs:gap-2 w-full md:w-auto">
              {footerLinksColumnTwo.map((item, index) => (
                <div
                  key={index}
                  className=" max-w-screen md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className="w-full flex mx-auto justify-center xl:justify-start"
                      >
                        <li
                          className={`font-medium text-sm md:text-base ${
                            index !== 1 && "cursor-pointer"
                          } text-center xl:text-start w-fit`}
                        >
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black my-12" />

        <h6 className=" text-center text-base lg:text-lg">
          &copy; Raya  - All rights reserved
        </h6>
      </div>
    </div>
  );
};

export default Footer;
