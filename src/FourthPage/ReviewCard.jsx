
const ReviewCard = ({ Name, title, details, picture,durationAos }) => {
    
    return (
        <div  className="reviewCard flex flex-col justify-center px-[20px] py-[20px] bg-slate-900 opacity-85 rounded-[10px] gap-[12px]">
            <div className="imageContainer w-full flex items-center  ">
                <img src={picture} alt="" className="w-10 h-10 rounded-full border-slate-300 border-[1px]" />
            </div>
            <span className="NameOfReviewer capitalize text-[22px] font-semibold text-slate-200 ">{Name}</span>
            <span className="Title capitalize text-[18px] font-normal text-slate-300 ">{title}</span>
            <p className=" text-[17px] font-normal text-slate-300 w-[85%]">{details}</p>
        </div>
    )
}
export default ReviewCard