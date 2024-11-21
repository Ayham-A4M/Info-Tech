import StepInfo from './StepInfo'
import pic from '../../images/work3.png'
import pic2 from '../../images/workMobile.png'
import BoxInCard from './BoxInCard'
const MainCards=()=>{
    return(
        <div className="MainCards flex flex-col gap-y-[30px] justify-between items-center pt-[50px] relative">
        <div className="leftCard flex  gap-[25px] w-[100%] max-w-[900px] md:flex-row flex-col max-[771px]:items-center bg-slate-900 py-[20px] px-[10px] rounded-[15px]">
            <div className="information flex flex-col gap-[20px]">
                <span className='text-[15px] text-slate-400 uppercase mb-[20px]'>Featured Courses</span>
                <StepInfo NumberOfStep={'1'} TitleOfStep={"UI Design For Developers"} Details={"Learn just basic of UI and Ux Designing ok"} Time={"3:45"} />
                <StepInfo NumberOfStep={'2'} TitleOfStep={"UI Patterns and Inspiration"} Details={"Design from Scratch using known "} Time={"3:32"} />
                <StepInfo NumberOfStep={'3'} TitleOfStep={"Colors and Branding"} Details={"Creat Your Color and keep going to your dream"} Time={"12:51"} />
            </div>
            <BoxInCard Title={"ui design for developers"} picture={pic} />
        </div>


        <div className="rightCard flex  gap-[25px] w-[100%] max-w-[900px] md:flex-row flex-col max-[771px]:items-center bg-slate-900 py-[20px] px-[10px] rounded-[15px]">
            <BoxInCard Title={"ui design for developers"} picture={pic2} />
            <div className="information flex flex-col gap-[20px]">
                <span className='text-[15px] text-slate-400 uppercase mb-[20px]'>Featured Courses</span>
                <StepInfo NumberOfStep={'1'} TitleOfStep={"UI Design For Developers"} Details={"Learn just basic of UI and Ux Designing ok"} Time={"3:45"} />
                <StepInfo NumberOfStep={'2'} TitleOfStep={"UI Patterns and Inspiration"} Details={"Design from Scratch using known "} Time={"3:32"} />
                <StepInfo NumberOfStep={'3'} TitleOfStep={"Colors and Branding"} Details={"Creat Your Color and keep going to your dream"} Time={"12:51"} />
            </div>
        </div>
    </div>
    )
}
export default MainCards