import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

function ServiceTabComponent() {
    return (
        <div>
            <div className="text-center lg:text-start mt-4 lg:mt-0">
            <h2 className="text-4xl font-bold">Our Services</h2>
            <p className="text-[#3B3A3A] mt-3 font-medium pr-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            {/* react tabs */}
            <Tabs>
                <TabList className="flex justify-start gap-5  border lg:mr-5 text-[#3B3A3A] font-semibold rounded-lg mx-2 lg:mx-0 mt-8">
                    <Tab className="hover:bg-[#F7A582] px-5 lg:px-9 py-5 cursor-pointer rounded-lg focus:bg-[#F7A582] duration-300 " >Cavity Protection</Tab>
                    <Tab className="hover:bg-[#F7A582] px-5 lg:px-9 py-5 cursor-pointer rounded-lg focus:bg-[#F7A582] duration-300" >Cosmetic Dentisty</Tab>
                    <Tab className="hidden lg:block hover:bg-[#F7A582] px-12 py-5 cursor-pointer rounded-lg focus:bg-[#F7A582] duration-300">Oral Surgery</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel className="hidden lg:block">
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ServiceTabComponent