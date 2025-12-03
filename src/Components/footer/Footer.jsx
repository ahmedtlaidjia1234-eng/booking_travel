import "./footer.css";
import { Link } from "react-router-dom";

const company = [
  {
    name: "About-Us",
  },
  {
    name: "Contact-Us",
  },
  {
    name: "Privacy-And-Policy",
  },
  {
    name: "Terms-And-Condition",
  },
];

const Gallery = [
  {
    pic: "/pic1.jpg",
  },
  {
    pic: "/pic2.jpg",
  },
  {
    pic: "/pic3.jpg",
  },
  {
    pic: "/pic4.jpg",
  },
  {
    pic: "/pic5.jpg",
  },
  {
    pic: "/pic6.jpg",
  },
];

const list = [
  {
    name: "Home",
  },
  {
    name: "Cookies",
  },
  {
    name: "Help",
  },
];

const Footer = () => {
  return (
    <div className="bg-dark text-light" style={{ paddingTop: "50px" }}>
      <div className="footer container py-5">
        <div className="d-inline-block">
          <h4>Company</h4>
          {company.map((value, index) => (
            <Link
              className="text-white d-flex gap-2 btn "
              to={value.name.toLowerCase()}
              key={index}
            >
              <span style={{ fontWeight: "900" }}>&gt;</span>
              <li>{value.name}</li>
            </Link>
          ))}
        </div>
        <div>
          <h4>Gallery</h4>
          <div className="gallery">
            {Gallery.map((value, index) => (
              <img
                src={value.pic} // Use data-src for lazy loading
                alt="pics"
                key={index}
                className="galImg"
                loading="lazy" // Enable lazy loading
              />
            ))}
          </div>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="bg-light d-flex py-3 px-3 gap-3 rounded">
            <input
              type="text"
              style={{
                outline: "none",
                border: "none",
                maxWidth: "100%",
                width: "100%",
              }}
              name="email"
              placeholder="Place E-mail"
            />
            <button className="btn greenBackground text-white">SignUp</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-3 container d-flex justify-content-between w-100">
        <p>
          © <span className="border-bottom cursor-pointer">Your Site Name</span>
          , All Rights Reserved. Designed By{" "}
          <span className="border-bottom cursor-pointer">HTML Codex</span>
        </p>
        <ul className="d-flex gap-3">
          {list.map((value, index) => (
            <Link
              key={index}
              to={"/" + value.name.toLowerCase()}
              className={value.name !== "" ? "border-start px-3" : "px-3"}
            >
              {value.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;