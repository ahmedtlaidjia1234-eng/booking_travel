import { Logo } from "./Navbar_Styles";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useRef } from "react";

// import AOS from 'aos'

const Navlist = [
  {
    name: "Home",
  },
  {
    name: "About-Us",
  },
  {
    name: "Services",
  },
  {
    name: "Packages",
  },
  {
    name: "Pages",
  },
  {
    name: "Contact",
  },
];

const Navbar = () => {
  // useEffect(()=>{
  //   AOS.init();
  // },[])
  const navBarRef = useRef()
  
  return (
    <>
    
      <nav ref={navBarRef} className="navbar navbar-expand-lg justify-content-between navbar-light w-100 " style={{zIndex : '1'}}>
        <div className="container-fluid border-bottom " style={{ padding: "0px 0px" }}>
          <Link to="/" className="mx-3">
            <Logo className="navbar-brand fw-bold fs-3 ">
              <i className="fa-solid fa-location-dot fs-1"></i> Tourist
            </Logo>
          </Link>
          <button
            className="navbar-toggler mx-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* navList ... */}

          <div
            className="collapse navbar-collapse w-100 medianav"
            id="navbarSupportedContent"
            
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 w-100 justify-content-end jc"
            style={{scrollbarWidth: 'none'}}
            >
              {Navlist.map((value, index) =>
                value.name !== "Pages" ? (
                //   .listAnim{
                //     animation: listanim 0.7s ease-in-out calc() iteration-count direction fill-mode;
                // }
                  <li key={index} className="nav-item listAnim position-relative" >
                    <NavLink className="nav-link navlist " to={value.name == 'Home' ? '/' :"/" + value.name.toLowerCase()}>
                      {value.name}
                      
                    </NavLink>
                    <div className="hr"/>
                  </li>
                ) : (
                  <>
                    <li className="nav-item dropdown listAnim" >
                      <NavLink to={'/pages'}
                        className="dropdown-toggle nav-link navlist py-2 text-white"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {value.name}
                        
                        <div className="hr w-100" />
                        
                      </NavLink>
                      <span className="fw-bold fs-6 anime">▼</span>
                      <ul
                        className="dropdown-menu navbar-dark"
                        style={{left : '-50px',transform : 'translateY(5px)'}}
                        aria-labelledby="navbarDropdown"
                        
                      >
                        <li>
                          <Link to="/destination" className="dropdown-item text-dark">
                            Destination
                          </Link>
                        </li>
                        <li>
                          <Link to="/booking" className="dropdown-item text-dark">
                            Booking
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/travel-guides"
                            className="dropdown-item text-dark"
                          >
                            Travel Guides
                          </Link>
                        </li>
                        <li >
                          <Link
                            to="/testimonial"
                            className="dropdown-item text-dark"
                          >
                            Testimonials
                          </Link>
                        </li>
                       
                      </ul>
                      
                      <div />
                    </li>
                    
                  </>
                )
              )}

              {/* drop down */}
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
