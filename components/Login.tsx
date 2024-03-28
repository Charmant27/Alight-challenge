import Image from "next/image"
import Link from "next/link"
import { FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <section className="login-section grid place-content-center h-screen">
            <div
                className="bg-secondary-300 my-10 drop-shadow-2xl px-12 py-24 rounded-[8px] flex flex-col gap-14"
            >
                <div className="flex gap-3 justify-center">
                    <div>
                        <Image
                            src='/assets/logo.svg'
                            width={16}
                            height={28}
                            alt="logo"
                        />
                    </div>
                    <h1 className="text-secondary-500 font-semibold">HR Management</h1>
                </div>
                <div className="flex gap-10">
                    <div className="col">
                        <Image
                            src='/assets/login-illustrator.svg'
                            width={250}
                            height={220}
                            alt="login"
                        />
                    </div>
                    <div className="w-1 h-[300px] bg-secondary-100"></div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <div>
                                <Link href='/'
                                    className="font-bold text-primary-500 text-4xl"
                                >
                                    Login
                                </Link>

                                {/* underline */}
                                <div className="w-[40px] h-[4px] rounded-[5px] bg-orange-200"></div>
                            </div>
                            <div className="w-1 h-[40px] bg-secondary-100"></div>
                            <div>
                                <Link href='/signup'
                                    className="font-light text-primary-500 text-xl"
                                >
                                    Signup
                                </Link>
                            </div>
                        </div>
                        {/* forms */}
                        <div>
                            <form className="flex flex-col gap-6">
                                <div className="username">
                                    <input
                                        type="text"
                                        placeholder="username"
                                        className="w-full border border-primary-500 bg-transparent text-secondary-500 px-1 py-2 rounded-[8px] placeholder:text-secondary-200 placeholder:font-light"
                                    />
                                </div>
                                <div className="relative">
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="password"
                                            className="w-full border border-primary-500 bg-transparent text-secondary-500 px-1 py-2 rounded-[8px] placeholder:text-secondary-200 placeholder:font-light"
                                        />
                                    </div>
                                    <div className="absolute top-3 right-2">
                                        <button className="text-primary-200">
                                            <FaEyeSlash />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-1">
                                        <input
                                            type="radio"
                                            name="remember"
                                            id="remember"
                                        />
                                        <p className="text-secondary-500">Remember me</p>
                                    </div>
                                    <div>
                                        <Link href='/' className="text-secondary-500">Forgot Password?</Link>
                                    </div>
                                </div>
                                {/* login links */}
                                <div>
                                    <input
                                        type="submit"
                                        value="Login"
                                        className="bg-orange-200 w-full px-1 py-2 rounded-[8px] text-white"
                                    />
                                </div>
                                <div className="w-full bg-primary-500 px-1 py-2 rounded-[8px] text-white">
                                    <Link href='/' className="flex justify-center gap-2 items-center">
                                        Login with <span><FaGoogle /></span>
                                    </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-primary-500 flex flex-col gap-2">
                <Link href='/'
                className="font-semibold underline"
                >
                    Release notes
                </Link>
                <p className="font-light">version 20.22.11</p>
                <p className="font-light">Copyright &copy; 2023-24 HRM and services</p>
            </div>
        </section>
    )
}

export default Login