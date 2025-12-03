import { Link } from "react-router-dom"

const NotFoundErr = () => {
  return (
    <div className="bg-dark text-white border-white " style={{paddingTop : '30px'}}>
    <div className="container py-5 my-2 text-center" style={{minHeight : '65vh'}}>
        <h3 className=""><span className="green">♣</span> Page Not Found <span className="green">♣</span></h3>
        <br />
        <h1 className="text-danger">404</h1>
        <br />
        <h4>This Page doesent exist want to go to home page ? {' --> '} <Link to={'/'} className="green">Home Page</Link></h4>
    </div>
    </div>
  )
}

export default NotFoundErr