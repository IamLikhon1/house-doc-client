import ServiceTabComponent from "./ServiceTabComponent/ServiceTabComponent"
import serviceBanner from '../../assets/MsDoctor.png'

function Service() {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid lg:grid-cols-2 gap-2 lg:gap-0">

        {/* image */}
        <div className="mt-16 mx-3 lg:ml-5">
          <img src={serviceBanner} alt="" />
        </div>

        {/* react tab component */}

        <div>
          <ServiceTabComponent />
        </div>

      </div>
    </div>
  )
}

export default Service