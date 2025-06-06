import Action from "./components/Action"
import Faq from "./components/Faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"
import Stats from "./components/Stats"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Header />
      <Partners />
      <Features />
      <Stats />
      <Intro />
      <Testimonial />
      <Faq />
      <Action />
      <Footer />
    </div>
  )
}

export default App