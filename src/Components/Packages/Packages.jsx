import './Packages.css'
import PackagesCards from './PackagesCards'
const arr = [
  {
    Place : 'Thailand',
    DestImg : '/pic5.jpg',
    price : '$149.00'
  },
  {
    Place : 'Indonesia',
    DestImg : '/pic3.jpg',
    price : '$139.00'
  },
  {
    Place : 'Malaysia',
    DestImg : '/pic2.jpg',
    price : '$189.00'
  },
]

const PackagesC = () => {
  return (
    <div className='container my-5'>
      <div className=" d-flex gap-1 justify-content-center">

<div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
    <div className='textBorders greenBackground  ' style={{width : '50px'}}/>
    <div className='textBorders greenBackground ' style={{width : '25px',top : '7px',left : '24px'}}/>
  </div>

<h4 className="green mx-3">Services</h4>

<div className='d-flex flex-column position-relative h-100 ' style={{top : '10px'}}  >
    <div className='textBorders greenBackground ' style={{width : '50px'}}/>
    <div className='textBorders greenBackground' style={{width : '25px',top : '7px',
left: "0px"}}/>
  </div>

</div>
<h1 className='text-center'>Awesome Packages</h1>
<div className='d-flex gap-3 justify-content-center' style={{flexWrap : 'wrap'}}>
{arr.map((value,index)=>(
  <PackagesCards key={index} cardD={value} index={index}/>
  
))}
</div>

    </div>
  )
}

export default PackagesC