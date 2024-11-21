import { MdOutlineDone } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

const TeamSubscribe = ({ contentSubscribe, subscribeButtonInCard, details, price,isAnnual }) => {
    const parentBefore=useRef(null)
    useEffect(() => {
        Aos.init();
        Aos.refresh();
        if(isAnnual){
            parentBefore.current.classList.add("before:hidden")
        }
    }, [])
    return (
        <div className="w-fit h-fit" data-aos="zoom-out-left" >
            <div ref={parentBefore} className="tramCard  max-[776px]:before:hidden h-fit relative px-[40px] py-[50px] rounded-tl-[12%] rounded-b-[12%] bg-slate-900">
                <div className="flex flex-col gap-[20px] items-center text-slate-300">
                    <span className="text-[15px] text-slate-400">Team</span>
                    <h1 className="text-[40px] font-bold  text-slate-300">{price}</h1>
                    <span className="w-[80%] text-center">{details}</span>
                    <div className="contentSubscribe flex flex-col gap-[15px]">
                        {contentSubscribe.map((e) => (
                            <div className="flex gap-[10px] items-center" key={Math.random() * 100}>
                                <MdOutlineDone />
                                <div>
                                    <span className="text-slate-100 font-medium">{e.mainWord} </span>{e.secondWord}
                                </div>
                            </div>

                        ))}


                    </div>
                    {subscribeButtonInCard}

                </div>
            </div>
        </div>
    )
}
export default TeamSubscribe