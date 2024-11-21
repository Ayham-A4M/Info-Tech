// import { Link } from 'react-router-dom'
import Links from "./Links";
import { RiMenu4Fill } from "react-icons/ri";
import { useContext } from "react";
import { ClickMenueContext } from "../App";
import MenuBar from "./MenuBar";
import { useRef } from "react";
import gsap from 'gsap'
import { useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { MdShapeLine } from "react-icons/md";

const Nav = () => {

    const { clickMenu, setClickMenu } = useContext(ClickMenueContext);
    const navRef = useRef()
    useLayoutEffect(() => {
        // we use gsap context because its auto clean up function
        let ctx = gsap.context(() => {
            gsap.from(navRef.current, { duration:1.3, y: '-100%', ease: 'bounce' });
            gsap.to('.link', { opacity:100, duration:.4, delay:1,stagger:.2 });
        })
        return () => ctx.revert();// its return the element to style so in our case the links will get back opacity-0 and animation will apply opacity-100
    }, [])
    return (
        <>
            <div ref={navRef} className="NavBar w-full  flex justify-between items-center z-50 bg-transparent sticky top-0 py-[25px] md:px-[100px] px-[25px] text-[18px] text-neutral-300">
                <div className="Logo text-[40px] font-bold text-neutral-900">
                    <MdShapeLine />
                </div>
                <Links />

                <div className="menue text-[35px] text-natural-300" onClick={() => setClickMenu(() => !clickMenu)}>
                    <RiMenu4Fill className="cursor-pointer" />
                </div>
                <MenuBar />
            </div>

        </>
    )
}
export default Nav