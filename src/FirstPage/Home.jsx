import { useLayoutEffect } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

import LeftSection from './LeftSection';
import img from '../../images/work3.png'
const Home = () => {
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gsap.from('.left-Section-homePage',{duration:.5,x:'-100%'})
            gsap.from('.left-Section-homePage',{duration:1,opacity:0,delay:.3})
            gsap.from('.container-img',{duration:1,opacity:0,delay:.3})
    
        })
        return ()=>ctx.revert()
    },[])
    return (
        <div id='home' className="HomePage w-full min-h-[100vh] mt-[-90px] md:pt-[90px] pt-[30px] md:px-[100px] px-[25px] ">
            <div className="containerHome flex flex-row max-[1449px]:items-center  justify-between w-full h-full pt-[50px]">
              
                <LeftSection/>
                <div className="rigth-section w-full max-[1450px]:hidden">
                    <div className="container-img w-full ">
                        <img src={img} alt="" className="w-full " />
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Home;