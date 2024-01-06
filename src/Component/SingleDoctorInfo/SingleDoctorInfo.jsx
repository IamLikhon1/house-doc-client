import { useLoaderData } from "react-router-dom"

function SingleDoctorInfo() {
    const loader=useLoaderData();
    console.log(loader);
  return (
    <div>SingleDoctorInfo</div>
  )
}

export default SingleDoctorInfo