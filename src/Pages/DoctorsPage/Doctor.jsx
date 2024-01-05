import { useQuery } from "@tanstack/react-query"
import DoctorsCard from "../../SharedComponents/DoctorsCard/DoctorsCard";
import Loader from "../../SharedComponents/Loader/Loader";

function Doctor() {
  const { isLoading, data } = useQuery({
    queryKey: ['doctorData'],
    queryFn: () =>
        fetch('http://localhost:5000/getDoctorsData').then((res) =>
            res.json()
        ),
})
if (isLoading) return <Loader/>
// console.log(data);
  return (
    <div>
      <div className="grid lg:grid-cols-4 mx-2 lg:mx-8 lg:gap-10 mt-10 ">
                {
                    data?.map(item => (
                        <DoctorsCard key={item._id} item={item} />
                    ))
                }
            </div>
    </div>
  )
}

export default Doctor