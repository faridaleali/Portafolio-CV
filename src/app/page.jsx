import About from "@/components/about/about"
import Career from "@/components/career/career"
import Contact from "@/components/contact/contact"
import Home from "@/components/home/home"
import Projects from "@/components/projects/projects"

function HomePage() {
  return (
    <>
      <Home/>
      <About/>
      <Projects/>
      <Career/>
      <Contact/>
    </>
  )
}

export default HomePage