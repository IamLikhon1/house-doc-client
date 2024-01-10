import { useQuery } from "@tanstack/react-query"
import Loader from "../../../../../SharedComponents/Loader/Loader"
import { useContext } from "react"
import { AuthContext } from "../../../../../provider/AuthProvider"
import { BsThreeDots } from "react-icons/bs";
import unknownAvatar from '../../../../../assets/unknow.png'
import DoctorShowDataDelete from "./DoctorShowDataDelete/DoctorShowDataDelete";

function DoctorShowData() {
  const { user } = useContext(AuthContext);
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['getReview'],
    queryFn: () =>
      fetch('https://house-doc-server-production.up.railway.app/getReview').then((res) =>
        res.json()
      ),
  })
  refetch()
  if (isLoading) return <Loader />
  return (
    <div className="mt-5">
      <div>

        {
          data?.map(item => (
            <div key={item._id}>

              <div className="border-2 rounded-lg py-4 cursor-pointer hover:shadow-md duration-300 group mt-3">
                <h2 className="px-5 font-bold">{item.name}</h2>
                <p className="px-5 mt-2 mb-1">{item.review}</p>
              </div>

              <div className="relative bottom-5 right-3">

                {/* {src={user?.photoURL || defaultImg}} */}
                 <img src={user?.photoURL || unknownAvatar} className="w-[12%] h-[12%]  lg:w-[10%] lg:h-[10%] rounded-full" alt="" />
              </div>
              <div >
                <div className="relative">
                  <div
                    className="cursor-pointer"
                  >
                     <BsThreeDots onClick={() => document.getElementById('my_modal_1').showModal()} className="absolute bottom-11 right-4 lg:bottom-14 text-3xl lg:text-4xl font-bold" />
                  </div>
                  <DoctorShowDataDelete refetch={refetch} item={item} />
                </div>
              </div>

            </div>

          ))
        }
      </div>
    </div>
  )
}

export default DoctorShowData