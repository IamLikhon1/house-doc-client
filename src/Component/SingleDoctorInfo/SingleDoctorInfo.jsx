import { useLoaderData } from "react-router-dom"
import SubBanner from "../../SharedComponents/SubBanner/SubBanner";
import DoctorHeaderPart from "./DoctorHeaderPart/DoctorHeaderPart";
import DoctorLowerPart from "./DoctorLowerPart/DoctorLowerPart";

function SingleDoctorInfo() {
    const loader = useLoaderData();
    return (
        <div className="bg-[#F3F3F3] pb-10">
            <SubBanner title="Doctor Profile" subTitle="Doctor Profile" />
            <div className="max-w-7xl mx-auto">
                <DoctorHeaderPart loader={loader} />
                <DoctorLowerPart loader={loader} />
            </div>
        </div>
    )
}

export default SingleDoctorInfo