

const ProcessCards = (value) => {
    const {Info,index} = value

  return (
    <div className="card position-relative" style={{paddingTop: '40px'}}
    
    data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-delay={index*100}
     data-aos-once="true"
    >
       <div className="w-100 d-flex justify-content-center position-absolute iconCont rounded-circle"> {Info.icon}</div>
        <div className="card-body">
        <h4 className="card-title">{Info.title}</h4>
        <p className="card-text">
        Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit  
        </p>
        </div>
    </div>
  )
}

export default ProcessCards