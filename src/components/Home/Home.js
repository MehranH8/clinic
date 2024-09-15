import { FaHeart, FaClinicMedical } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaStarOfLife, FaMapMarkerAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCommentMedical, FaStethoscope, FaSmile, FaPercentage } from "react-icons/fa";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Avatar, Rating
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};




function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}


const Home = () => {


    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);



    return (
        <div>
            <div className="mx-8 sm:mx-16 mt-8">
                <div className="flex gap-10 flex-col lg:flex-row justify-between mb-14 bg-[#B1DDFF] xl:mx-28 px-6 md:px-14 rounded-3xl ">
                    <div className="my-10 lg:my-auto">
                        <div className="mb-3">
                            <h2 className="text-[24px] mb-4  text-[#203253] md:text-[30px]  font-bold">
                                ما برای شما و سلامتیتان اهیمت  خاصی قائل هستیم
                            </h2>
                        </div>
                        <div className="mb-8">
                            <p className="text-[#203253] text-[14px]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                        <div>
                            <input className="rounded-2xl  px-4 py-4 w-full lg:max-w-[500px]" placeholder="خدمات مورد نظر خود را وارد کنید" type="text" />
                        </div>
                    </div>
                    <div className="mx-auto lg:mx-0">
                        <img className="w-full md:w-max max-w-[400px] lg:max-w-[300px] xl:max-w-[400px]" src="https://impreza22.us-themes.com/wp-content/uploads/2021/12/doc-3.png" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-10">
                        <div className="mb-4 flex gap-x-4">
                            <span className="my-auto bg-[#539DDB] text-[28px] p-4 rounded-full">
                                <FaClinicMedical className=" text-white " />
                            </span>
                            <h4 className="text-[#335d85] text-[26px] font-bold my-auto">درباه کلینیک</h4>
                        </div>
                        <div className="lg:flex gap-y-4  mb-14">
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">درباره ما</button>
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">عضویت</button>
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">تیم</button>
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">شغل</button>
                        </div>
                    </div>
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-10">
                        <div className="mb-4 flex gap-x-4">
                            <span className="my-auto bg-[#539DDB] text-[28px] p-4 rounded-full">
                                <FaHeart className=" text-white " />
                            </span>
                            <h4 className="text-[#335d85] text-[26px] font-bold my-auto">متخصص پوست</h4>
                        </div>
                        <div className="lg:flex gap-y-4  mb-14">
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">ایکس ری</button>
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">مراقبت مجازی</button>
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">درمان</button>
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">بیماری</button>
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">فیزیوتراپی</button>
                            <button className="text-[14px] bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white font-bold text-[#203253] px-4 py-2 rounded-xl" type="button">آسیب</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-28  mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
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
                    <div className="xl:mx-16 lg:gap-28 mt-20 md:my-auto xl:gap-44">
                        <div>
                            <div className="my-auto">
                                <h2 className="text-[28px] mb-4 text-[#203253] sm:text-[30px]  font-bold">
                                    مراقبت فوری با کیفیت در لحظه ای که به آن نیاز دارید
                                </h2>
                            </div>
                            <div className="mb-8">
                                <p className="text-[15px] text-[#335d83]">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                </p>
                            </div>
                        </div>
                        <div className="min-w-max my-auto ">
                            <Link to="/aboutus">
                                <button className="bg-[#203253]  text-white px-10 py-3 rounded-lg hover:bg-[#539DDB] transition-colors duration-300" type="button">بیشتر</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 mb-10 md:mb-24 lg:mb-36">
                    <div className="lg:my-auto my-8 sm:mx-10 lg:mx-0 lg:mr-20">
                        <h3 className="text-[26px] font-bold mb-6 lg:mb-4">
                            به خدمات پی سی آر آنتی ژن و آنتی بادی کووید ما دسترسی داشته باشید
                        </h3>
                        <p className="text-justify text-[16px] mb-6 lg:mb-3 xl:mb-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                        </p>
                        <div className="min-w-max my-auto">
                            <Link to="/services">
                                <button className="bg-[#203253]  text-white px-10 py-3 rounded-lg hover:bg-[#539DDB] transition-colors duration-300" type="button">خدمات کووید</button>
                            </Link>
                        </div>
                    </div>
                    <div className=" flex justify-center lg:justify-end">
                        <img style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }} className="rounded-2xl xl:h-[460px] w-full sm:w-[85%]" src="https://impreza22.us-themes.com/wp-content/uploads/2021/12/image.jpg" alt="home-img" />
                    </div>
                </div>


                <div className="lg:flex mb-24 mx-2">
                    <div className="ml-12 my-auto">
                        <h3 className="text-[24px] md:text-[28px] lg:mb-0 mb-6 font-bold min-w-[280px] md:min-w-[400px]">
                            پرسش های متداول
                        </h3>
                    </div>
                    <div>
                        <p className="text-[15px] text-justify md:text-right">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                    </div>
                </div>
                <div className="bg-[#f4faff] py-8 sm:px-4 md:px-10 rounded-3xl mb-36">
                    <Accordion className="mb-3" icon={<Icon id={1} open={open} />} open={open === 1} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className={`hover:bg-[#E6F1FA] transition-colors duration-300 px-4 rounded-2xl border-none text-[20px] font-bold text-[#203253] ${open === 1 ? "bg-[#E6F1FA]" : ""
                            }`} onClick={() => handleOpen(1)}>مزایای درمان آنلاین چیست؟</AccordionHeader>
                        <AccordionBody>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="mb-3" icon={<Icon id={2} open={open} />} open={open === 2} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className={`hover:bg-[#E6F1FA] transition-colors duration-300 px-4 rounded-2xl border-none text-[20px] font-bold text-[#203253] ${open === 2 ? "bg-[#E6F1FA]" : ""
                            }`} onClick={() => handleOpen(2)}>شرایط درمان آنلاین چیست؟</AccordionHeader>
                        <AccordionBody>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="mb-3" icon={<Icon id={3} open={open} />} open={open === 3} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className={`hover:bg-[#E6F1FA] transition-colors duration-300 px-4 rounded-2xl border-none text-[20px] font-bold text-[#203253] ${open === 3 ? "bg-[#E6F1FA]" : ""
                            }`} onClick={() => handleOpen(3)}> درمان آنلاین چیست؟</AccordionHeader>
                        <AccordionBody>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        </AccordionBody>
                    </Accordion>
                    <Accordion className="mb-3" icon={<Icon id={4} open={open} />} open={open === 4} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className={`hover:bg-[#E6F1FA] transition-colors duration-300 px-4 rounded-2xl border-none text-[20px] font-bold text-[#203253] ${open === 4 ? "bg-[#E6F1FA]" : ""
                            }`} onClick={() => handleOpen(4)}>درمان آنلاین یعنی چه؟</AccordionHeader>
                        <AccordionBody>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        </AccordionBody>
                    </Accordion>
                </div>
                <div className="lg:flex mb-24 mx-2">
                    <div className="ml-12 my-auto">
                        <h3 className="text-[24px] md:text-[28px] lg:mb-0 mb-6 font-bold min-w-[280px] md:min-w-[400px]">
                            نظرات مردم درباره ما
                        </h3>
                    </div>
                    <div>
                        <p className="text-[15px] text-justify md:text-right">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-10">
                        <div className="mb-4 flex flex-col sm:flex-row gap-x-4">

                            <h4 className="text-[#335d85] text-[26px] font-bold my-2 sm:my-auto">خدمات عالی</h4>
                            <span className="my-auto ">
                                <Rating className="mt-2" value={5} />
                            </span>
                        </div>
                        <div className="lg:flex gap-y-4  mb-10">
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                            </div>
                        </div>
                        <div>
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                            <span className="mr-4">
                                علی مرادی
                            </span>
                        </div>
                    </div>
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-10">
                        <div className="mb-4 flex flex-col sm:flex-row gap-x-4">

                            <h4 className="text-[#335d85] text-[26px] font-bold my-2 sm:my-auto">دکتر های مجرب</h4>
                            <span className="my-auto">
                                <Rating className="mt-2" value={4} />
                            </span>
                        </div>
                        <div className="lg:flex gap-y-4  mb-10">
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                            </div>
                        </div>
                        <div>
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                            <span className="mr-4">
                                رضا محمدی
                            </span>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-24">
                    <div className="bg-[#f4faff] rounded-2xl px-14 py-14 -mx-3">
                        <div>
                            <h2 className="text-[28px] font-bold mb-4">ارتباط با ما</h2>
                        </div>
                        <div className="mb-12">
                            <p className="text-justify text-[15px]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                        <div className="flex gap-x-6 my-8">
                            <div className="bg-[#72b3ea] p-6 rounded-full ">
                                <span className="text-white text-[25px] my-auto">
                                    <FaPhoneFlip />
                                </span>
                            </div>
                            <div className="my-auto">
                                <div className="mb-3">
                                    <h3 className="text-[20px] font-bold">
                                        شماره تلفن
                                    </h3>
                                </div>
                                <div className="text-[15px]">
                                    <p>321 123 4567+</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-6 my-8">
                            <div className="bg-[#72b3ea] p-[1.35rem] rounded-full ">
                                <span className="text-white text-[30px] my-auto">
                                    <MdOutlineMailOutline />
                                </span>
                            </div>
                            <div className="my-auto">
                                <div className="mb-3">
                                    <h3 className="text-[20px] font-bold">
                                        ایمیل
                                    </h3>
                                </div>
                                <div className="text-[15px]">
                                    <p>info@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-6 my-8">
                            <div className="bg-[#72b3ea] p-5 rounded-full ">
                                <span className="text-white text-[30px] my-auto">
                                    <MdLocationPin />
                                </span>
                            </div>
                            <div className="my-auto">
                                <div className="mb-3">
                                    <h3 className="text-[20px] font-bold">
                                        آدرس
                                    </h3>
                                </div>
                                <div className="text-[15px]">
                                    <p>تهران خیابان نیاوران  </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <button className="bg-[#203253] hover:bg-[#539DDB] transition-colors duration-300 text-white px-8 py-3 rounded-xl" type="button">اطلاعات بیشتر</button>
                        </div>
                    </div>
                    <div className="my-auto">
                        <div>
                            <img className="xl:max-w-[600px] xl:w-[100%] rounded-2xl mb-6" src="https://impreza22.us-themes.com/wp-content/uploads/2021/12/1st-pic.jpg" alt="" />
                        </div>
                        <div>
                            <img className="xl:max-w-[600px] xl:w-[100%] rounded-2xl" src="https://impreza22.us-themes.com/wp-content/uploads/2021/12/2nd-pic.jpg" alt="" />
                        </div>
                    </div>
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

export default Home