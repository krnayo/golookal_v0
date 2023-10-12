import React from 'react'
import HeroSection from './HeroSection'
import TrustedBy from './TrustedBy'
import ExploreServices from './ExploreServices'
import FeaturedLookal from './FeaturedLookal'
import Testimonials from './Testimonials'
import Footer from './Footer'

function LandingPage() {
  return (
    <div>
      <HeroSection/>
      <ExploreServices/>
      <FeaturedLookal/>
      <Testimonials/>
      <TrustedBy/>
      <Footer/>
    </div>
  )
}
export default LandingPage;
