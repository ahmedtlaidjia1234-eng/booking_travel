
import styled from "styled-components"
import {Link} from 'react-router-dom'
const HomeText = styled.div`
animation : anime 1.3s forwards ;
filter : blur(5px);
color : #fff;

transform: translateY(-40px);
@keyframes anime{
    100%{
        filter : blur(0px);
        transform: translateY(0px);
    }
}
`

const HomeSec = (prop) => { // Use destructuring to access value
  
const href = prop.href

  return (
    <div className="position-relative w-100 " style={{color : '#fff', height : '70vh',overflow : 'hidden',marginBottom : '15px'}}>


<div className="d-flex justify-content-center align-items-center text-center position-relative" style={{width : '100%',height : '100%' }}>
      
      <HomeText className=" px-3 py-3 position-relative">
        {!href ?
        <>
          <h1>Enjoy Your Vacation With Us</h1>
        <p>Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
        </>
      :
      <>
      <h1>{href}</h1>
      <br />

     <span> <Link className="green px-2" to='/'>Home</Link> / <Link className="green px-2">Pages</Link> / <span className="px-2">{ href }</span>  </span>
      </>

      }
        
      </HomeText>
    </div>

    
    <video autoPlay muted loop id="myVideo" className='video' style={{top : '0px',zIndex : '-1',width : '100%',height : '100%',objectFit : 'cover'}}>
  <source src="HomethemeBackgroundV.mp4" type="video/mp4"/>
</video>

   
    </div>
  );
};
export default HomeSec