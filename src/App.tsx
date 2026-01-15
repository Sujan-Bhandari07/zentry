import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader"

const Hero = lazy(() => import("./components/Hero"))
const Dicover = lazy(() => import("./components/Dicover"))
const Cards = lazy(() => import("./components/Cards"))
const Story = lazy(() => import("./components/Story"))
const Join = lazy(() => import("./components/Join"))
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  
  
  
  return (
    <Suspense fallback={<Loader/>}>

<div className="app flex flex-col  ">
  <Hero/>
<Dicover/>
<Cards/>
<Story/>
<Join/>
</div>
    </Suspense>
  )
}

export default App