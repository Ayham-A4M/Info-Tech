import React from '../../images/ReactS.svg'
import figma from '../../images/figma.svg'
import wordpress from '../../images/wordpress.svg'
import dimond from '../../images/dimond.svg'
import spark from '../../images/spark.svg'
import settings from '../../images/gearH.svg'
import art from '../../images/art.svg'
const IconSection=()=>{
    return (

        
        <div className="rightSctionIcons flex basis-[50%] items-center justify-center">
        <div className="containerOfIcons flex md:gap-[20px] gap-[10px]">
            <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center bg-slate-900'>
                <img src={React} alt="" className='w-[25px] h-[25px]' />
            </div>
            <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center bg-black'>
                <img src={figma} alt="" className='w-[25px] h-[25px]' />
            </div>
            <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center bg-violet-600'>
                <img src={wordpress} alt="" className='w-[25px] h-[25px]' />
            </div>
            <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center bg-blue-600'>
                <img src={dimond} alt="" className='w-[25px] h-[25px]' />
            </div>

            <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center bg-slate-600'>
                <img src={spark} alt="" className='w-[25px] h-[25px]' />
            </div>

            <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center bg-orange-400'>
                <img src={settings} alt="" className='w-[25px] h-[25px]' />
            </div>

            <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center bg-red-600'>
                <img src={art} alt="" className='w-[25px] h-[25px]' />
            </div>


        </div>
    </div>
    )
}
export default IconSection