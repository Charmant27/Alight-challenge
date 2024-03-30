import Link from "next/link"
import Image from "next/image"
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { FaLinkedin, FaTwitter, FaCheck } from "react-icons/fa";
import { IoIosArrowForward, IoMdArrowBack } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { SiWebauthn } from "react-icons/si";

const CandidateProfile = () => {
    return (
        <section className="h-screen">
            <div className="flex md:flex-col lg:flex-row">
                {/* sidebar part */}
                <Sidebar />
                {/* second part */}
                <div className="md:w-full md:pl-36">
                    {/* nav */}
                    <Nav />

                    <div
                        className="px-2 w-full md:px-10 py-5 flex flex-col gap-3 justify-between md:flex-row"
                    >
                        <div className="flex items-center gap-1">
                            <p className="text-slate-400">Candidates</p>
                            <IoIosArrowForward />
                            <p>John Doe</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="text-slate-400">
                                <IoMdArrowBack />
                            </div>
                            <div>
                                <Link href='/'>Go back</Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F3F8FF] mx-2 md:mx-10 px-10 py-12 rounded-lg flex flex-col gap-3 md:flex-row justify-between items-center">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col md:flex-row items-center gap-2">
                                <div className="bg-gray-400 h-12 w-12 px-3 py-3 text-center rounded-[50%]">
                                    <p className="text-secondary-200">JD</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <p className="font-bold text-xl">John Doe</p>
                                        <p className="bg-[#DDEAFB] px-3 py-1 text-xs text-center rounded-xl">Interview</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-3">
                                        <p className="text-base text-slate-500 font-light">John.Doe@gmail.com</p>
                                        <p className="hidden md:block">|</p>
                                        <p className="text-base text-slate-500 font-light">+250 788 492 456</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="text-primary-500 flex gap-6 items-center"
                            >
                                <button className="text-[#7D9BE7] underline">Edit</button>
                                <Link href='/linkedin.com'>
                                    <FaLinkedin />
                                </Link>
                                <Link href='/twitter.com'>
                                    <FaTwitter />
                                </Link>
                                <Link href='/https://wearealight.org/our-work/rwanda/'>
                                    <SiWebauthn />
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 relative">
                            <div className="absolute hidden md:block h-full w-[0.9px] top-0 bottom-0 left-0 bg-primary-100"></div>
                            <div className="flex flex-col gap-3 md:pl-6">
                                <h2 className="font-semibold">Current status</h2>
                                <div className="flex gap-6 items-center">
                                    <p className="text-slate-400 font-light">Round</p>
                                    <p className="bg-[#DDEAFB] px-3 rounded-xl text-xs font-semibold">Technical</p>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <p className="text-slate-400 font-light">Assigned to</p>
                                    <div className="bg-[#DDEAFB] pr-3 rounded-xl flex items-center">
                                        <div className="rounded-full">
                                            <Image
                                                src='/assets/man2.avif'
                                                width={30}
                                                height={30}
                                                alt="profile"
                                                className="rounded-full border-4 border-gray-200"
                                            />
                                        </div>
                                        <p className="text-xs font-semibold">John Doe</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <p className="text-slate-400 font-light">Interview Date</p>
                                    <p className="text-slate-400 font-bold">Jul 30, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F3F8FF] mx-2 md:mx-10 my-5 py-12 rounded-lg">
                        <div className="text-slate-400 text-base flex flex-col px-10 md:flex-row gap-12">
                            <Link href='/general' className="text-secondary-200">
                                <p>General</p>
                                <div className="bg-orange-200 rounded w-12 h-1"></div>
                            </Link>
                            <Link href='/general'>Evaluations</Link>
                            <Link href='/general'>Education</Link>
                            <Link href='/general'>Events</Link>
                            <Link href='/general'>Documents</Link>
                            <Link href='/general'>Messages</Link>
                        </div>
                        <div className="bg-slate-200 h-[0.9px] my-3"></div>
                        <div className="flex flex-col md:flex-row gap-3 px-10">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <h3 className="text-base font-semibold">Candidates files</h3>
                                    <button className="text-xs text-[#7D9BE7] underline">Edit</button>
                                </div>
                                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                                    <button className="flex items-center gap-2 border bg-[#E7F1FF] border-slate-400 px-2 py-2 rounded-lg text-base">
                                        <Image src='/assets/pdf.svg' width={15.7} height={16} alt="pdf" />
                                        <span>Cover_letter.pdf</span>
                                        <span className="text-xs text-slate-400">2d ago</span>
                                    </button>
                                    <button className="flex items-center gap-2 border bg-[#E7F1FF] border-slate-400 px-2 py-2 rounded-lg text-base">
                                        <Image src='/assets/word.svg' width={15.7} height={16} alt="pdf" />
                                        <span>My_resume.pdf</span>
                                        <span className="text-xs text-slate-400">2d ago</span>
                                    </button>
                                    <button className="flex items-center gap-2 border bg-[#E7F1FF] border-slate-400 px-2 py-2 rounded-lg text-base">
                                        <Image src='/assets/pdf.svg' width={15.7} height={16} alt="pdf" />
                                        <span>Oct_payslip.pdf</span>
                                        <span className="text-xs text-slate-400">2d ago</span>
                                    </button>
                                    <button className="flex items-center gap-2 border bg-[#E7F1FF] border-slate-400 px-2 py-2 rounded-lg text-base">
                                        <Image src='/assets/pdf.svg' width={15.7} height={16} alt="pdf" />
                                        <span>Oct_payslip.pdf</span>
                                        <span className="text-xs text-slate-400">2d ago</span>
                                    </button>
                                </div>
                                <div className="text-right">
                                    <Link href='/items' className="text-[#7D9BE7] underline text-xs">View All</Link>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2">
                                        <h3 className="font-semibold">Last Experience</h3>
                                        <button className="text-[#7D9BE7] underline text-xs">Edit</button>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex relative gap-1">
                                                <div className="w-2 absolute h-full bg-primary-100 rounded-xl"></div>
                                                <div className="pl-4 text-base font-light">
                                                    <p>Senior Data Analyst</p>
                                                    <p>Alight <span className="pl-6 text-slate-400">(May 2021 - Present)</span></p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="pl-4">Responsible for;</p>
                                                <ul className="text-slate-400 font-light ml-10 text-sm">
                                                    <li className="list-decimal">Data Exploration and Analysis: They perform exploratory data analysis to uncover insights, trends, and patterns in the data, often using statistical and visualisation techniques.</li>
                                                    <li className="list-decimal">Data Cleaning and Preprocessing: Data analysts are responsible for cleaning and preparing raw renewable data to ensure its accuracy and reliability for analysis.</li>
                                                    <li className="list-decimal">Reporting and Communication: Data analysts communicate their findings through reports, dashboards, and presentations to help stakeholders make informed decisions based on the data-driven insights.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex relative gap-1">
                                                <div className="w-2 absolute h-full bg-primary-100 rounded-xl"></div>
                                                <div className="pl-4 text-base font-light">
                                                    <p>Junior Data Analyst</p>
                                                    <p>Alight <span className="pl-6 text-slate-400">(May 2021 - Present)</span></p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="pl-4">Responsible for;</p>
                                                <ul className="text-slate-400 font-light ml-10 text-sm">
                                                    <li className="list-decimal">Data Exploration and Analysis: They perform exploratory data analysis to uncover insights, trends, and patterns in the data, often using statistical and visualisation techniques.</li>
                                                    <li className="list-decimal">Data Cleaning and Preprocessing: Data analysts are responsible for cleaning and preparing raw renewable data to ensure its accuracy and reliability for analysis.</li>
                                                    <li className="list-decimal">Reporting and Communication: Data analysts communicate their findings through reports, dashboards, and presentations to help stakeholders make informed decisions based on the data-driven insights.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-primary-100 flex flex-col gap-6 rounded-lg px-10 py-20">
                                <div className="bg-white flex flex-col gap-3 drop-shadow-md px-3 py-12">
                                    <div></div>
                                    <div>
                                        <p>Score: <span className="text-green-500 text-sm">Potential fit</span></p>
                                    </div>
                                    <div className="text-center font-light">
                                        <button className="text-[#7D9BE7] underline">Edit</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 text-slate-400">
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">Qualifications</p>
                                        <div className="text-green-500">
                                            <FaCheck />
                                        </div>
                                    </div>
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">Experience and Relevance</p>
                                        <div className="text-green-500">
                                            <FaCheck />
                                        </div>
                                    </div>
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">Education</p>
                                        <div className="text-green-500">
                                            <FaCheck />
                                        </div>
                                    </div>
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">Keywords match</p>
                                        <div className="text-red-500">
                                            <ImCross />
                                        </div>
                                    </div>
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">Years of Experience</p>
                                        <div className="text-green-500">
                                            <FaCheck />
                                        </div>
                                    </div>
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">Job hopping</p>
                                        <div className="text-red-500">
                                            <ImCross />
                                        </div>
                                    </div>
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">Cultural fit</p>
                                        <div className="text-green-500">
                                            <FaCheck />
                                        </div>
                                    </div>
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">Interview performance</p>
                                        <div className="text-green-500">
                                            <FaCheck />
                                        </div>
                                    </div>
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">References</p>
                                        <div className="text-red-500">
                                            <ImCross />
                                        </div>
                                    </div>
                                    <div className="flex text-sm items-center gap-1 justify-between md:gap-12">
                                        <p className="font-light">Additional factors</p>
                                        <div className="text-green-500">
                                            <FaCheck />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CandidateProfile