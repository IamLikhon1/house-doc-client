import { useQuery } from "@tanstack/react-query"
import SubBanner from "../../SharedComponents/SubBanner/SubBanner"
import Loader from "../../SharedComponents/Loader/Loader"

import appointmentBanner from '../../assets/AppBanner.png'

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
  console.log(appointmentData);
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
      </div>
    </div>
  )
}

export default AppointmentPage