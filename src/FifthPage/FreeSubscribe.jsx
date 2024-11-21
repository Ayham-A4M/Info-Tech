import { MdOutlineDone } from "react-icons/md";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const FreeSubscribe = ({ contentSubscribe, subscribeButtonInCard, details, price }) => {
    useEffect(()=>{
        Aos.init();
        Aos.refresh();
    },[])
    return (
        <div className="w-fit h-fit" data-aos="zoom-out">
            <div className="freeCard  h-fit max-[776px]:before:hidden relative px-[80px] py-[50px] rounded-tr-[11%] rounded-b-[11%] bg-slate-900">
                <div className="flex flex-col gap-[20px] items-center text-slate-300">
                    <span className="text-[15px] text-slate-400">Basic</span>
                    <h1 className="text-[40px] font-bold  text-slate-300">{price}</h1>
                    <span>{details}</span>
                    <div className="contentSubscribe flex flex-col gap-[15px]">
                        {contentSubscribe.map((e) => (
                            <div className="flex gap-[10px] items-center" key={Math.random() * 2000 + 1000}>
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
export default FreeSubscribe