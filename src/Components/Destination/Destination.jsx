import './Destination.css'

const Destination = () => {
  return (
   < div className='container py-3 my-3'>
<div className="py-3">
        <div className=" d-flex gap-3 justify-content-center">

        <div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
            <div className='textBorders greenBackground ' style={{width : '50px'}}/>
            <div className='textBorders greenBackground' style={{width : '25px',top : '7px',left : '24px'}}/>
          </div>

        <h4 className="green mx-3">DESTINATION</h4>

        <div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
            <div className='textBorders greenBackground ' style={{width : '50px'}}/>
            <div className='textBorders greenBackground' style={{width : '25px',top : '7px',
    left: "0px"}}/>
          </div>

        </div>
        <h1 className='text-center'>Popular Destination</h1>
</div>
    <div className='destination justify-content-center'>
        <div className=''>

            <div className="card overflow-hidden w-100" style={{maxWidth : '100%',height : '390px',marginBottom : '15px'}}
            data-aos="zoom-in"
            data-aos-delay={400}
            data-aos-once={true}
            >
            <img src="/amc.jpg" alt="pic" className='card-img-top h-100'
            
            />
            </div>

            <div className='d-flex gap-3'>
                <div className="card overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={350}
                data-aos-once={true}
                >
                <img src="/pic3.jpg" alt="" className="card-img-top"
                />
                </div>
                <div className="card overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={300}
                data-aos-once={true}
                >
                <img src="/pic2.jpg" alt="" className="card-img-top" />
                </div>
            </div>
    
        </div>
        <div className='card overflow-hidden'
        data-aos="zoom-in"
        data-aos-delay={250}
        data-aos-once={true}
        >
        <img src="/makah.jpg" alt="pic5" className='card-img-top h-100 '
        />
        </div>
    </div>
    </div>
  )
}

export default Destination