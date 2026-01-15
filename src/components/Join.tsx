import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsLinkedin } from "react-icons/bs";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Join = () => {
  const {contextSafe}= useGSAP()
const handlemouse = contextSafe(()=>{

  gsap.from(".er",{
    opacity:0,
    y:"200%",
    duration:2
  }

  )
})
  return (
    <div className="white">
      <div className="join">
       
<img src="/img/contact-1.webp" alt="" />
         <img src="/img/contact-2.webp" alt="" />
        <img src="/img/swordman.webp" alt="" />
        <div className="center">
          <div>JOIN ZENTRY</div>
          <h1>LET'S BUILD THE <br /> NEW ERA OF <br /> GAMING TOGETHER </h1>
          <div onMouseEnter={handlemouse} > <span className="er">Contact us</span> </div>
           
        </div>
        

      </div>

      <div className="footer">
        <div className="fl">&copy;Nova 2024.All rights reserved </div>
        <div className="fm">
            <FaDiscord size={17} />
            <FaSquareTwitter size={15.5} />
            <FaYoutube size={20}/>
            <BsLinkedin size={14} />
        </div>
        <div className="fr">Privacy Policy</div>
      </div>
    </div>
  );
};

export default Join;
