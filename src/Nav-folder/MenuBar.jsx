import { LuAirplay } from "react-icons/lu";
import { LuBrainCircuit } from "react-icons/lu";
import { LuFormInput } from "react-icons/lu";
import { FaCreditCard } from "react-icons/fa6";
import { useContext, useEffect, useRef, useState } from "react";
import { ClickMenueContext } from "../App";
import { AiFillCloseCircle } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
const MenuBar = () => {
  
    const { clickMenu, setClickMenu } = useContext(ClickMenueContext);

    useEffect(() => {
        Aos.init()
        Aos.refresh();
    },)

    const noScroll = () => {
        if (clickMenu) {
            document.body.classList.add('removeScroll')
            return true
        }
    }
    const removeSc=()=>{
        
        document.body.classList.remove('removeScroll')
        console.log("hi");
    }
    const ClickOnLink=()=>{
        setClickMenu(!clickMenu);removeSc();
    }

    return (

        <>
            {clickMenu && noScroll() &&
                <div className="MenuBar flex flex-col gap-[30px]   w-[80%] max-w-[250px] z-50 absolute right-0 top-0 h-lvh bg-slate-800" data-aos={'fade-left'} data-aos-duration='500'>
                    <div className="flex justify-end pt-[50px] pr-[20px]">
                        <AiFillCloseCircle  className=" text-[25px] text-slate-200" onClick={() => { setClickMenu(!clickMenu); removeSc() }} />
                    </div>
                    <ul className=" flex flex-col items-center gap-[25px]  bg-slate-800 z-50">
                        <li className="flex flex-row gap-[15px] items-center justify-center px-[25px] py-[10px]">
                            <LuFormInput />
                            <a href="#learn" onClick={()=> {ClickOnLink()}}>Courses</a>
                        </li>
                        <li className="flex flex-row gap-[15px] items-center justify-center px-[25px] py-[10px] ">
                            <LuBrainCircuit />
                            <a href="#tutorials" onClick={()=> {ClickOnLink()}}>Toutorials</a>
                        </li>
                        <li className="flex flex-row gap-[15px] items-center justify-center px-[25px] py-[10px] ">
                            <LuAirplay />
                            <a href="#Instructor" onClick={()=> {ClickOnLink()}}>Instructor</a>
                        </li>
                        <li className="flex flex-row gap-[15px] items-center justify-center px-[25px] py-[10px] ">
                            <FaCreditCard />
                            <a href="#price" onClick={()=> {ClickOnLink()}}>Pricing</a>
                        </li>

                    </ul>
                </div>
            }
        </>
    )
}
export default MenuBar