import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import SingleTabInformation from "../SingleTabInformation/SingleTabInformation"

function ServiceTabComponent() {
    return (
        <div>
            <div className="text-center lg:text-start mt-4 lg:mt-8">
                <h2 className="text-4xl font-bold">Our Services</h2>
                <p className="text-[#3B3A3A] mt-3 font-medium lg:pr-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            {/* react tabs */}
            <Tabs>
                <TabList className="flex justify-start gap-5  border lg:mr-5 text-[#3B3A3A] font-semibold rounded-lg mx-2 lg:mx-0 mt-8">
                    <Tab className="hover:bg-[#F7A582] px-5 lg:px-9 py-5 cursor-pointer rounded-lg focus:bg-[#F7A582] duration-300 " >Cavity Protection</Tab>
                    <Tab className="hover:bg-[#F7A582] px-5 lg:px-9 py-5 cursor-pointer rounded-lg focus:bg-[#F7A582] duration-300" >Cosmetic Dentisty</Tab>
                    <Tab className="hidden lg:block hover:bg-[#F7A582] px-12 py-5 cursor-pointer rounded-lg focus:bg-[#F7A582] duration-300">Oral Surgery</Tab>
                </TabList>
                {/* panel 1 */}
                <TabPanel>
                   <div>
                    <SingleTabInformation img="https://img.freepik.com/free-photo/white-teeth_144627-6523.jpg?w=1060&t=st=1704358586~exp=1704359186~hmac=c948891a3d395f6929fd4f3202ca4bd72ec37a43f923fe3f51374ad072cc5935" title="Teeth Whitening"/>
                   </div>
                </TabPanel>
                <TabPanel>
                    <SingleTabInformation img="https://img.freepik.com/free-photo/male-professional-dentist-with-gloves-mask-discuss-what-treatment-will-look-like-patient-s-teeth_158595-7630.jpg?w=1060&t=st=1704360299~exp=1704360899~hmac=97b79c4cd75f922eaacdfd5e000e9fe3ddf301f582f35e9aadc1a5766fab5257" title="Electro Gastrology Therapy" />
                </TabPanel>
                <TabPanel className="hidden lg:block">
                    <SingleTabInformation img="https://img.freepik.com/free-photo/ordinary-busy-day-surgeon_329181-19717.jpg?w=1060&t=st=1704360506~exp=1704361106~hmac=08945972b553ece0717fd9197b994e9cf73fff54c825f38abc024b855f63ed77" title="Dental Implant Surgery"/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ServiceTabComponent