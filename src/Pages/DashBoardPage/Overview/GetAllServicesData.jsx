import { useEffect, useState } from "react";
import { GrServices } from "react-icons/gr";

const GetAllServicesData = () => {
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
    return (
        <div className="border rounded-lg pt-10 pb-5 pl-5  mx-8 cursor-pointer hover:shadow-md duration-300">
        <div className="flex items-center gap-5">
        <div className="px-4 py-4 bg-green-100 rounded-md"> 
         <h4 className="text-5xl text-[#7BB13C]"><GrServices /></h4>
         </div>
         <h2 className="text-6xl text-[#6C6B6B]">{allDoc.length}</h2>
        </div>
         <hr className="border-2 border-[#7BB13C] mt-5 mr-4" />
         <p className="text-[#3B3A3A] text-xl mt-3 font-semibold">Services</p>
      </div>

    );
};

export default GetAllServicesData;