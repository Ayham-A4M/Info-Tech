
import { IoHomeSharp } from "react-icons/io5";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const FirstLinksList = () => {
    useEffect(()=>{
        Aos.init({offset:-50})
        Aos.refresh()
    },[])
    return (
        <ul className="w-fit text-slate-400">
            <li className="px-[20px] py-[15px] text-center text-[18px] flex flex-row gap-[10px] items-center" data-aos="zoom-in-out" data-aos-duration="100">
                <IoHomeSharp />
                <a href="#home" className='decoration-none text-[16px]'>Home</a>
            </li>
            <li className="px-[20px] py-[15px] text-center text-[18px] flex flex-row gap-[10px] items-center" data-aos="zoom-in-out" data-aos-duration="200">
                <FaCloudDownloadAlt />
                <a href="#" className='decoration-none text-[16px]'>Downloads</a>
            </li>
            <li className="px-[20px] py-[15px] text-center text-[18px] flex flex-row gap-[10px] items-center" data-aos="zoom-in-out" data-aos-duration="300">
                <GrDocumentUpdate />
                <a href="#" className='decoration-none text-[16px]'>Updates</a>
            </li>
            <li className="px-[20px] py-[15px] text-center text-[18px] flex flex-row gap-[10px] items-center" data-aos="zoom-in-out" data-aos-duration="400">
                <IoIosInformationCircle />
                <a href="#learn" className='decoration-none text-[16px]'>Courses</a>
            </li>

        </ul>
    )
}
export default FirstLinksList