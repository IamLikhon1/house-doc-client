import { useQuery } from "@tanstack/react-query"
import Loader from "../../../../../SharedComponents/Loader/Loader"
import { useContext } from "react"
import { AuthContext } from "../../../../../provider/AuthProvider"
import { BsThreeDots } from "react-icons/bs";
import unknownAvatar from '../../../../../assets/unknow.png' 

function DoctorShowData() {
  const { user } = useContext(AuthContext);
  const { isLoading, data } = useQuery({
    queryKey: ['getReview data'],
    queryFn: () =>
      fetch('http://localhost:5000/getReview').then((res) =>
        res.json()
      ),
  })
  if (isLoading) return <Loader />
  return (
    <div className="mt-5">
      <div>

        {
          data.map(item => (
            <div key={item._id}>

              <div className="border-2 rounded-lg py-4 cursor-pointer hover:shadow-md duration-500 group">
                <h2 className="px-5 font-bold">{item.name}</h2>
                <p className="px-5 mt-2 mb-1">{item.review}</p>
              </div>

              <div className="relative bottom-5 right-3">
                {user ? <img src={user.photoURL} className="w-[12%] h-[12%]  lg:w-[10%] lg:h-[10%] rounded-full" alt="" /> : <img src={unknownAvatar} className=" w-[12%] h-[12%] lg:w-[10%] lg:h-[10%] relative bottom- rounded-full" alt="" />}
              </div>

              <div className="relative cursor-pointer ">
              <BsThreeDots className="absolute bottom-11 right-4 lg:bottom-12 text-3xl lg:text-4xl font-bold" />
              </div>

            </div>

          ))
        }
      </div>
    </div>
  )
}

export default DoctorShowData