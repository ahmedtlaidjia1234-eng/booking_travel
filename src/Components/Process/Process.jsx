import './Process.css'
import ProcessCards from './ProcessCards'

const arr = [

    {
        icon : <i className='fa-solid fa-globe icon'></i>,
        title : 'Choose A Destination',
    },
    {
        icon : <i className="fa-solid fa-dollar-sign icon"></i>,
        title : 'Pay Online',
    },
    {
        icon : <i className='fa-solid fa-plane icon'></i>,
        title : 'Fly Today',
    },

]

const Process = () => {
  return (
    <div className='container py-3 my-3'>
        <div className="py-3">
        <div className=" d-flex gap-1 justify-content-center">

        <div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
            <div className='textBorders greenBackground ' style={{width : '50px'}}/>
            <div className='textBorders greenBackground' style={{width : '25px',top : '7px',left : '24px'}}/>
          </div>

        <h4 className="green mx-3">Process</h4>

        <div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
            <div className='textBorders greenBackground ' style={{width : '50px'}}/>
            <div className='textBorders greenBackground' style={{width : '25px',top : '7px',
    left: "0px"}}/>
          </div>

        </div>
        <h1 className='text-center'>3 Easy Steps</h1>
        </div>
    <div className='my-3 d-flex justify-content-center align-items-center gap-5'>
        {arr.map((val,ind)=>(
            <ProcessCards key={ind} Info={val} index={ind} />
        ))
        }
    </div>
    </div>
  )
}

export default Process