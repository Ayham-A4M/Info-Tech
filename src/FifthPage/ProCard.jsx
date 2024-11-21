import { MdOutlineDone } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProCard = ({contentSubscribe,subscribeButtonInCard,details,price}) => {
    useEffect(()=>{
        Aos.init();
        Aos.refresh();
    },[])
    return (
        <div className="proCard  h-fit relative px-[80px] py-[50px] rounded-t-[10%] rounded-br-[10%] bg-slate-900" data-aos="zoom-out">
            <div className="flex flex-col gap-[20px] items-center text-slate-300">
                <span className="text-[15px] text-slate-400">Pro</span>
                <h1 className="text-[40px] font-bold  text-slate-300">{price}</h1>
                <span>{details}</span>
                <div className="contentSubscribe flex flex-col gap-[15px]">
                    {contentSubscribe.map((e) => (
                        <div className="flex gap-[10px] items-center" key={Math.random()*100 + 100}>
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
    )
}
export default ProCard