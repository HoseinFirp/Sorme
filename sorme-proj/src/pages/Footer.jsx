import emailPic from "../images/emailPic.png";
import callPic from "../images/callPic.png";
// import enamad from "../images/enamad.png";
// import etehadieh from "../images/etehadieh.png";
// import enamad2 from "../images/enamad2.png";
import sormeLogoFooter from "../images/SormeLogoFooter.png";

function Footer() {
  return (
    <div className="bg-white">
      <footer className="bg-custom-bg-footer bg-opacity-25  pl-16 pr-16">
        <div className="grid sm:grid-cols-3 py-10 gap-y-4 sm:gap-y-10 items-center">
          <img
            src={sormeLogoFooter}
            className="w-20 lg:w-28 order-1 lg:order-1"
          />
          <div className="flex items-center gap-3 order-2 lg:order-2">
            <img src={emailPic} className="h-7 lg:h-10" />
            <p className="text-custom-gray  text-lg lg:text-2xl">
              Email Address
            </p>
          </div>
          <div className="flex items-center gap-3 order-4 lg:order-3">
            <img src={callPic} className="h-7 lg:h-10" />
            <p className="text-custom-gray  text-lg lg:text-2xl">Phone Call</p>
          </div>
          <div className="flex mt-5 lg:mt-0 justify-center lg:justify-start gap-5 order-6 lg:order-4">
            {/* <img src={enamad} className="h-20" />
            <img src={etehadieh} className="h-20" />
            <img src={enamad2} className="h-20" /> */}
          </div>
          <p className=" lg:text-lg order-3 lg:order-5">info@sorme.com</p>
          <p className=" lg:text-lg lg:order-6 order-5">021-77111258</p>
        </div>
        <p className="flex justify-center text-center pb-5">
          All material and intellectual rights of this website are reserved for
          &quot;Sorme©&quot; 2024
        </p>
      </footer>
    </div>
  );
}

export default Footer;
