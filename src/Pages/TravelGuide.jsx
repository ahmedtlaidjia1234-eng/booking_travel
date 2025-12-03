import TravelGuides from "../Components/TravelGuideC/TravelGuides"
import HomeSec from "../Components/homeSection/HomeSec"

const TravelGuide = () => {
  return (
    <div>
        <HomeSec href='Guides'/>
        <div className="py-5">
        <TravelGuides />
        </div>
    </div>
  )
}

export default TravelGuide