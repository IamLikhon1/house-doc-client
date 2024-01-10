import DoctorsCard from "../../../SharedComponents/DoctorsCard/DoctorsCard";
import { useEffect, useState } from "react";

function ExpertDoctorsSection() {
    const [search,] = useState("");
    const [acs, ] = useState(true);
    const [allDoc, setAllDoc] = useState([]);
    useEffect(() => {
        fetch(
            `https://house-doc-server-production.up.railway.app/getDoctorsData?search=${search}&sort=${acs ? "asc" : "desc"
            }`
          )
          .then((res) => res.json())
          .then((data) => setAllDoc(data));
      }, [search,acs]);

      const topRating=allDoc.filter(rate=>rate.star?.length===5)
    //   console.log(topRating);
    return (
        <div className="max-w-7xl mx-auto lg:mt-36 mt-20 overflow-x-hidden">
            {/* title */}
            <div className="text-center">
                <h2 className="text-4xl font-bold">Our Expert Doctors</h2>
                <p className="mt-5 text-[#3B3A3A] lg:px-48 px-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className="grid lg:grid-cols-3 mx-2 lg:mx-0 lg:gap-10 mt-10">
                {
                    topRating?.slice(0, 3).map(item => (
                        <DoctorsCard key={item._id} item={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default ExpertDoctorsSection