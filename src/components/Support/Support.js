import {  FaClinicMedical, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneFlip, FaRegHourglassHalf } from "react-icons/fa6";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";



const Support = () => {
    return (
        <div>
            <div className="mx-8 md:mx-16 mt-14">
                {/*title */}
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
                {/*title */}
                {/*our team */}
                <div className="lg:flex mb-24 mx-2">
                    <div className="ml-16 my-auto">
                        <h3 className="text-[28px] lg:mb-0 mb-6 font-bold min-w-[200px]">
                            عضویت در تیم ما
                        </h3>
                    </div>
                    <div>
                        <p className="text-[15px] text-justify md:text-right">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد

                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-10">
                        <div className="mb-4">
                            <h4 className="text-[#539ddb] text-[26px] font-bold">متخصص پوست</h4>
                        </div>
                        <div className="lg:flex gap-y-4 sm:gap-y-0 lg:gap-y-0 md:gap-y-4 md:grid md:grid-cols-2 sm:flex grid grid-cols-2  gap-x-6 lg:gap-x-10 mb-14">
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <span>
                                    <FaRegHourglassHalf />
                                </span>
                                <p>تمام وقت</p>
                            </div>
                            <div className="flex gap-x-3 text-[#335d85] text-[16px]">
                                <span>
                                    <FaClinicMedical />
                                </span>
                                <p>کلینیک</p>
                            </div>
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <span>
                                    <FaMapMarkerAlt />
                                </span>
                                <p>تهران</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white text-[#203253] px-10 py-4 rounded-xl" type="button">گرفتن نوبت</button>
                        </div>
                    </div>
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-10">
                        <div className="mb-4">
                            <h4 className="text-[#539ddb] text-[26px] font-bold">نویسنده فنی</h4>
                        </div>
                        <div className="lg:flex gap-y-4 sm:gap-y-0 lg:gap-y-0 md:gap-y-4 md:grid md:grid-cols-2 sm:flex grid grid-cols-2  gap-x-6 lg:gap-x-10 mb-14">
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <span>
                                    <FaRegHourglassHalf />
                                </span>
                                <p>تمام وقت</p>
                            </div>
                            <div className="flex gap-x-3 text-[#335d85] text-[16px]">
                                <span>
                                    <FaClinicMedical />
                                </span>
                                <p>کلینیک</p>
                            </div>
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <span>
                                    <FaMapMarkerAlt />
                                </span>
                                <p>تهران</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white text-[#203253] px-10 py-4 rounded-xl" type="button">گرفتن نوبت</button>
                        </div>
                    </div>
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-10">
                        <div className="mb-4">
                            <h4 className="text-[#539ddb] text-[26px] font-bold">روانشناس خانواده</h4>
                        </div>
                        <div className="lg:flex gap-y-4 sm:gap-y-0 lg:gap-y-0 md:gap-y-4 md:grid md:grid-cols-2 sm:flex grid grid-cols-2  gap-x-6 lg:gap-x-10 mb-14">
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <span>
                                    <FaRegHourglassHalf />
                                </span>
                                <p>تمام وقت</p>
                            </div>
                            <div className="flex gap-x-3 text-[#335d85] text-[16px]">
                                <span>
                                    <FaClinicMedical />
                                </span>
                                <p>کلینیک</p>
                            </div>
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <span>
                                    <FaMapMarkerAlt />
                                </span>
                                <p>تهران</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white text-[#203253] px-10 py-4 rounded-xl" type="button">گرفتن نوبت</button>
                        </div>
                    </div>
                    <div className="bg-[#f4faff] rounded-2xl px-10 py-10">
                        <div className="mb-4">
                            <h4 className="text-[#539ddb] text-[26px] font-bold">نماینده فروش</h4>
                        </div>
                        <div className="lg:flex gap-y-4 sm:gap-y-0 lg:gap-y-0 md:gap-y-4 md:grid md:grid-cols-2 sm:flex grid grid-cols-2  gap-x-6 lg:gap-x-10 mb-14">
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <span>
                                    <FaRegHourglassHalf />
                                </span>
                                <p>تمام وقت</p>
                            </div>
                            <div className="flex gap-x-3 text-[#335d85] text-[16px]">
                                <span>
                                    <FaClinicMedical />
                                </span>
                                <p>کلینیک</p>
                            </div>
                            <div className="flex gap-x-2 text-[#335d85] text-[16px]">
                                <span>
                                    <FaMapMarkerAlt />
                                </span>
                                <p>تهران</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#E6F1FA] hover:bg-[#539DDB] transition-colors duration-300 hover:text-white text-[#203253] px-10 py-4 rounded-xl" type="button">گرفتن نوبت</button>
                        </div>
                    </div>
                </div>
                {/*our team */}
            </div>

        </div>
    )
}


export default Support