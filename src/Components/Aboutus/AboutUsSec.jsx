import './about.css';














const arr = [
  {
    text: 'First Class Flights'
  },
  {
    text: 'Handpicked Hotels'
  },
  {
    text: '5 Star Accommodations'
  },
]
const arr2 = [
  {
    text: 'Latest Model Vehicles'
  },
  {
    text: '150 Premium City Tours'
  },
  {
    text: '24/7 Service'
  },
]

const AboutUsSec = () => {
  return (
    <div className='container-sm gap-5 display' style={{margin : '5rem auto'}}>
      <div  style={{maxWidth : '40%' ,flex : '1'}} className='position-relative'
      data-aos="fade-right"
      data-aos-anchor-placement="up-center"
      data-aos-once="true"
      data-aos-delay={100}
      >
      <div className='greenBackground greenBoxes' style={{left : '-15px' ,top : '-15px'}}/>
        <img src="/aboutPic.jpg" className='w-100' alt="aboutpic" 
        style={{objectFit : 'cover',height : '100%'}}
        
        />
        <div className='greenBackground greenBoxes' style={{right : '-15px',bottom:'-15px'}}/>
      </div>
      <div className='text-dark position-relative' style={{flex : '1'}}>
        <div className='d-flex gap-3 '>

          <h4 className='green d-inline-block'>About-Us</h4>

          <div className='d-flex flex-column position-relative h-100 ' style={{top : '7px'}}  >
            <div className='textBorders greenBackground ' style={{width : '50px'}}/>
            <div className='textBorders greenBackground' style={{width : '25px',top : '10px'}}/>
          </div>
        </div>
        <h1>Welcome to <span className='green'>Tourist</span></h1>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        <br />
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <br />
        <div className='gridList'>
    <ul>
    {arr.map((value,index)=>(
      <li key={index}><i className="fa-solid fa-arrow-right green mx-2"></i> {value.text}</li>
    ))}
    </ul>
    <ul>
    {arr2.map((value,index)=>(
      <li key={index}><i className="fa-solid fa-arrow-right green mx-2"></i> {value.text}</li>
    ))}
    </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSec