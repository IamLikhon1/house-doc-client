import Banner from "../Banner/Banner"
import ContactUS from "../ContactUS/ContactUS"
import ExpertDoctorsSection from "../ExpertDoctorsSection/ExpertDoctorsSection"
import InformationSection from "../InformationSection/InformationSection"
import ServiceSection from "../ServiceSection/ServiceSection"
import TestimonialSection from "../TestimonialSection/TestimonialSection"

function Home() {
  return (
    <div>
      <Banner />
      <ServiceSection/>
      <InformationSection/>
      <TestimonialSection/>
      <ExpertDoctorsSection/>
      <ContactUS/>
    </div>
  )
}

export default Home