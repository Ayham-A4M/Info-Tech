
import { BiLike } from "react-icons/bi";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";


const SecondryCard = ({Title,picture,fewdetails,durationAos}) => {
    useEffect(()=>{
        Aos.init();
        Aos.refresh();
    },[])

    return (
        <div id="offerCard" className="card flex" data-aos="fade-right" data-aos-duration={window.innerWidth>776?durationAos:'500'}>
        <div className='boxCard rounded-[10px] max-w-[300px] py-[20px] px-[25px] bg-blue-700 max-[771px]:pb-[20px]'>
            <div className='ImageSvg rounded-[10px]'>
                <img src={picture} alt="" className='w-full h-full  rounded-t-[10px] aspect-[5/3]' />
            </div>
            <div className='flex flex-col gap-5 items-center '>
                <div className='TitleOfBox'>
                    <h2 className='text-[28px] text-slate-300 font-bold uppercase text-center '>{Title}</h2>
                </div>
                <div className='text-center'>
                    <span className='text-slate-300 font-medium text-[16px]'>{fewdetails}</span>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-slate-400 text-[20px]'>
                        <BiLike />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SecondryCard