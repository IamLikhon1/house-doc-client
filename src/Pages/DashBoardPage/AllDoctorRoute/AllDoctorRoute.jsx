import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllDoctorRoute = () => {
    const [search,] = useState("");
    const [acs,] = useState(true);
    const [allDoc, setAllDoc] = useState([]);
    useEffect(() => {
        fetch(
            `https://house-doc-server-production.up.railway.app/getDoctorsData?search=${search}&sort=${acs ? "asc" : "desc"
            }`
        )
            .then((res) => res.json())
            .then((data) => setAllDoc(data));
    }, [search, acs]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://house-doc-server-production.up.railway.app/deleteDoctorData/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Doctor data has been deleted.',
                                'success'
                            )
                            const remaining = allDoc.filter(toy => toy._id !== id);
                            setAllDoc(remaining);
                        }
                    })

            }
        })

    }
    return (
        <div className="text-[#383838]">
            <div>
                <h2 className="text-5xl text-center mt-5 font-semibold mt-8 lg:mt-0 ">All Doctor lits</h2>
                <div className="mx-2 my-10">
                    <div className="overflow-x-auto">
                        <table className="table text-center font-semibold">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Days / Week</th>
                                    <th>Experience</th>
                                    <th>Degree</th>
                                    <th>Fee</th>
                                    <th>Location</th>
                                    <th>Specialization</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allDoc?.map((item, index) => (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.available_day}</td>
                                            <td>{item.experience}</td>
                                            <td>{item.degree}</td>
                                            <td>${item.fee}</td>
                                            <td>{item.location}</td>
                                            <td>{item.specializationOne} / {item.specializationTwo}</td>
                                            <td onClick={() => handleDelete(item._id)} className="bg-[#E11244] px-2  rounded-md text-white cursor-pointer">Delete</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDoctorRoute;