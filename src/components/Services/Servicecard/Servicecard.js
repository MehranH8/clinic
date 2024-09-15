const Servicecard = (props) => {
    return (
        <div className="bg-[#f4faff] p-10 rounded-2xl">
            <div>
                <h3 className="text-[#203253] text-[20px] font-bold mb-3">
                    {props.title}
                </h3>
            </div>
            <div>
                <p className="text-[#335d83] text-[14px] mb-2">
                    زمان انجام تست : {props.time}
                </p>
            </div>
            <div>
                <p className="text-[#335d83] text-[14px] mb-6">
                    هزینه : {props.price}
                </p>
            </div>
            <div>
                <button className="text-[#335d83] text-[16px] bg-[#E6F1FA] rounded-xl w-full py-3 hover:bg-[#72B3EA] hover:text-white transition-colors duration-300 " type="button">ثبت نوبت</button>
            </div>
        </div>
    )
}

export default Servicecard