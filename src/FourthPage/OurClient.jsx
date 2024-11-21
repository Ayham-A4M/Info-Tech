import amazone from '../../images/amazon.svg'
import google from '../../images/google.svg'
import facebook1 from '../../images/facebook1.svg'
import apple from '../../images/apple.svg'
import { FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";
import { useLayoutEffect } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'

const OurClient = () => {
    
    return (
        <div className="ourClient flex justify-center md:gap-[50px] gap-[45px] pt-[100px] text-[40px] text-slate-200 items-center ">
            <FaFacebookF className='hello text-[38px]' />
            <FaAmazon className='hello' />
            <FaApple className='hello' />
            <RiNetflixFill className='hello' />
            <FaGoogle className='hello' />
        </div>
    )
}
export default OurClient