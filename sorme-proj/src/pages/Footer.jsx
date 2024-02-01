import emailPic from "../images/emailPic.png";
import callPic from "../images/callPic.png";
import enamad from "../images/enamad.png";
import etehadieh from "../images/etehadieh.png";
import enamad2 from "../images/enamad2.png";
import sormeLogoFooter from "../images/sormeLogoFooter.png";

function Footer() {
    return (<div className="bg-white">
        <footer className="bg-custom-bg-footer bg-opacity-25  pl-16 pr-16">
        <div className="grid grid-cols-3 py-10 gap-y-10 ">
          <img src={sormeLogoFooter} className="w-28" />
          <div className="flex items-center gap-3">
            <img src={emailPic} className="h-10" />
            <p className="text-custom-gray  text-2xl">Email Address</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={callPic} className="h-10" />
            <p className="text-custom-gray  text-2xl">Phone Call</p>
          </div>
          <div className="flex justify-start gap-5">
            <img src={enamad} className="h-20" />
            <img src={etehadieh} className="h-20" />
            <img src={enamad2} className="h-20" />
          </div>
          <p className="text-lg">info@sorme.com</p>
          <p className="text-lg">021-77111258</p>
        </div>
        <p className="flex justify-center pb-5">
          All material and intellectual rights of this website are reserved for
          &quot;Sormeh&quot; ©2020-2024
        </p>
      </footer></div> 
    )
}

export default Footer
