import { FaRegFileLines } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa6";

const TutCard = ({ title, details, free, pro }) => {
    
 

    return (
        <div className="tutCard min-h-[380px] h-fit relative  w-[300px] bg-slate-900 rounded-[28px] px-[15px] py-[20px] flex flex-col gap-[10px]">

            <span className="text-[14px] text-slate-400 font-bold">NEW</span>
            <h1 className="text-3xl font-bold text-slate-300">{title}</h1>
            <span className="text-[17px] text-slate-400 font-medium">{details}</span>
            <div className="forFree flex flex-row items-center gap-[10px]">
                <div className="iconCard w-10 h-10 rounded-full bg-slate-950 flex justify-center items-center text-[20px] text-slate-300">
                    <FaRegFileLines />
                </div>
                <span className="text-[16px] font-medium text-slate-400">{free}</span>
            </div>
            <div className="Pro flex flex-row items-center gap-[10px]">
                <div className="iconCard w-10 h-10 rounded-full bg-slate-950 flex justify-center items-center text-[20px] text-slate-300">
                    <FaFileContract />
                </div>
                <span className="text-[16px] font-medium text-slate-400">{pro}</span>
            </div>
            <div className="underCard"></div>
        </div>
    )
}
export default TutCard