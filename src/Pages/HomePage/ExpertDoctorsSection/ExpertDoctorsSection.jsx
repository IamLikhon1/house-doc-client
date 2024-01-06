import { useQuery } from "@tanstack/react-query"
import DoctorsCard from "../../../SharedComponents/DoctorsCard/DoctorsCard";
import Loader from "../../../SharedComponents/Loader/Loader";

function ExpertDoctorsSection() {
    const { isLoading, data } = useQuery({
        queryKey: ['doctorData'],
        queryFn: () =>
            fetch('http://localhost:5000/getDoctorsData').then((res) =>
                res.json()
            ),
    })
    if (isLoading) return <Loader/>
    // console.log(data[0].star);
    return (
        <div className="max-w-7xl mx-auto lg:mt-36 mt-20">
            {/* title */}
            <div className="text-center">
                <h2 className="text-4xl font-bold">Our Expert Doctors</h2>
                <p className="mt-5 text-[#3B3A3A] lg:px-48 px-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className="grid lg:grid-cols-3 mx-2 lg:mx-0 lg:gap-10 mt-10">
                {
                    data?.slice(0, 3).map(item => (
                        <DoctorsCard key={item._id} item={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default ExpertDoctorsSection