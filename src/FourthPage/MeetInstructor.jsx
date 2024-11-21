import pic1 from '../../images/persone1.png'
import figma from '../../images/figma.svg'
import art from '../../images/art.svg'
import spark from '../../images/spark.svg'
import PointCard from './PointCard'
import InstructorCard from './InstructorCard'
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const MeetInstructor = () => {
    useEffect(() => {
        Aos.init({ offset: 250 })
        Aos.refresh()
    }, [])
    return (
        <div id='Instructor' className="MeetInstructor pt-[100px]">
            <div className="headerMeetInstructor flex justify-center pb-[50px]">
                <div className='text-center w-fit flex flex-col justify-center items-center gap-[10px] pt-[30px]' >
                    <span className='text-slate-800 font-normal text-[16px] uppercase' data-aos="zoom-in-out" data-aos-duration="500">Whos behind</span>
                    <h1 className='md:text-[45px] text-[35px] font-bold text-slate-800' data-aos="zoom-in-out" data-aos-duration="500" data-aos-delay="400">Meet the instructor</h1>
                    <p className='text-slate-800 font-normal text-[16px] md:w-[50%] w-full' data-aos="zoom-in-out" data-aos-duration="500" data-aos-delay="800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, error nostrum omnis tempore quos, numquam inventore eligendi cum, autem cumque rendis.</p>
                </div>

            </div>
            <div className="containerMeet flex flex-row gap-[50px] max-[1450px]:flex-col justify-center items-center">
                <div className='w-fit h-fit' data-aos="zoom-in-out" data-aos-duration="500">

                    <InstructorCard pictureInst={pic1} NameInst={"Meng To"} infoAboutInst={"am, corporis sunt beatae quasi rerum quisquam aliquam in exercitationem, ut illo quis quo earum ea "} TitleCard={"Instructor1"} point1={{ icon: figma, details: "amet consectetur adipisicing elit. Reiciendis, itaque delectus expedita, consequatur as", time: "5hour" }} point2={{ icon: spark, details: "amet consectetur quasi rerum quisquam aliquam am, corporis sunt beatae quasadipisicing ", time: "80hour" }} point3={{ icon: art, details: "rerum quisquam aliquam am, corporis sunt beatae quasadipisicing amet atae quasi rerum", time: "20hour" }} />
                </div>
                <div className='w-fit h-fit' data-aos="zoom-in-out" data-aos-duration="500">
                    <InstructorCard pictureInst={pic1} NameInst={"Meng To"} infoAboutInst={"am, corporis sunt beatae quasi rerum quisquam aliquam in exercitationem, ut illo quis quo earum ea "} TitleCard={"Instructor1"} point1={{ icon: figma, details: "amet consectetur adipisicing elit. Reiciendis, itaque delectus expedita, consequatur as", time: "5hour" }} point2={{ icon: spark, details: "amet consectetur quasi rerum quisquam aliquam am, corporis sunt beatae quasadipisicing ", time: "80hour" }} point3={{ icon: art, details: "rerum quisquam aliquam am, corporis sunt beatae quasadipisicing amet atae quasi rerum", time: "20hour" }} />
                </div>
            </div>

        </div>
    )
}
export default MeetInstructor