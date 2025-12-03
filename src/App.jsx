
import './App.css'
import { lazy,Suspense, useEffect} from 'react'
import SosialMedia from './Components/navbar/sosialMedia'

import Navbar from './Components/navbar/Navbar'
import AboutUs from './Pages/AboutUs'
import HomePage from './Pages/HomePage'
import Footer from './Components/footer/Footer'
import { Route, Routes } from 'react-router-dom';
import TravelGuide from './Pages/TravelGuide';
import Services from './Pages/Services';
import Testimonial from './Pages/Testimonial';
import AOS from 'aos'
import Packages from './Pages/Packages';
import Booking from './Pages/Booking';
import DestinationP from './Pages/DestinationP';
import PrivacyAndPolicy from './Pages/PrivacyAndPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'
import NotFoundErr from './Pages/NotFoundErr'

function App() {


  useEffect(()=>{
    AOS.init();
  })
  return (
    <div>
    <SosialMedia/>
    

     <Navbar/>
     
     <Suspense fallback={<h1 className='text-center my-5 py-5'>Loading...</h1>}>
     <Routes>
     <Route path='/' element={<HomePage />} /> 
     <Route path='/about-us' element={<AboutUs/>} /> 
     <Route path='/travel-guides' element={<TravelGuide/>} />
     <Route path='/services' element={<Services />} />
     <Route path='/testimonial' element={<Testimonial />} />
    <Route path='/packages' element={<Packages />} />
    <Route path='/destination' element={<DestinationP />} />
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/privacy-and-policy' element={<PrivacyAndPolicy />}/>
    <Route path='/terms-and-condition' element={<TermsAndConditions />}/>
    <Route path='*' element={<NotFoundErr/>}/>
     </Routes>    

     </Suspense>

     <Footer/>
    </div>
    
  )
}

export default App
