import { useQuery } from "@tanstack/react-query";
import Loader from "../../../SharedComponents/Loader/Loader";
import Swal from "sweetalert2";

const AllAppointmentRoute = () => {
    const { isLoading, data, refetch } = useQuery({
        queryKey: ['testimonialData'],
        queryFn: () =>
            fetch('http://localhost:5000/getAllUserSentData').then((res) =>
                res.json()
            ),
    })
    if (isLoading) return <Loader />
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


                fetch(`http://localhost:5000/deleteUserSentData/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Appointment data has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })

    }
    return (
        <div className="text-[#383838]">
            <div>
                <h2 className="text-5xl text-center  font-semibold mt-8 lg:mt-0">All Appointment lits</h2>
                <div className="mx-2 my-10">
                    <div className="overflow-x-auto">
                        <table className="table text-center font-semibold">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Service Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.map((item, index) => (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.service_name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.number}</td>
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

export default AllAppointmentRoute;