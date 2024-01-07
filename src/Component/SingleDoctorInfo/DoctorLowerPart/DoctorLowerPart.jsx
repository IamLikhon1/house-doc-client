import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DoctorOverview from './DoctorOverview/DoctorOverview';
import DoctorForm from './DoctorForm/DoctorForm';
function DoctorLowerPart({ loader }) {
    return (
        <div className="bg-white mt-5 mx-2">
            <div className='py-8 rounded-lg mx-2 lg:mx-20'>
                <Tabs>
                    <TabList className="flex justify-center gap-16 lg:justify-evenly lg:gap-0 border-2 lg:mr-5 text-[#3B3A3A] font-bold rounded-lg  lg:mx-0 mt-8 w-full">
                        <Tab className="hover:bg-[#F7A582] px-6 lg:px-40 py-5 cursor-pointer rounded-lg focus:bg-[#F7A582] duration-300" >Overview</Tab>
                        <Tab className="hover:bg-[#F7A582] px-6 lg:px-40 py-5 cursor-pointer rounded-lg focus:bg-[#F7A582] duration-300 " >Review</Tab>

                    </TabList>

                    <TabPanel className="pl-4">
                        <DoctorOverview loader={loader} />
                    </TabPanel>
                    <TabPanel className="pl-4">
                        <DoctorForm loader={loader} />
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    )
}

export default DoctorLowerPart