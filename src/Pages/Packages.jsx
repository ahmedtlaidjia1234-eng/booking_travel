import BookingFSec from '../Components/bookingSec/BookingFSec.jsx'
import HomeSec from '../Components/homeSection/HomeSec'
import PackagesC from '../Components/Packages/Packages.jsx'
import Process from '../Components/Process/Process.jsx'
const Packages = () => {
  return (
    <>
    <HomeSec href='Packages'/>
    <PackagesC />
    <Process />
    <BookingFSec />
    </>
  )
}

export default Packages