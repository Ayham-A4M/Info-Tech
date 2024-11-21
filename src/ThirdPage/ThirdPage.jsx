import TutCard from "./TutCard"
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
const ThirdPage = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])
    return (
        <div id="tutorials" className="thirdPage relative z-0 min-h-[80vh] py-[50px] w-full">
            <div className="CoontainerThirdPage md:px-[100px] h-full px-[10px] max-[991px]:pt-[50px] w-full flex flex-row gap-[40px] max-[991px]:flex-col justify-center flex-wrap  ">
                <div className="leftSection basis-[30%] max-[776px]:text-center flex-grow" data-aos='zoom-in' data-aos-duration="800">
                    <span className='text-[19px] text-slate-300 font-semibold '>premium tutorials</span>
                    <h1 className='md:text-[60px] text-slate-200 text-[40px] font-bold'>Tutorials to guide you beyond</h1>
                    <p className='text-slate-300 font-semibold md:w-[85%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa fuga recusandae est voluptas possimus esse! Officiis accusantium consectetur libero cupiditate ipsa delectus, vel dolore praesentium cum consequatur sed iusto.</p>
                    <button className="mt-[20px] max-[776px]:w-full px-[40px] py-[15px] rounded-full bg-slate-800 text-slate-300 font-medium">More Tutorials</button>
                </div>
                <div className="tutorialsSection flex flex-row gap-[150px] justify-end basis-[65%] max-[900px]:flex-col max-[900px]:items-center" >
                    <div className="w-fit h-fit" data-aos="zoom-in" data-aos-duration="800">
                        <TutCard title={"Figma HandBook"} details={"hello world welcome test data hello hello world welcome test data hello"} free={"20 tutorials"} pro={"Videos-Pdf-Code"} />
                    </div>
                    <div className="w-fit h-fit" data-aos="zoom-in" data-aos-duration="800">
                        <TutCard  title={`Swift UI -HandBook`} details={"hello world welcome test data hello hello world welcome test data hello"} free={"20 tutorials"} pro={"Videos-Pdf-Code"} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ThirdPage