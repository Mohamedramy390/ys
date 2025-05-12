import { Stack } from "@mui/material"
import Header from "./Header"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"
import { useRef } from "react"
import Footer from "./Footer"

const Home = () => {

    const sectionRef = useRef(null);
  
    const scrollToSection = () => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Stack>
        <Header scrollToSection={scrollToSection} />
        <About />
        <Work />
        <Contact sectionRef={sectionRef} />
        <Footer />
    </Stack>
  )
}

export default Home