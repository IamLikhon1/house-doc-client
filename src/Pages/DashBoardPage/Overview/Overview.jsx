import GetAllDoctorData from "./GetAllDoctorData";
import GetAllServicesData from "./GetAllServicesData";
import GetAllAppointmentData from "./GetAllAppointmentData";


const Overview = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 lg:mt-20 lg:mx-5">
                {/* doctor card */}
                <GetAllDoctorData />

                {/* services */}
                <GetAllServicesData />

                {/* Appointment */}
                <GetAllAppointmentData />
            </div>
        </div>
    );
};

export default Overview;