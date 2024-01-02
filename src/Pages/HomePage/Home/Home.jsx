import Banner from "../Banner/Banner"
import InformationSection from "../InformationSection/InformationSection"
import TestimonialSection from "../TestimonialSection/TestimonialSection"

function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <InformationSection/>
      <TestimonialSection/>
    </div>
  )
}

export default Home