import { useState, useContext, createContext, useEffect } from "react";
import SubscribeButtons from "./SubscribeButtons";
import SubscribeMonthlyCards from "./SubscribeMonthlyCards";
import SubscribeAnnualCards from "./SubscribeAnnualCards";
export const clickedContexte = createContext();

import Aos from "aos";
import "aos/dist/aos.css";
const FifthPage = () => {

    useEffect(()=>{
        Aos.init();
        Aos.refresh();
    },[])

    const [clicked, setClicked] = useState(1);


    return (
        <div id="price" className="fifthPage pt-[150px] min-h-[100vh] relative z-0 pb-[100px]">
            <div className="containerFifthPage md:px-[100px] px-[10px] flex flex-col justify-center">
                <div className="headerOfFifthPage flex flex-col justify-center items-center gap-[10px]" data-aos="zoom-in-out" data-aos-duration="300" >
                    <h1 className="font-bold md:text-[45px] text-[35px] text-slate-200">Ready to start?</h1>
                    <p className="font-normal text-[18px] text-center text-slate-300">Get access to all our premium courses, tutorials downloads,certificates and priority support.</p>
                </div>
                <clickedContexte.Provider value={{ clicked, setClicked }}>
                    <SubscribeButtons />
                    {clicked === 1 &&
                        <SubscribeMonthlyCards />
                    }
                    {clicked === 2 &&
                        <SubscribeAnnualCards/>
                    }

                </clickedContexte.Provider>
                <div className="flex flex-col items-center justify-center text-[17px] text-slate-200 font-medium pt-[100px] capitalize">
                    <p>save 47% on an annual plan,We support <br /> paypal for an individual annual only.</p>
                    <span>Any Question? <a className="text-sky-400 decoration-none cursor-pointer">Contact us</a></span>
                </div>

            </div>
        </div>
    )
}
export default FifthPage