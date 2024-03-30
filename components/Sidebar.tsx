import Image from "next/image"
import Link from "next/link"
import { FaHome, FaSuitcase, FaFolder, FaCalendarAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div
                    className='bg-secondary-500 fixed left-0 flex-col gap-10 hidden md:flex w-[10%] h-screen rounded-r-lg px-5 py-10'
                >
                    <div>
                        <Image
                            src='/assets/logo.svg'
                            width={16}
                            height={28}
                            alt="logo"
                        />
                    </div>
                    {/* links */}
                    <div className="flex flex-col gap-6">
                        <Link href='/dashboard' className="flex flex-col justify-center gap-1 text-secondary-300">
                            <span className="text-xl">
                                <FaHome />
                            </span>
                            <p className="text-sm">Home</p>
                        </Link>
                        <Link href='/' className="flex flex-col gap-1 text-secondary-300">
                            <span className="text-xl">
                                <FaSuitcase />
                            </span>
                            <p className="text-sm">Jobs</p>
                        </Link>
                        {/* active link */}
                        <div className="flex items-center gap-5">
                            <div className="bg-orange-200 w-1 h-12 fixed left-0 rounded-r-lg"></div>
                            <Link href='/' className="flex flex-col gap-1 text-secondary-300">
                                <span className="text-xl">
                                    <HiUsers />
                                </span>
                                <p className="text-sm">Candidates</p>
                            </Link>
                        </div>
                        <Link href='/' className="flex flex-col gap-1 text-secondary-300">
                            <span className="text-xl">
                                <FaFolder />
                            </span>
                            <p className="text-sm">Reports</p>
                        </Link>
                        <Link href='/' className="flex flex-col gap-1 text-secondary-300">
                            <span className="text-xl">
                                <FaCalendarAlt />
                            </span>
                            <p className="text-sm">Calendar</p>
                        </Link>
                    </div>
                </div>
  )
}

export default Sidebar