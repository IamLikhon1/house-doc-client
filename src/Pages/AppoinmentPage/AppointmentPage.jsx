import { useQuery } from "@tanstack/react-query"
import SubBanner from "../../SharedComponents/SubBanner/SubBanner"
import Loader from "../../SharedComponents/Loader/Loader"

import appointmentBanner from '../../assets/AppBanner.png'
import BookCard from "../../SharedComponents/BookCard/BookCard"

function AppointmentPage() {
  const { isLoading, data } = useQuery({
    queryKey: ['servicesData'],
    queryFn: () =>
      fetch('http://localhost:5000/getAllServiceData').then((res) =>
        res.json()
      ),
  })
  if (isLoading) return <Loader />

  const appointmentData = data.filter(item => item.category == 'Appointment');
  return (
    <div>
      {/* Sub banner */}
      <SubBanner title="Appointment" subTitle="Appointment Page" />

      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-5 mt-8 mx-2">
          <div>
            555
          </div>
          <div className="">
            <img src={appointmentBanner} alt="" />
          </div>

        </div>

        
          <h2 className="text-4xl text-[#3B3A3A] font-bold mt-16 text-center">Please select a slots for service.</h2>

          <div className="mt-10 grid lg:grid-cols-3 gap-8 mx-2 lg:mx-0">
            {
              appointmentData.map(item=>(
                <BookCard key={item._id} item={item}/>
              ))
            }
          </div>
        
      </div>
    </div>
  )
}

export default AppointmentPage