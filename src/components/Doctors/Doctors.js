import Doctorcard from "./Doctorcard/Doctorcard"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react"

const Doctors = () => {

    const [doctor, setdoctor] = useState({
        data: [
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-8.jpg", "مریم رضوی", "دندان پزشک",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-1.jpg", "علی رضایی", "روان پزشک",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-6.jpg", "زهرا موسوی", "روانشناس",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-7.jpg", "الهام اکرمی", "متخصص قلب",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-4.jpg", "حمید احمدی", "متخصص مغز",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-5.jpg", " رضا بهرامی", "متخصص مغز",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-3.jpg", "امیرحسین خواجویی", "متخصص داخلی",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-2.jpg", " پوریا مولوی", " متخصص اطفال",],

        ]
    })


    return (
        <div>
            <div className="mx-16 mt-24 mb-28">
                <div className="grid lg:grid-cols-3 xl:mx-16 gap-8">
                    <div className="my-auto">
                        <h2 className="text-[28px] text-[#203253] sm:text-[34px]  font-bold">
                            کادر درمانی مجرب ما
                        </h2>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-[15px] text-[#335d83]">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {doctor.data.map((item) => (
                        <Doctorcard img={item[0]} name={item[1]} job={item[2]} />
                    ))}
                </div>

            </div>
            {/*footer */}
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
                    <p className="text-[#ffffff]">Copyright © 2024 impreza clinic</p>
                </div>
            </div>
        </div>
    )
}

export default Doctors