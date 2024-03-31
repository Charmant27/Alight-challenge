import Image from "next/image"
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import { data, recentEvents, nextEvents, pastWeekEvents } from "@/constants"
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {

    return (
        <section className="h-screen">
            <div className="flex md:flex-col lg:flex-row">
                {/* sidebar */}
                <Sidebar />
                {/* second part */}
                <div className="md:w-full md:pl-36">
                    <Nav />
                    <div className="flex flex-col gap-3 md:flex-row px-2 py-5 md:px-10">
                        <div className="w-full md:w-[75%] flex flex-col gap-12">
                            <div className="flex gap-3 flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h2>Overview</h2>
                                </div>
                                <div className="flex flex-col gap-3 md:flex-row">
                                    <button
                                        className="bg-primary-500 py-2 px-4 rounded-lg text-white text-sm"
                                    >
                                        <span className="pr-2">+</span>
                                        Add Candidate
                                    </button>
                                    <button
                                        className="bg-primary-500 py-2 px-4 rounded-lg text-white text-sm"
                                    >
                                        <span className="pr-2">+</span>
                                        Add Job
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                                    <div className="bg-primary-300 h-44 flex flex-col gap-3 rounded-lg py-2 px-4">
                                        <div className="relative flex gap-12">
                                            <div
                                                className="absolute bg-primary-300 border top-[-30px] left-[-20px] md:left-[-40px] border-slate-400 rounded-2xl py-6 px-6"
                                            >
                                                <p className="font-bold">33</p>
                                            </div>
                                            <div className="absolute right-2">
                                                <Image src='/assets/ill1.svg' width={95} height={73} alt="" />
                                            </div>
                                        </div>
                                        <div className="pt-20 w-[50%] text-slate-400">
                                            <p>Interview Scheduled</p>
                                        </div>
                                    </div>
                                    <div className="bg-primary-300 h-44 flex flex-col gap-3 rounded-lg py-2 px-4">
                                        <div className="relative flex gap-12">
                                            <div
                                                className="absolute bg-primary-300 border top-[-30px] left-[-20px] md:left-[-40px] border-slate-400 rounded-2xl py-6 px-6"
                                            >
                                                <p className="font-bold">2</p>
                                            </div>
                                            <div className="absolute right-2">
                                                <Image src='/assets/ill2.svg' width={95} height={73} alt="" />
                                            </div>
                                        </div>
                                        <div className="pt-20 w-full text-slate-400">
                                            <p>Interview Feedback Pending</p>
                                        </div>
                                    </div>
                                    <div className="bg-primary-300 h-44 flex flex-col gap-3 rounded-lg py-2 px-4">
                                        <div className="relative flex gap-12">
                                            <div
                                                className="absolute bg-primary-300 border top-[-30px] left-[-20px] md:left-[-40px] border-slate-400 rounded-2xl py-6 px-6"
                                            >
                                                <p className="font-bold">44</p>
                                            </div>
                                            <div className="absolute right-2">
                                                <Image src='/assets/ill3.svg' width={95} height={73} alt="" />
                                            </div>
                                        </div>
                                        <div className="pt-20 w-[50%] text-slate-400">
                                            <p>Approval pending</p>
                                        </div>
                                    </div>
                                    <div className="bg-primary-300 h-44 flex flex-col gap-3 rounded-lg py-2 px-4">
                                        <div className="relative flex gap-12">
                                            <div
                                                className="absolute bg-primary-300 border top-[-30px] left-[-20px] md:left-[-40px] border-slate-400 rounded-2xl py-6 px-6"
                                            >
                                                <p className="font-bold">13</p>
                                            </div>
                                            <div className="absolute right-2">
                                                <Image src='/assets/ill4.svg' width={95} height={73} alt="" />
                                            </div>
                                        </div>
                                        <div className="pt-20 w-full text-slate-400">
                                            <p>Offer Acceptance pending</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                                    <div className="bg-primary-300 h-44 flex flex-col gap-3 rounded-lg py-2 px-4">
                                        <div className="relative flex gap-12">
                                            <div
                                                className="absolute bg-primary-300 border top-[-30px] left-[-20px] md:left-[-40px] border-slate-400 rounded-2xl py-6 px-6"
                                            >
                                                <p className="font-bold">17</p>
                                            </div>
                                            <div className="absolute right-2">
                                                <Image src='/assets/ill5.svg' width={95} height={73} alt="" />
                                            </div>
                                        </div>
                                        <div className="pt-20 w-[50%] text-slate-400">
                                            <p>Documentations Pending</p>
                                        </div>
                                    </div>
                                    <div className="bg-primary-300 h-44 flex flex-col gap-3 rounded-lg py-2 px-4">
                                        <div className="relative flex gap-12">
                                            <div
                                                className="absolute bg-primary-300 border top-[-30px] left-[-20px] md:left-[-40px] border-slate-400 rounded-2xl py-6 px-6"
                                            >
                                                <p className="font-bold">3</p>
                                            </div>
                                            <div className="absolute right-2">
                                                <Image src='/assets/ill6.svg' width={95} height={73} alt="" />
                                            </div>
                                        </div>
                                        <div className="pt-20 w-full text-slate-400">
                                            <p>Training Pending</p>
                                        </div>
                                    </div>
                                    <div className="bg-primary-300 h-44 flex flex-col gap-3 rounded-lg py-2 px-4">
                                        <div className="relative flex gap-12">
                                            <div
                                                className="absolute bg-primary-300 border top-[-30px] left-[-20px] md:left-[-40px] border-slate-400 rounded-2xl py-6 px-6"
                                            >
                                                <p className="font-bold">5</p>
                                            </div>
                                            <div className="absolute right-2">
                                                <Image src='/assets/ill7.svg' width={95} height={73} alt="" />
                                            </div>
                                        </div>
                                        <div className="pt-20 w-[50%] text-slate-400">
                                            <p>Supervisor Allocation Pending</p>
                                        </div>
                                    </div>
                                    <div className="bg-primary-300 h-44 flex flex-col gap-3 rounded-lg py-2 px-4">
                                        <div className="relative flex gap-12">
                                            <div
                                                className="absolute bg-primary-300 border top-[-30px] left-[-20px] md:left-[-40px] border-slate-400 rounded-2xl py-6 px-6"
                                            >
                                                <p className="font-bold">56</p>
                                            </div>
                                            <div className="absolute right-2">
                                                <Image src='/assets/ill8.svg' width={95} height={73} alt="" />
                                            </div>
                                        </div>
                                        <div className="pt-20 w-full text-slate-400">
                                            <p>Project Allocation pending</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="font-bold">Require Attention</h2>
                                <div className="flex items-center gap-12 md:gap-24">
                                    <button>
                                        Jobs
                                        <div className="bg-orange-500 w-7 h-[2px] rounded-md"></div>
                                    </button>
                                    <button className="text-slate-400">Candidates</button>
                                    <button className="text-slate-400">Onboardings</button>
                                </div>
                                <table className="bg-primary-300 rounded-lg">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th>Positions left</th>
                                            <th>Applications</th>
                                            <th className="hidden-col">Interviewed</th>
                                            <th className="hidden-col">Rejected</th>
                                            <th className="hidden-col">Feedback pending</th>
                                            <th className="hidden-col">Offered</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <Image
                                                        src='/assets/table-icon.svg'
                                                        width={40}
                                                        height={40}
                                                        alt="icon"
                                                    />
                                                </td>
                                                <td className="font-semibold text-secondary-200">{item.position}</td>
                                                <td className="font-semibold text-secondary-200">{item.positions_left}</td>
                                                <td>{item.applications}</td>
                                                <td className="hidden-col">{item.interviewed}</td>
                                                <td className="hidden-col">{item.rejected}</td>
                                                <td className="hidden-col">{item.feedback_pending}</td>
                                                <td className="hidden-col">{item.offered}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-[25%] h-screen flex flex-col gap-3 overflow-y-auto bg-primary-300 rounded-lg px-3 py-6"
                        >
                            <div className="flex gap-3 items-center font-semibold">
                                <div className="text-secondary-200">
                                    <h2>Upcoming Meetings</h2>
                                </div>
                                <div
                                    className="text-primary-500 border border-primary-500 rounded-full py-1 px-1"
                                >
                                    <FaPlus />
                                </div>
                            </div>
                            {/* first */}
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold text-slate-400 text-xs">Today</h4>
                                {recentEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className={`${event.completed ? 'bg-green-100 border-r-8 border-r-green-200' : 'bg-blue-100 border-r-8 border-r-blue-300'} flex gap-2 items-center text-xs px-2 py-3 rounded-lg`}
                                    >
                                        <div className={`${event.completed ? 'text-green-300' : 'text-blue-200'} font-semibold`}>
                                            <p>{event.time}</p>
                                        </div>
                                        <div className={`${event.completed ? 'text-green-300' : 'text-blue-200'}`}>
                                            <p>
                                                <span className="font-semibold">{event.candidate_name} </span>
                                                {event.position} |
                                                <span className="font-semibold"> {event.start_time} - {event.end_time}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* second */}
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold text-slate-400 text-xs">Tomorrow</h4>
                                {nextEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className={`${event.completed ? 'bg-green-100 border-r-8 border-r-green-200' : 'bg-blue-100 border-r-8 border-r-blue-300'} flex gap-2 items-center text-xs px-2 py-3 rounded-lg`}
                                    >
                                        <div className={`${event.completed ? 'text-green-300' : 'text-blue-200'} font-semibold`}>
                                            <p>{event.time}</p>
                                        </div>
                                        <div className={`${event.completed ? 'text-green-300' : 'text-blue-200'}`}>
                                            <p>
                                                <span className="font-semibold">{event.candidate_name} </span>
                                                {event.position} |
                                                <span className="font-semibold"> {event.start_time} - {event.end_time}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* third */}
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold text-slate-400 text-xs">This week</h4>
                                {pastWeekEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className={`${event.completed ? 'bg-green-100 border-r-8 border-r-green-200' : 'bg-blue-100 border-r-8 border-r-blue-300'} flex gap-2 items-center text-xs px-2 py-3 rounded-lg`}
                                    >
                                        <div className={`${event.completed ? 'text-green-300' : 'text-blue-200'} font-semibold`}>
                                            <p>{event.time}</p>
                                        </div>
                                        <div className={`${event.completed ? 'text-green-300' : 'text-blue-200'}`}>
                                            <p>
                                                <span className="font-semibold">{event.candidate_name} </span>
                                                {event.position} |
                                                <span className="font-semibold"> {event.start_time} - {event.end_time}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard