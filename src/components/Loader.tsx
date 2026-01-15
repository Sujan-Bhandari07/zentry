import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
useGSAP(()=>{
    gsap.from(".loader span",{
        y:"60%",
        x:"60%",
        stagger:{
            each:.07,
            from:"random",
            repeat:-1
        }
    })
})

  return (
    <div className="loader bg-black text-white">
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  );
};

export default Loader;
