import DoctorsCard from "../../SharedComponents/DoctorsCard/DoctorsCard";
import SubBanner from "../../SharedComponents/SubBanner/SubBanner";
import { useEffect, useRef, useState } from "react";

function Doctor() {
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [acs, setAcs] = useState(true);
  const [allDoc, setAllDoc] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/getDoctorsData?search=${search}&sort=${acs ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setAllDoc(data));
  }, [acs, search]);
  // const { isLoading, data, refetch } = useQuery({
  //   queryKey: ['doctorData'],
  //   queryFn: () =>
  //     fetch(`http://localhost:5000/getDoctorsData?search=${search}&sort=${acs ? "asc" : "desc"
  //       }`).then((res) =>
  //         res.json()
  //       ),
  // })
  // if (isLoading) return <Loader />

  const handleSearch = () => {
    setSearch(searchRef.current.value);

  };

  return (
    <div>
      {/* banner */}
      <SubBanner title='Doctors Page' subTitle='Doctors Page' />
      <div className="max-w-7xl mx-auto ">
        <div className="lg:flex items-center justify-between">
          {/* search */}
          <div className="flex mt-5">
            <input type="text" ref={searchRef} className="mt-5 ml-2 lg:ml-0 w-fit px-7 lg:px-32 py-3 rounded-lg border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Search by Doctor Name" />
            <button onClick={handleSearch} className='px-5  lg:px-12 lg:py-2 rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-4 ml-3 hover:bg-[#F7A582] hover:text-white duration-500'>Search</button>
          </div>
          {/* sort */}
          <div>
            <button className="relative left-20 lg:left-0  px-8 py-3 lg:px-12 lg:py-3 rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-7 ml-3 hover:bg-[#F7A582] hover:text-white duration-500" onClick={() => setAcs(!acs)}>
              {acs ? "Fee: Low to High" : "Fee: High to Low"}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-5 mt-5 mx-2 lg:mx-0">
            {
              allDoc?.map(item => (
                <DoctorsCard key={item._id} item={item} />
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Doctor