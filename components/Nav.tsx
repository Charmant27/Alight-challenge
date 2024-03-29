import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"

const Nav = () => {
    return (
        <>
            <nav
                className="bg-white w-screen md:w-full px-2 md:px-10 py-5 flex flex-col-reverse gap-8 md:flex-row justify-between drop-shadow"
            >
                <div>
                    <form>
                        <div className="md:relative flex items-center gap-3">
                            <div className="absolute md:block hidden left-3">
                                <FaSearch />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border border-primary-100 rounded-lg md:px-10 md:py-2"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex gap-2 items-center">
                    <Link href='' className="flex gap-2 items-center">
                        <Image
                            src='/assets/man2.avif'
                            width={40}
                            height={40}
                            alt="logo"
                            className="object-cover rounded-[50%]"
                        />
                        <p className="text-secondary-200 text-base">Jane Doe</p>
                        <button>
                            <IoIosArrowDown />
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav