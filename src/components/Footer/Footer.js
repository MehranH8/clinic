import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaStarOfLife, } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#203253] py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center mb-8">
                <div className="mb-6 lg:mb-0">
                    <Link
                        to="/"
                        className="mr-4 flex text-white hover:text-mainblue transition-colors font-bold duration-300 cursor-pointer py-1.5 text-[20px] my-auto"
                    >

                        Impreza Clinic
                        <span className="my-auto mr-2">
                            <FaStarOfLife />
                        </span>
                    </Link>
                </div>
                <div className="flex gap-8 mb-6 lg:mb-0">
                    <div

                        className="p-1 text-[15px]"
                    >
                        <Link to="/doctors" className="max-w-fit flex text-white items-center duration-300  hover:text-mainblue transition-colors">
                            دکتر ها
                        </Link>
                    </div>
                    <div
                        className="p-1 text-[15px]"
                    >
                        <Link to="/services" className="max-w-fit flex text-white items-center duration-300  hover:text-mainblue transition-colors">
                            خدمات
                        </Link>
                    </div>
                    <div
                        className="p-1 text-[15px]"
                    >
                        <Link to="/aboutus" className="max-w-fit flex text-white items-center duration-300  hover:text-mainblue transition-colors">
                            درباره ما
                        </Link>
                    </div>
                    <div
                        className="p-1 text-[15px]"
                    >
                        <Link to="/support" className="max-w-fit flex text-white items-center duration-300  hover:text-mainblue transition-colors">
                            پشتیبانی
                        </Link>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div>
                        <a href="#">
                            <span className="text-white text-[20px]">
                                <BiLogoInstagramAlt />
                            </span>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <span className="text-white text-[20px]">
                                <FaYoutube />
                            </span>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <span className="text-white text-[18px]">
                                <FaFacebook />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="text-[#ffffff]">Copyright © 2024 mehran</p>
            </div>
        </div>
    )
}

export default Footer