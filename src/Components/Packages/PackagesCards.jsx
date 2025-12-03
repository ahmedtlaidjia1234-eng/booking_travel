
const PackagesCards = (cardsDetails) => {
  const {cardD,index} = cardsDetails

  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-once="true"
    data-aos-delay={index*100}
    className="card my-3 text-center" 
    style={{width : '26rem', paddingBottom : '35px'}}

     >
      <div>
      <div className="position-relative" style={{ overflow: "hidden" }}>
      <img src={cardD.DestImg} alt={cardD.Place}  className="card-img-top "/>
      </div>
      <div className="d-flex align-items-center justify-content-center">
      <p className="d-flex gap-2 justify-content-center py-2 border fw-bold" style={{flex : '1'}}><i className="fa-solid fa-location-dot green"></i>{cardD.Place}</p>
      <p className="d-flex gap-2 justify-content-center py-2 border fw-bold" style={{flex : '1'}}><i className="fa-solid fa-calendar green"></i> 3 Days </p>
      <p className="d-flex gap-2 justify-content-center py-2 border fw-bold" style={{flex : '1'}}><i className="fa-solid fa-user green"></i> 2 Person </p>
      </div>
      </div>
      <div className="card-body">
        <h3 className="card-title py-1">{cardD.price}</h3>
        <h5 className="card-title d-flex gap-1 justify-content-center py-1"><i className="fa-solid fa-star green"></i><i className="fa-solid fa-star green"></i><i className="fa-solid fa-star green"></i><i className="fa-solid fa-star green"></i><i className="fa-solid fa-star green"></i></h5>
        <p className="card-text py-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cupiditate maiores </p>
        <div className="greenBackground rounded-pill d-inline-block">
          <a href="#" style={{letterSpacing : '1px'}} className="btn text-white fw-bold border-end">Read more</a>
          <a href="#" style={{letterSpacing : '1px'}} className="btn text-white fw-bold">Book now</a>
        </div>
      </div>
    </div>
  )
}

export default PackagesCards