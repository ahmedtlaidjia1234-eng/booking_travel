import './Booking.css'


const BookingFSec = () => {
  return (
    <div className='container position-relative bg '>
        <img src="/pic2.jpg" alt="pic5" className='w-100 position-absolute h-100' />
    <div className=' my-5 BookingBg d-flex gap-3 py-3 px-3 text-white'>
        
        <div className='flex1 py-4 px-3' style={{justifyContent :'center' , display:'flex',flexDirection : 'column'}}
        
        data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-delay={100}
     data-aos-once="true"
        >

<h5 className='fw-bold'>BOOKING</h5>
<br />
<h2 className='fw-bold'>Online Booking</h2>
<br />
<p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
<br />
<p>
Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
</p>
<br />
<button className='btn bn border border- py-3 my-3 position-relative' style={{bottom : '-8px'}}>Read More</button>
        </div>

        <div className='flex1 py-3 '
        
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay={200}
        data-aos-once="true"
        >
        <h1 className='fw-bold mx-5 text-white '>Book A Tour</h1>
        <br />
        <div>
    <div className='d-flex gap-3'>

  <div className="form-outline mb-4 w-100 position-relative">
    <input type="email" id="form1Example1" className="form-control" />
    <label className="form-label" htmlFor="form1Example1">Email address</label>
  </div>


  <div className="form-outline mb-4 w-100 position-relative">
    <input type="password" id="form1Example2" className="form-control" />
    <label className="form-label" htmlFor="form1Example2">Password</label>
  </div>

  </div>

  <div className="row mb-4">
    <div className='d-flex gap-3'>

    <div className="flex1 position-relative">
    <input type="text" name='date' id='date' className='form-control '/>
    <label htmlFor="date" className="form-label">date</label>
    </div>

    <div className='flex1 position-relative'>
    <input type="text" className='form-control' id='destination' />
    <label htmlFor="destination" className="form-label">destination</label>
    </div>
    </div>
<br />
<br />

    <div className='w-100 position-relative'>
    <textarea name="spesial" id="spesial" cols="30" rows="1" className='form-control my-1 fs-4 py-3'></textarea>
    <label htmlFor="spesial">Spesial request</label>
    </div>

    <button className='btn bn w-100 border border- py-3 my-3'>Book Now</button>
  </div>

 </div>
        </div>
    </div>
    </div>
  )
}

export default BookingFSec