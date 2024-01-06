import { useQuery } from "@tanstack/react-query"
import DoctorsCard from "../../SharedComponents/DoctorsCard/DoctorsCard";
import Loader from "../../SharedComponents/Loader/Loader";
import SubBanner from "../../SharedComponents/SubBanner/SubBanner";

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
      {/* banner */}
      <SubBanner title='Doctors Page' subTitle='Doctors Page'/>
     <div className="max-w-7xl mx-auto">
     <div className="grid lg:grid-cols-4 gap-5 mt-10 mx-2 lg:mx-0">
                {
                    data?.map(item => (
                        <DoctorsCard key={item._id} item={item} />
                    ))
                }
            </div>
     </div>
    </div>
  )
}

export default Doctor