import "./travelGuide.css";

const arr = [
  {
    pic: "TravelGuidesPics/pic1.jpg",
    name: "Benjamin Carter",
    des: "Scuba Diving Instructor",
  },
  {
    pic: "TravelGuidesPics/pic2.jpg",
    name: "Daniel Miller",
    des: "Cultural Tour Specialist",
  },
  {
    pic: "TravelGuidesPics/pic3.jpg",
    name: "James Wilson",
    des: "Safari Guide",
  },
  {
    pic: "TravelGuidesPics/pic4.jpg",
    name: "Alexander Clark",
    des: "Adventure Travel Leader",
  },
];

const TravelGuides = () => {
  return (
    <div className="container text-center py-3">
        <div className="py-3">
        <div className=" d-flex gap-1 justify-content-center">

        <div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
            <div className='textBorders greenBackground ' style={{width : '50px'}}/>
            <div className='textBorders greenBackground' style={{width : '25px',top : '7px',left : '24px'}}/>
          </div>

        <h4 className="green mx-3">TRAVEL GUIDE</h4>

        <div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
            <div className='textBorders greenBackground ' style={{width : '50px'}}/>
            <div className='textBorders greenBackground' style={{width : '25px',top : '7px',
    left: "0px"}}/>
          </div>

        </div>
        <h1>Meet Our Guide</h1>
        </div>
      <div
        className="d-flex column gap-5 justify-content-center"
        style={{ flexWrap: "wrap" }}
      >
        {arr.map((value, index) => (
          <div key={index} className="card " style={{ width: "18rem" }} 
          data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-delay={index*100}
     data-aos-once="true"
          >
            <div className="position-relative" style={{ overflow: "hidden" }}>
              <img
                src={`/${value.pic}`}
                className="card-img-top trg"
                alt={value.pic}
              />
</div>
              <div className="card-body " >
                <div className="d-flex gap-3 justify-content-center position-relative" style={{bottom : '30px'}}>
                  <a
                    href="#"
                    className=""
                  >
                    <i className="fa-brands rounded-circle fa-facebook-f sosialMedia"></i>
                  </a>
                  <a
                    href="#"
                    className=""
                  >
                    <i className="fa-brands rounded-circle fa-x-twitter sosialMedia"></i>
                  </a>
                  <a
                    href="#"
                    className=""
                  >
                    <i className="fa-brands rounded-circle fa-instagram sosialMedia"></i>
                  </a>
                </div>
              
              <h5 className="card-title">{value.name}</h5>
              <p className="card-text">{value.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelGuides;
