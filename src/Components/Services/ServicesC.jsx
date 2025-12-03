import { useEffect } from 'react'
import './Services.css'

const arr = [
    {
        icon : <i className='fa-solid green fa-globe'></i>,
        title : 'WorldWide Tours',
        desc : 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
        icon : <i className='fa-solid green fa-hotel'></i>,
        title : 'Hotel Reservation',
        desc : 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
        icon : <i className='fa-solid green fa-user'></i>,
        title : 'Travel Guides',
        desc : 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
        icon : <i className='fa-solid green fa-gear'></i>,
        title : 'Event Management',
        desc : 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },

]

const ServicesC = () => {



  return (
    <div className='container py-5'>

<div className="py-3">
        <div className=" d-flex gap-1 justify-content-center">

        <div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
            <div className='textBorders greenBackground ' style={{width : '50px'}}/>
            <div className='textBorders greenBackground' style={{width : '25px',top : '7px',left : '24px'}}/>
          </div>

        <h4 className="green mx-3">Services</h4>

        <div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
            <div className='textBorders greenBackground ' style={{width : '50px'}}/>
            <div className='textBorders greenBackground' style={{width : '25px',top : '7px',
    left: "0px"}}/>
          </div>

        </div>
        <h1 className='text-center'>Our Services</h1>
        </div>
    <div className='d-flex gap-3 justify-content-center' style={{flexWrap : 'wrap'}}>
    {arr.map((value,index)=>(
        <div key={index} className="card py-4 px-2 servicesCard"
         style={{ width: "18rem" ,transition : '0.5s'}}
         data-aos-delay={index*100}
         data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-once="true"
         >
            <h1 className='position-relative' style={{fontSize : '50px'}}>{value.icon}</h1>
        <div className="card-body">
          <h5 className="card-title fw-bold">{value.title}</h5>
          <p className="card-text">{value.desc}</p>
        </div>
      </div>
    ))}

</div>
    </div>
  )
}

export default ServicesC