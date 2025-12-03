
const SosialMedia = () => {
  return (

    <div className="d-flex justify-content-between align-items-center bg-dark text-light py-1 container-fluid collapse navbar-collapse ">

        <div className="d-flex gap-3 align-items-center">
        <span><i className="fa-solid fa-location mx-1"></i> Street 127 New york</span>
        <span><i className="fa-solid fa-phone mx-1"></i> +213-505-505-505</span>
        <span><i className="fa-solid fa-envelope mx-1"></i> your@email.com</span>
        </div>

        <div className="d-flex gap-3 align-items-center justify-content-center text-center">
        <a href="#" className="border rounded-circle overflow-hidden" style={{minWidth : '27px',width : '100%'}} ><i className="fa-brands fa-twitter  "></i></a>
        <a href="#" className="border rounded-circle overflow-hidden" style={{minWidth : '27px',width : '100%'}}><i className="fa-brands fa-facebook-f  "></i></a>
        <a href="#" className="border rounded-circle overflow-hidden" style={{minWidth : '27px',width : '100%'}}><i className="fa-brands fa-linkedin-in  "></i></a>
        <a href="#" className="border rounded-circle overflow-hidden" style={{minWidth : '27px',width : '100%'}}><i className="fa-brands fa-youtube  "></i></a>
        </div>

    </div>
  
  )
}

export default SosialMedia