import { useEffect, useState } from "react";
import { TbUser } from "react-icons/tb";

const GetAllDoctorData = () => {
    const [search,] = useState("");
    const [acs, ] = useState(true);
    const [allDoc, setAllDoc] = useState([]);
    useEffect(() => {
        fetch(
            `http://localhost:5000/getDoctorsData?search=${search}&sort=${acs ? "asc" : "desc"
            }`
          )
          .then((res) => res.json())
          .then((data) => setAllDoc(data));
      }, [search,acs]);
    return (
        <div className="border rounded-lg pt-10 pb-5 pl-5 mx-8 cursor-pointer hover:shadow-md duration-300">
        <div className="flex items-center gap-8">
        <div className="px-4 py-4 bg-red-100 rounded-md"> 
         <h4 className="text-5xl text-[#FF0034]"><TbUser /></h4>
         </div>
         <h2 className="text-6xl text-[#6C6B6B]">{allDoc.length}</h2>
        </div>
         <hr className="border-2 border-[#FF0034] mt-5 mr-4" />
         <p className="text-[#3B3A3A] text-xl mt-3 font-semibold">Doctor</p>
      </div>
    );
};

export default GetAllDoctorData;