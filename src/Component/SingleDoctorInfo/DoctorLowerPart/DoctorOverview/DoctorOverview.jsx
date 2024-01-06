
function DoctorOverview({ loader }) {
    const { about_me, available_day, experience, specializationOne, specializationTwo } = loader;
    return (
        <div className="mt-8 text-[#3B3A3A]">
            <div>
                <h2 className="text-xl font-bold">About Me</h2>
                <p className="mt-3 font-semibold">{about_me}</p>
                <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            {/* education and Awards grid  */}
            <div className="lg:flex lg:gap-10">
                {/* left side */}
                <div>
                    {/* Education */}
                    <div className="mt-5">
                        <h2 className="text-xl font-bold">Education</h2>

                        {/* one */}
                        <div className="flex gap-5 mt-1">
                            <span className="text-4xl">•</span>

                            <p className="mt-2"><span className="font-semibold">American Dental Medical University</span>
                                <p>BDS</p>
                                <p>1998 - 2003</p>
                            </p>
                        </div>

                        {/* two */}
                        <div className="flex gap-5 mt-1">
                            <span className="text-4xl">•</span>

                            <p className="mt-2"><span className="font-semibold">American Dental Medical University</span>
                                <p>MDS</p>
                                <p>2004 - 2007</p>
                            </p>
                        </div>
                    </div>

                    {/* Work and Experience */}
                    <div className="mt-5">
                        <h2 className="text-xl font-bold">Work & Experience</h2>

                        {/* one */}
                        <div className="flex gap-5 mt-1">
                            <span className="text-4xl">•</span>

                            <p className="mt-2"><span className="font-semibold">Glowing Smiles Family Dental Clinic</span>

                                <p>{experience}</p>
                            </p>
                        </div>

                        {/* two */}
                        <div className="flex gap-5 mt-1">
                            <span className="text-4xl">•</span>

                            <p className="mt-2"><span className="font-semibold">Comfort Care Dental Clinic</span>
                                <p>{experience}</p>
                            </p>
                        </div>
                    </div>

                    {/* Service*/}
                    <div className="mt-5">
                        <h2 className="text-xl font-bold">Services Day</h2>

                        {/* one */}
                        <div className="flex gap-5 mt-1">
                            <span className="text-4xl">•</span>

                            <p className="mt-2"><span className="font-semibold">{available_day}</span>

                                <p>Week</p>
                            </p>
                        </div>
                    </div>
                </div>

                {/* right side */}

                <div className="mt-5 lg:mt-3 lg:pl-28">
                    {/* Awards */}
                    <div className="mt-5">
                        <h2 className="text-xl font-bold">Awards</h2>

                        {/* one */}
                        <div className="flex gap-5 mt-1">
                            <span className="text-4xl">•</span>

                            <p className="mt-2">
                                <p>July 2019</p>
                                <span className="font-semibold mt-1">Humanitarian Award</span>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                            </p>
                        </div>

                        {/* two */}
                        <div className="flex gap-5 mt-1">
                            <span className="text-4xl">•</span>

                            <p className="mt-2">
                                <p>March 2011</p>
                                <span className="font-semibold mt-1">Certificate for International Volunteer Service</span>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                            </p>
                        </div>
                        {/* three */}
                        <div className="flex gap-5 mt-1">
                            <span className="text-4xl">•</span>

                            <p className="mt-2">
                                <p>May 2008</p>
                                <span className="font-semibold mt-1">The Dental Professional of The Year Award</span>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                            </p>
                        </div>
                    </div>
                    {/* Specializations */}
                    <div className="mt-5">
                        <h2 className="text-xl font-bold">Specializations</h2>
                        <ul className="mt-3">
                            <li className="mt-1 font-semibold"> • {specializationOne}</li>
                            <li className="mt-1 font-semibold"> • {specializationTwo}</li>
                            <li className="mt-1"> • Children Care</li>
                            <li className="mt-1"> • Orthodontist</li>
                            <li className="mt-1"> • Periodontist</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DoctorOverview