import { useQuery } from "@tanstack/react-query"
import SubBanner from "../../SharedComponents/SubBanner/SubBanner"
import Loader from "../../SharedComponents/Loader/Loader"
import BookCard from "../../SharedComponents/BookCard/BookCard"

function Service() {
  const { isLoading, data } = useQuery({
    queryKey: ['servicesData'],
    queryFn: () =>
      fetch('http://localhost:5000/getAllServiceData').then((res) =>
        res.json()
      ),
  })
  if (isLoading) return <Loader />
  return (
    <div>
      {/* sub banner */}
      <SubBanner title="Service" subTitle="Services Page" />
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex items-center justify-between">
          {/* search */}
          <div className="flex mt-5">
            <input type="text" className="mt-5 ml-2 lg:ml-0 w-fit px-8 lg:px-44 py-4 rounded-lg border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Search by Service Name" />
            <button className='px-4 lg:px-14  rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-4 lg:mt-5 ml-3 hover:bg-[#F7A582] hover:text-white duration-500'>Search</button>
          </div>
          {/* sort */}
          <div>
            {/* <button className="relative left-16 lg:left-0 px-10 py-4 rounded-md border-2 border-[#07332F] text-[#07332F] font-semibold mt-7 ml-3 hover:bg-[#07332F] hover:text-white duration-500">
           
            </button> */}
          </div>

        </div>
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-8 mt-10 mx-2 lg:mx-0">
          {
            data?.map(item => (
              <BookCard key={item._id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Service