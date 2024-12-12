
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
                {/*title */}
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
                {/*title */}
                {/*service cards */}
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
                {/*service cards */}
            </div>

        </div>
    )
}


export default Services