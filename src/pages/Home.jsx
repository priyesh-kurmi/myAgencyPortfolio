import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <div className="select-none">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home
