import Slider from "react-slick";
import "./Testimonial.css";
import TestiCards from "./TestiCards";


const arr = [

{
  profilePic : '/TravelGuidesPics/pic1.jpg',
  name : 'Emily Johnson',
},
{
  profilePic : '/TravelGuidesPics/pic2.jpg',
  name : 'Olivia Martinez',
},
{
  profilePic : '/TravelGuidesPics/pic3.jpg',
  name : 'James Anderson',
},
{
  profilePic : '/TravelGuidesPics/pic4.jpg',
  name : 'Alexander Brown',
},
]

const TestimonialC = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth : true,
    centerMode: true,

  };

  return (
    <div className="container overflow-hidden position-relative" style={{padding : '50px 0px 120px 0px'}}>
      <div className="py-3">
        <div className=" d-flex gap-1 justify-content-center">
          <div
            className="d-flex flex-column position-relative h-100 "
            style={{ top: "10px" }}
          >
            <div
              className="textBorders greenBackground "
              style={{ width: "50px" }}
            />
            <div
              className="textBorders greenBackground"
              style={{ width: "25px", top: "7px", left: "24px" }}
            />
          </div>

          <h4 className="green mx-3">Testimonial</h4>

          <div
            className="d-flex flex-column position-relative h-100 "
            style={{ top: "10px" }}
          >
            <div
              className="textBorders greenBackground "
              style={{ width: "50px" }}
            />
            <div
              className="textBorders greenBackground"
              style={{ width: "25px", top: "7px", left: "0px" }}
            />
          </div>
        </div>
        <h1 className="text-center">Our Clients Say!!!</h1>
      </div>
    <div 
     data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-once="true"
    >
      <Slider className="py-3" {...settings} >
      {arr.map((value,index)=>(
        <TestiCards key={index} person={value} />
      ))
      }
      
      </Slider>
    </div>
      

</div>
  );
};

export default TestimonialC;
