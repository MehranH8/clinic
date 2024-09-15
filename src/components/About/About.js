import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube, FaFacebook, FaCommentMedical, FaStethoscope, FaSmile, FaPercentage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react"
import Doctorcard from "../Doctors/Doctorcard/Doctorcard";



const About = () => {

    const [doctor, setdoctor] = useState({
        data: [
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-8.jpg", "مریم رضوی", "دندان پزشک",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-1.jpg", "علی رضایی", "روان پزشک",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-6.jpg", "زهرا موسوی", "روانشناس",],
            ["https://impreza22.us-themes.com/wp-content/uploads/2021/12/doctor-7.jpg", "الهام اکرمی", "متخصص قلب",],
        ]
    })


    return (
        <div>
            <div className="mx-10 lg:mx-16">
                <div className="relative mt-8 mb-24">
                    <img className="rounded-3xl mx-auto" src="https://impreza22.us-themes.com/wp-content/uploads/2021/12/1st-pic.jpg" alt="" />
                    <div className="absolute top-[10%] sm:top-[16%] left-[12%] md:left-0 right-[12%] ">
                        <div className="bg-white w-[100%] md:max-w-[370px] lg:max-w-[400px] xl:max-w-[470px] rounded-3xl p-4 sm:p-12">
                            <h3 className="text-[18px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[36px] font-bold text-[#203253]">
                                 کلینیکی مدرن با  تکنولوژی روز و خدمات عالی و حرفه ای و پزشکان متخصص
                            </h3>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col-reverse lg:grid grid-cols-1  lg:grid-cols-2 mb-10 md:mb-24 lg:mb-36">
                    <div className=" flex justify-center lg:justify-start">
                        <img style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }} className="rounded-2xl xl:h-[460px] w-full sm:w-[80%]" src="https://impreza22.us-themes.com/wp-content/uploads/2021/12/pic2-1024x852.jpg" alt="home-img" />
                    </div>
                    <div className="lg:my-auto my-8 mx-8 sm:mx-10 lg:mx-0 lg:ml-20">
                        <h3 className="text-[26px] font-bold mb-4">
                            تاریخچه ی ما
                        </h3>
                        <p className="text-justify text-[16px] mb-3 xl:mb-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 mb-10 md:mb-24 lg:mb-36">
                    <div className="lg:my-auto my-8 mx-8 sm:mx-10 lg:mx-0 lg:mr-20">
                        <h3 className="text-[26px] font-bold mb-4">
                            هدف های ما
                        </h3>
                        <p className="text-justify text-[16px] mb-3 xl:mb-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                        </p>
                    </div>
                    <div className=" flex justify-center lg:justify-end">
                        <img style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }} className="rounded-2xl xl:h-[460px] w-full sm:w-[85%]" src="https://impreza22.us-themes.com/wp-content/uploads/2021/12/pic1-1024x696.jpg" alt="home-img" />
                    </div>
                </div>

                <div className="lg:flex mb-24 mx-2">
                    <div className="ml-12 my-auto">
                        <h3 className="text-[24px] md:text-[28px] lg:mb-0 mb-6 font-bold min-w-[280px] md:min-w-[400px]">
                            بهترین پزشکان، فن آوری های نوآورانه و تجهیزات مدرن
                        </h3>
                    </div>
                    <div>
                        <p className="text-[15px] text-justify md:text-right">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد

                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <div className="bg-[#f4faff] rounded-2xl pt-8 pb-12 ">
                        <div className="bg-[#72b3ea] p-5 rounded-full mx-12 w-min mb-4">
                            <span className="text-white text-[30px] my-auto">
                                <FaCommentMedical />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-[#203252] text-[20px] mx-12 font-bold">
                                مشاوره رایگان
                            </h3>
                        </div>
                    </div>
                    <div className="bg-[#f4faff] rounded-2xl pt-8 pb-12 ">
                        <div className="bg-[#72b3ea] p-5 rounded-full mx-12 w-min mb-4">
                            <span className="text-white text-[30px] my-auto">
                                <FaPercentage />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-[#203252] text-[20px] mx-12 font-bold">
                                تخفیف های ویژه
                            </h3>
                        </div>
                    </div>
                    <div className="bg-[#f4faff] rounded-2xl pt-8 pb-12 ">
                        <div className="bg-[#72b3ea] p-5 rounded-full mx-12 w-min mb-4">
                            <span className="text-white text-[30px] my-auto">
                                <FaStethoscope />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-[#203252] text-[20px] mx-12 font-bold">
                                تجهیزات مدرن
                            </h3>
                        </div>
                    </div>
                    <div className="bg-[#f4faff] rounded-2xl pt-8 pb-12 ">
                        <div className="bg-[#72b3ea] p-5 rounded-full mx-12 w-min mb-4">
                            <span className="text-white text-[30px] my-auto">
                                <FaSmile />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-[#203252] text-[20px] mx-12 font-bold">
                                درمان بدون عوارض
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="mb-14">
                    <div>
                        <h3 className="text-[22px] sm:text-[28px] font-bold mb-6">
                            مراقبت اختصاصی توسط پزشکان متخصص
                        </h3>
                    </div>
                    <div>
                        <p className="">
                            پیشنهاد های فردی یا خانوادگی ما را انتخاب کنید
                        </p>
                    </div>
                </div>
                <div className="xl:mx-16 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-12">
                        <div className="mb-2">
                            <h3 className="text-[#203253] text-[22px] font-bold">فردی</h3>
                        </div>
                        <div className="mb-3">
                            <span className="text-[#72b3ea] text-[35px] font-bold">
                                350$
                            </span>
                        </div>
                        <div>
                            <p className="text-[#335d83] text-[14px] mb-6">
                                برای یک بزرگسال و یک کودک
                            </p>
                        </div>
                        <div>
                            <div className="flex gap-2 my-4 text-[14px]">
                                <span className=" my-auto">
                                    <FaCircleCheck />
                                </span>
                                <p className="text-[#203253]">
                                    نرخ های اعضا در مورد خدمات داخل کلینیک ما
                                </p>
                            </div>
                            <div className="flex gap-2 my-4 text-[14px]">
                                <span className=" my-auto">
                                    <FaCircleCheck />
                                </span>
                                <p className="text-[#203253]">
                                    ثبت نام دائم در کلینیک ایمپرزا
                                </p>
                            </div>
                            <div className="flex gap-2 my-4 text-[14px]">
                                <span className=" my-auto">
                                    <FaCircleCheck />
                                </span>
                                <p className="text-[#203253]">
                                    اولویت دسترسی به خدمات
                                </p>
                            </div>
                            <div className="flex gap-2 my-4 text-[14px]">
                                <span className=" my-auto">
                                    <FaCircleCheck />
                                </span>
                                <p className="text-[#203253]">
                                    ثبت نام دائم در کلینیک ایمپرزا
                                </p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#203253] text-white px-10 py-3 rounded-lg hover:bg-[#539DDB] transition-colors duration-300" type="button">عضویت</button>
                        </div>
                    </div>
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-12">
                        <div className="mb-2">
                            <h3 className="text-[#203253] text-[22px] font-bold">خانوادگی</h3>
                        </div>
                        <div className="mb-3">
                            <span className="text-[#72b3ea] text-[35px] font-bold">
                                350$
                            </span>
                        </div>
                        <div>
                            <p className="text-[#335d83] text-[14px] mb-6">
                                برای یک بزرگسال و یک کودک
                            </p>
                        </div>
                        <div>
                            <div className="flex gap-2 my-4 text-[14px]">
                                <span className=" my-auto">
                                    <FaCircleCheck />
                                </span>
                                <p className="text-[#203253]">
                                    نرخ های اعضا در مورد خدمات داخل کلینیک ما
                                </p>
                            </div>
                            <div className="flex gap-2 my-4 text-[14px]">
                                <span className=" my-auto">
                                    <FaCircleCheck />
                                </span>
                                <p className="text-[#203253]">
                                    ثبت نام دائم در کلینیک ایمپرزا
                                </p>
                            </div>
                            <div className="flex gap-2 my-4 text-[14px]">
                                <span className=" my-auto">
                                    <FaCircleCheck />
                                </span>
                                <p className="text-[#203253]">
                                    اولویت دسترسی به خدمات
                                </p>
                            </div>
                            <div className="flex gap-2 my-4 text-[14px]">
                                <span className=" my-auto">
                                    <FaCircleCheck />
                                </span>
                                <p className="text-[#203253]">
                                    ثبت نام دائم در کلینیک ایمپرزا
                                </p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#203253] text-white px-10 py-3 rounded-lg hover:bg-[#539DDB] transition-colors duration-300" type="button">عضویت</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mx-6 xl:mx-16 lg:gap-28  xl:gap-44">
                    <div>
                        <div className="my-auto">
                            <h2 className="text-[28px] mb-4 text-[#203253] sm:text-[34px]  font-bold">
                                کادر درمانی مجرب ما
                            </h2>
                        </div>
                        <div className="">
                            <p className="text-[15px] text-[#335d83]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                    </div>
                    <div className="min-w-max my-auto hidden lg:block">
                        <Link to="/doctors">
                            <button className="bg-[#203253]  text-white px-10 py-3 rounded-lg hover:bg-[#539DDB] transition-colors duration-300" type="button">دیدن دکتر ها</button>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-32">
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

export default About