
import AboutUsSec from '../Components/Aboutus/AboutUsSec'
import TravelGuides from '../Components/TravelGuideC/TravelGuides'
import HomeSec from '../Components/homeSection/HomeSec'
import Services from '../Components/Services/ServicesC'
import PackagesC from '../Components/Packages/Packages.jsx'
import BookingFSec from '../Components/bookingSec/BookingFSec.jsx'
import Process from '../Components/Process/Process.jsx'
import TestimonialC from '../Components/Testimonial/TestimonialC'
import Destination from '../Components/Destination/Destination'

const HomePage = () => {

  

  return (
    <>
    <HomeSec />
    <AboutUsSec />
    <Services />
    <Destination />
    <PackagesC/>
    <BookingFSec />
    <Process/>
    <TravelGuides/>
    <TestimonialC/>
    </>
  )
}

export default HomePage