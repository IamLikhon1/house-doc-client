import Service from "../../ServicesPage/Service"
import Banner from "../Banner/Banner"
import ContactUS from "../ContactUS/ContactUS"
import InformationSection from "../InformationSection/InformationSection"
import TestimonialSection from "../TestimonialSection/TestimonialSection"

function Home() {
  return (
    <div>
      <Banner />
      <Service/>
      <InformationSection/>
      <TestimonialSection/>
      <ContactUS/>
    </div>
  )
}

export default Home