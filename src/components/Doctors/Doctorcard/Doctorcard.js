const Doctorcard = (props) => {
    return (
        <div className="mt-20">
            <div className="mb-5 ">
                <img className="max-w-[260px]  rounded-2xl mx-auto" src={props.img} alt="" />
            </div>
            <div className="mb-3">
                <h3 className="text-center text-[#203253] text-[20px] font-bold">
                    {props.name}
                </h3>
            </div>
            <div>
                <p className="text-center text-[#335d83] text-[15px]">
                    {props.job}
                </p>
            </div>
        </div>
    )
}


export default Doctorcard