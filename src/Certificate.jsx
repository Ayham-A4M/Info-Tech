import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";




const Certificate = () => {
    useEffect(()=>{
        Aos.init(
        {
            offset:200
        }
       );
        Aos.refresh();
    },[])
    return (
        <div className="certifecate pb-[50px] ">
            <div className="containerCertificate md:px-[100px] h-full px-[10px] max-[991px]:pt-[50px] w-full flex   flex-row max-[991px]:flex-col-reverse gap-[80px]">
                <div className="leftS  w-[100%] relative">
                    <div className="CUIUX px-[30px] py-[30px] flex flex-col gap-[20px] rounded-[15px] w-full" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="600">
                        <span className="text-slate-300 font-medium text-[18px]">UI Design</span>
                        <span className="text-slate-300 font-medium text-[28px]">certificate</span>
                        <div className="w-full flex flex-col gap-[30px]">
                            <div className="w-[50%] h-[6px] rounded-[20px] bg-slate-200"></div>
                            <div className="w-[73%] h-[6px] rounded-[20px] bg-slate-200"></div>
                            <div className="w-[84%] h-[6px] rounded-[20px] bg-slate-300"></div>
                            <div className="w-[93%] h-[6px] rounded-[20px] bg-slate-400"></div>
                            <div className="w-[95%] h-[6px] rounded-[20px] bg-slate-200"></div>
                        </div>
                    </div>
                    <div className="CUIUX px-[30px] py-[30px] flex flex-col gap-[20px] rounded-[15px] absolute top-[-60px] right-[-4px] w-[50%]" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="600" data-aos-delay="100">
                        <span className="text-slate-300 font-medium text-[18px]">UI Design</span>
                        <span className="text-slate-300 font-medium text-[28px]">certificate</span>
                        <div className="w-full flex flex-col gap-[30px]">
                            <div className="w-[50%] h-[6px] rounded-[20px] bg-slate-200"></div>
                            <div className="w-[73%] h-[6px] rounded-[20px] bg-slate-200"></div>
                            <div className="w-[84%] h-[6px] rounded-[20px] bg-slate-300"></div>
                            <div className="w-[93%] h-[6px] rounded-[20px] bg-slate-400"></div>
                            <div className="w-[95%] h-[6px] rounded-[20px] bg-slate-200"></div>
                        </div>
                    </div>
                </div>


                <div className="rigthS  w-[100%]">
                    <span className='text-[19px] text-slate-300 font-semibold ' data-aos="fade-zoom-in" data-aos-easing="ease-in-back">Get Certificates</span>
                    <h1 className='md:text-[40px] text-slate-200 text-[30px] font-bold' data-aos-delay="300" data-aos="fade-zoom-in" data-aos-easing="ease-in-back">Get Certificates,Improve your Profile</h1>
                    <p className='text-slate-300 font-semibold md:w-[70%]' data-aos="fade-zoom-in" data-aos-easing="ease-in-back"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa fuga recusandae est  cupiditate ipsa delectus, vel dolore praesentium cum consequatur sed iusto.</p>
                </div>

            </div>
        </div>
    )
}
export default Certificate