import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { Link } from "react-router-dom";
import React,{useState} from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Servicecard from "./Servicecard/Servicecard";



const Services = () => {

    const [xray, setxray] = useState({
        data: [
            ["سی تی اسکن", "20 دقیقه", "20$",],

        ]
    })
    const [virtual, setvirtual] = useState({
        data: [
            ["سی تی اسکن", "20 دقیقه", "20$",],
            ["سی تی اسکن", "20 دقیقه", "20$",],

        ]
    })
    const [treatment, settreatment] = useState({
        data: [
            ["سی تی اسکن", "20 دقیقه", "20$",],
            ["سی تی اسکن", "20 دقیقه", "20$",],
            ["سی تی اسکن", "20 دقیقه", "20$",],

        ]
    })
    const [phisical, setphisical] = useState({
        data: [
            ["سی تی اسکن", "20 دقیقه", "20$",],

        ]
    })

    const [illness, setillness] = useState({
        data: [
            ["سی تی اسکن", "20 دقیقه", "20$",],
            ["سی تی اسکن", "20 دقیقه", "20$",],

        ]
    })

    const [injuries, setinjuries] = useState({
        data: [
            ["سی تی اسکن", "20 دقیقه", "20$",],
            ["سی تی اسکن", "20 دقیقه", "20$",],
            ["سی تی اسکن", "20 دقیقه", "20$",],
            ["سی تی اسکن", "20 دقیقه", "20$",],

        ]
    })







    const data = [
        {
            label: "ایکس ری",
            value: "x-ray",
            desc:
                xray.data.map((item) => (
                    <Servicecard title={item[0]} time={item[1]} price={item[2]} />
                ))

        },
        {
            label: "مراقبت مجازی",
            value: "virtual-care",
            desc: virtual.data.map((item) => (
                <Servicecard title={item[0]} time={item[1]} price={item[2]} />
            ))
        },

        {
            label: "درمان",
            value: "treatment",
            desc:  treatment.data.map((item) => (
                <Servicecard title={item[0]} time={item[1]} price={item[2]} />
            ))
        },

        {
            label: "فیزیوتراپی",
            value: "phisical",
            desc: phisical.data.map((item) => (
                <Servicecard title={item[0]} time={item[1]} price={item[2]} />
            ))
        },

        {
            label: "بیماری",
            value: "illness",
            desc:  illness.data.map((item) => (
                <Servicecard title={item[0]} time={item[1]} price={item[2]} />
            ))
        },
        {
            label: "آسیب",
            value: "injuries",
            desc: injuries.data.map((item) => (
                <Servicecard title={item[0]} time={item[1]} price={item[2]} />
            ))
        }
    ];

    const [activeTab, setActiveTab] = React.useState("x-ray");
    return (
        <div className="mt-20">
            <div className="mx-16 xl:mx-24">
                <div className="lg:flex  mb-24 mx-2 ">
                    <div className="ml-16 my-auto">
                        <h3 className="text-[28px] lg:mb-0 mb-6 font-bold min-w-[200px]">
                            خدمات ما
                        </h3>
                    </div>
                    <div>
                        <p className="text-[15px] text-justify md:text-right">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است

                        </p>
                    </div>
                </div>
                <div className="mb-24">
                    <Tabs value={activeTab} id="custom-animation" >
                        <TabsHeader className="bg-white mb-4 grid grid-cols-3 gap-y-4 lg:grid-cols-6" indicatorProps={{
                            className:
                                "bg-[#72B3EA] text-white shadow-none rounded-md",
                        }}>
                            {data.map(({ label, value }) => (
                                <Tab onClick={() => setActiveTab(value)} className={activeTab === value ? "text-white" : "text-[#539ddb]"} key={value} value={value}>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody
                            animate={{
                                initial: { y: 250 },
                                mount: { y: 0 },
                                unmount: { y: 250 },
                            }}
                        >
                            {data.map(({ value, desc }) => (
                                <TabPanel className="grid grid-cols-1 md:grid-cols-2 gap-8" key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
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


export default Services