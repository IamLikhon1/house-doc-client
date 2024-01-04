import ServiceTabComponent from "./ServiceTabComponent/ServiceTabComponent"

import serviceBanner from '../../../assets/MsDoctor.png'

function ServiceSection() {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid lg:grid-cols-2 gap-2 lg:gap-0 lg:mt-10">

        {/* image */}
        <div className="mt-8 mx-3 lg:ml-5">
          <img src={serviceBanner} className="lg:h-[1010px]" alt="" />
        </div>

        {/* react tab component */}

        <div>
          <ServiceTabComponent />
        </div>

      </div>
    </div>
  )
}

export default ServiceSection