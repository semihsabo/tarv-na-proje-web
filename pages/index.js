// pages/index.js
import Hero         from '../components/home/Hero'
import WhyChoose    from '../components/home/WhyChoose'
import HowItWorks   from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import DemoVideo    from '../components/home/DemoVideo'
import BigCTA       from '../components/home/BigCTA'
import Integrations from '../components/home/Integrations'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <DemoVideo />
      <BigCTA />
    </>
  )
}
