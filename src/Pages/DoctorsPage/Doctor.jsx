import { useQuery } from "@tanstack/react-query"
import DoctorsCard from "../../SharedComponents/DoctorsCard/DoctorsCard";
import Loader from "../../SharedComponents/Loader/Loader";
import SubBanner from "../../SharedComponents/SubBanner/SubBanner";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

function Doctor() {
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [acs, setAcs] = useState(true);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['doctorData'],
    queryFn: () =>
      fetch(`http://localhost:5000/getDoctorsData?search=${search}&sort=${acs ? "asc" : "desc"
        }`).then((res) =>
          res.json()
        ),
  })
  if (isLoading) return <Loader />

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    refetch();
    toast.success('Click once more')
  };

  const handleRefresh=()=>{
    refetch();
    toast.success('Wait')
  };
  return (
    <div>
      {/* banner */}
      <SubBanner title='Doctors Page' subTitle='Doctors Page' />
      {/* search */}
      <div className="max-w-7xl mx-auto flex">
        <input type="text" ref={searchRef} className="mt-5 ml-2 lg:ml-0 w-fit px-10 lg:px-20 py-3 rounded-lg border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Search by Doctor Name" />
        <button onClick={handleSearch} className='px-5 py-2 lg:px-12 lg:py-3 rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-4 ml-3 hover:bg-[#F7A582] hover:text-white duration-500'>Search</button>
      </div>
      {/* sort */}
      <div onClick={handleRefresh}>
        <button className="px-5 py-2 lg:px-12 lg:py-3 rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-4 ml-3 hover:bg-[#F7A582] hover:text-white duration-500" onClick={() => setAcs(!acs)}>
          {acs ? "Fee: Low to High" : "Fee: High to Low"}
        </button>
      </div>
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