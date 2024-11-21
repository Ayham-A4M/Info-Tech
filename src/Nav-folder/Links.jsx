
import { LuAirplay } from "react-icons/lu";
import { LuBrainCircuit } from "react-icons/lu";
import { LuFormInput } from "react-icons/lu";
import { FaCreditCard } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

const Links = () => {

    
    

    return (
        <>
            <div className="links  flex flex-row justify-between gap-[100px] flex-shrink w-fit ">

                <div className="link opacity-0 w-fit flex justify-between gap-[15px] items-center">
                    <LuFormInput />
                    <a href="#learn">Courses</a>
                </div>

                <div className="link opacity-0 w-fit flex justify-between gap-[15px] items-center">
                    <LuBrainCircuit />
                    <a href="#tutorials">Toutorials</a>
                </div>
                <div className="link opacity-0 w-fit flex justify-between gap-[15px] items-center">
                    <LuAirplay />
                    <a href="#Instructor">Instructor</a>
                </div>
                <div className="link opacity-0 w-fit flex justify-between gap-[15px] items-center">
                    <FaCreditCard />
                    <a href="#price">Pricing</a>
                </div>

            </div>

        </>


    )
}
export default Links