
const TestiCards = (value) => {

    const {person} = value
   

  return (
    <div className="card overflow-hidden py-3 px-3 servicesCard" 
    style={{width : '25rem'}}
    
    >
    <img  src={person.profilePic} alt="ProfileImg" className="rounded-circle card-img-top mx-auto" style={{width : "100px", height : '100px'}} />
    <div className="card-body text-center">
        <h3 className="card-title">{person.name}</h3>
        <h5 className="card-title fw-bold">New York ,USA</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus facere, voluptates libero excepturi placeat itaque repudiandae aliquid recusandae! Perferendis reicien .</p>
    </div>
    </div>
  )
}

export default TestiCards