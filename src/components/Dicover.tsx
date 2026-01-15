import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
gsap.registerPlugin(SplitText)

const Dicover = () => {

  useGSAP(()=>{

gsap.to(".img",{
  scale:1,
top:"-2vh",

borderRadius:"0 0 0 0",
  scrollTrigger:{

trigger:".discover",
pin:true,
scrub:3,
start:"16% 1%",
end:"bottom bottom"
  }
})


    const a = SplitText.create(".e",{
      type:"words",
      wordsClass:"ad",


    })

    gsap.from(a.words,{
xPercent:100,
yPercent:200,
stagger:0.04,
opacity:0,
// duration:.2,
      scrollTrigger:{
        trigger:".e",
        start:"top 96%",
        end:"bottom 90%",
        toggleActions:"restart",
        onLeaveBack:()=>{
          gsap.to(a.words,{
            opacity:0,

            
          })
        }
      }
    })
  })
  return (
<section className="discover relative">
    <p className="uppercase">Welcome to zentry</p>
    <h1 className="e">DISCOVER THE WORLD'S <br />LARGEST SHARED ADVENTURE,</h1>
    <img className="img" src="/img/about.webp" alt="" />
</section>
  )
}

export default Dicover