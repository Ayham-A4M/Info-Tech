import { FcBusinessContact } from "react-icons/fc";
import './firstpage.css'
const LeftSection = () => {
    return (
        <div className="left-Section-homePage flex flex-col gap-[25px] md:pr-[50px] max-[1449px]:items-center max-[1449px]:text-center">
            <div className="title md:text-[70px] text-[45px] flex flex-col text-slate-800 font-medium ">
                <span className=" ">Design</span>
                <span className=" ">and code</span>
                <span className=" "><span className="text-slate-400">React  </span>apps</span>
            </div>
            <div className="p-underTitle w-fit text-[16px] flex text-slate-900 font-medium max-[1449px]:justify-center">
                <p className="md:w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing  eligendi quibusdam ipsa voluptate, qui dolor, distinctio itaque aut delectus distinctio.</p>
            </div>
            <div className="GetProCard z-20  bg-neutral-400 px-[15px] py-[20px] rounded-[12px] w-[100%] max-w-[400px] flex flex-row gap-[15px]">
                <div className="iconGet  z-20 text-[40px] w-[50px] h-[50px] rounded-full flex items-center justify-center  ">
                    <FcBusinessContact />
                </div>

                <div className="details flex flex-col gap-[5px] items-center justify-center z-20">
                    <span className="text-neutral-900 font-bold text-[19px]">Get Pro Access</span>
                    <span className="text-neutral-500 font-semibold text-[16px]">19$ per month</span>
                </div>
            </div>
            <div className="p-underProCard text-slate-400 flex text-[15px] font-bold max-[1449px]:justify-center ">
                <p className="md:w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et quis sapiente soluta eveniet aut, corporis, possimus dolor quo repellendus blanditiis dicta minima assumenda. Deserunt nisi ullam tenetur pariatur labore.</p>
            </div>
        </div>
    )
}
export default LeftSection