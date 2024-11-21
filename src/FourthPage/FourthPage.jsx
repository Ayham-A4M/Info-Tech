import ReviewCard from "./ReviewCard"
import persone1 from '../../images/persone1.png'
import persone2 from '../../images/persone2.png'
import { FaRegCommentDots } from "react-icons/fa6";
import OurClient from "./OurClient";
import MeetInstructor from './MeetInstructor'
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const FourthPage = () => {
    useEffect(() => {
        Aos.init({ offset: 50 })
        Aos.refresh()
    }, [])
    return (
        <div className="fourthPage min-h-[100vh] pt-[100px]">
            <div className="containerFourthPage md:px-[100px]  px-[10px]   ">
                <div className="flex flex-row gap-[30px] max-[1200px]:flex-col-reverse">
                    <div className="reviewCards flex flex-row gap-[50px]  items-center max-[640px]:flex-col ">
                        <div className="w-fit h-fit" data-aos="fade-right" data-aos-duration="400" data-aos-delay={window.innerWidth>776?'150':'0'}>
                            <ReviewCard Name={"Ayham abo ajeeb"} title={"React Course benifits"} details={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, optio nobis. Dicta voluptatem nesciunt cupiditate minima ab animi sunt deseruntore in"} picture={persone1} />
                        </div>
                        <div className="w-fit h-fit" data-aos="fade-right" data-aos-duration="400" >
                            <ReviewCard Name={"cole palmer"} title={"UI UX Courses"} details={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, optio nobis. Dicta voluptatem nesciunt cupiditate minima ab animi sunt deseruntore in"} picture={persone2} />
                        </div>
                    </div>
                    <div className="titleFourthPage px-[25px] py-[25px] rounded-[15px] bg-slate-900 opacity-75 flex flex-col" data-aos="fade-left" data-aos-duration="400">
                        <span className="uppercase font-semibold text-[18px] text-slate-400">Trusted By teams</span>
                        <span className=" font-semibold text-[35px] text-slate-300">80,000 peopel</span>
                        <p className="font-light text-[17px] text-slate-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quos obcaecati atque repellat veniam quia perspiciatis facere eum blanditiis asperiores iste minus natus dicta reprehenderit dolores, vel quidem at dolor!</p>
                        <button className="showMoreStories px-[20px] mt-[20px] py-[10px] rounded-[10px] bg-slate-700 w-fit  text-slate-200 flex flex-row gap-[10px] items-center"> <FaRegCommentDots className="commentIcon text-slate-200 duration-300 transition-all" />More Stories</button>
                    </div>
                </div>

                <MeetInstructor />





            </div>
        </div>
    )
}
export default FourthPage