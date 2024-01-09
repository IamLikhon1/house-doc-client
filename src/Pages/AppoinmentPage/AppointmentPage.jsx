import SubBanner from "../../SharedComponents/SubBanner/SubBanner"

import appointmentBanner from '../../assets/AppBanner.png'
import BookCard from "../../SharedComponents/BookCard/BookCard"
import { useEffect, useState } from "react"

function AppointmentPage() {
  const [search,] = useState("");
    const [acs, ] = useState(true);
    const [allDoc, setAllDoc] = useState([]);
    useEffect(() => {
        fetch(
            `http://localhost:5000/getAllServiceData?search=${search}&sort=${acs ? "asc" : "desc"
            }`
          )
          .then((res) => res.json())
          .then((data) => setAllDoc(data));
      }, [search,acs]);

  const appointmentData = allDoc.filter(item => item.category == 'Appointment');
  return (
    <div>
      {/* Sub banner */}
      <SubBanner title="Appointment" subTitle="Appointment Page" />

      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-5 mt-8 mx-2">
          {/* left text */}
          <div className="text-[#3B3A3A] text-start">
            <h2 className="text-4xl font-semibold">After Booking</h2>
            <p className="mt-3 text-xl">Hi fill in the details and submit the form. We will <br /> contact you via phone or email and fix a time schedule.</p>
            <p className="mt-3 text-xl font-semibold ">These are the thing you need to carry with you when you <br /> come in for the appointment wit the doctor.</p>
            <ul className="mt-3 text-lg space-y-3">
              <li>Previous Medical History
              </li>
              <li> Enlisted Previous Numbers
              </li>
              <li> Discussion with Parents
              </li>
              <li>Make sure you are feeling good
              </li>
              <li>Have someone eith you</li>
            </ul>
          </div>
          {/* right img */}
          <div className="mt-3 lg:mt-0">
            <img src={appointmentBanner} alt="" />
          </div>

        </div>


        <h2 className="text-4xl text-[#3B3A3A] font-bold mt-16 text-center">Please select a our available slots for service.</h2>

        <div className="mt-10 grid lg:grid-cols-3 gap-8 mx-2 lg:mx-0">
          {
            appointmentData?.map(item => (
              <BookCard key={item._id} item={item} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default AppointmentPage