import PointCard from "./PointCard"
const InstructorCard = ({pictureInst,NameInst,infoAboutInst,TitleCard,point1,point2,point3}) => {
    return (
        <div className="instructorCard items-center flex  gap-[5px] w-[100%] max-w-[900px] md:flex-row flex-col max-[771px]:items-center bg-slate-900 py-[20px] px-[10px] rounded-[15px]">
            <div className="box max-w-[250px] min-h-[350px] h-fit  bg-purple-700 px-[15px] py-[30px] flex flex-col gap-[25px]  rounded-[8px] items-center ">
                <div className="image w-[40px] h-[40px] rounded-full">
                    <img src={pictureInst} alt="" className='w-full h-full' />
                </div>
                <span className='text-slate-200 font-bold text-[25px]'>{NameInst}</span>
                <div className='flex justify-center text-center'>
                    <p className='details  text-[18px] text-slate-400 font-normal'>{infoAboutInst}</p>
                </div>
            </div>
            <div className="detailsOfCard flex flex-col gap-[25px]">
                <div>
                    <span className='text-[18px] text-slate-400 '>{TitleCard}</span>
                </div>
                <div className=' flex flex-col h-full justify-around gap-[30px]'>
                    <PointCard picIcon={point1.icon} details={point1.details} time={point1.time} />
                    <PointCard picIcon={point2.icon} details={point2.details} time={point2.time} />
                    <PointCard picIcon={point3.icon} details={point3.details} time={point3.time} />
                </div>
            </div>

        </div>
    )
}
export default InstructorCard