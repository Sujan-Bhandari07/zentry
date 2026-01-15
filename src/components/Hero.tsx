import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { GiPoisonGas } from "react-icons/gi";
import{Howl} from "howler"
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  const [currindex, setCurrindex] = useState(1);

  const { contextSafe } = useGSAP();
  const videoref = useRef<HTMLVideoElement | null>(null);
const [audio, setaudio] = useState(false)
const soundRef = useRef<Howl | null>(null)

  


  const totalvid = 4;
  const nextindex = (currindex % totalvid) + 1;

  const handleclick = contextSafe(() => {
    const tl = gsap.timeline();

    if (currindex < 4) {
      const a = tl.to(".zoomvideo", {
        scaleX:  6.5,
        scaleY:  3.8,
        borderRadius: "0px",
        objectPosition: "center center",
        ease: "power2.inOut",
        transformOrigin: "center center",
        duration: 2,
        onStart: () => {
          gsap.to(".changevideo", {
            opacity: 0,
          });
        },
        onComplete: () => {
          
          a.revert();
          tl.to(
            ".changevideo",
            {
              opacity: 1,
            },
            "+=4"
          );

          setCurrindex((prev) => prev + 1);
        },
      });
    }

    if (currindex == 4) {
      const a = gsap.to(".zoomvideo", {
        scaleX: 6.6,
        scaleY: 3.2,
        borderRadius: "0px",
        objectPosition: "center center",
        ease: "power2.inOut",
        transformOrigin: "center center",
        duration: 1.9,
        onStart: () => {
          gsap.to(".changevideo", {
            opacity: 0,
          });
        },
        onComplete: () => {
          setCurrindex(1);
          a.revert();
          gsap.to(".changevideo", {
            opacity: 1,
          });
        },
      });
    }
  });

  const handlemousemove = () => {
    gsap.to(".zoomvideo", {
      opacity: 1,
      duration: 2,
    });

    gsap.to(".changevideo", {
      opacity: 1,
      duration: 2,
    });
  };

  const handlemouseleave = contextSafe(() => {
    gsap.to(".zoomvideo", {
      opacity: 0,
      duration: 0.8,
    });

    gsap.to(".changevideo", {
      opacity: 0,
      duration: 0.8,
    });
  });

  useGSAP(() => {
    gsap.set(".mainvid", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
    });

    gsap.to(".mainvid", {
      clipPath: "polygon(14% 0, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
      ease: "power1.inOut",
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: ".mainvid",
        start: "center center",
        end: "bottom center",
        scrub: 2,
      },
    });
  });

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/audio/loop.mp3"],
      html5: true,
      loop: true,
    });
  }, []);

  



  const audioplayer = ()=>{

    


    setaudio(prev => !prev);
    if (soundRef.current) {
      if (!audio) {
        soundRef.current.play();  // play same instance
      } else {
        soundRef.current.stop();  // stop same instance
      }
    }

  }
  return (
    <div className="hero relative ">
      <div onClick={audioplayer}  className=" navbar absolute top-5 right-5 z-50">
        
        <GiPoisonGas size={30} color="white" />
      </div>
      <div className="videos ">
        <video
          autoPlay
          loop
          muted
          ref={videoref}
          src={`/videos/hero-${currindex}.mp4`}
          className="mainvid"
        ></video>
        <video
          onMouseLeave={handlemouseleave}
          onMouseEnter={handlemousemove}
          autoPlay
          loop
          muted


          onClick={handleclick}
          src={`/videos/hero-${nextindex}.mp4`}
          className="changevideo size-55"
        ></video>
        <video
          autoPlay
          loop
          muted
          src={`/videos/hero-${nextindex}.mp4`}
          className="zoomvideo size-55"
        ></video>
      </div>
      <div className="header">
        <h1>REDEFINE</h1>
        <div className="ee">
          Enter the Metagame <br /> Unleash the play Economy
        </div>
        <div className="btn">
          <MdKeyboardArrowRight size={20} color="black" />
          <span>WATCH TRAILER</span>
        </div>
      </div>

      <div className="right">GAMING</div>
    </div>
  );
};

export default Hero;
