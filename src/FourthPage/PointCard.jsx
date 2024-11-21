const PointCard = ({ picIcon, details, time }) => {
    return (
        <div className='point flex flex-row justify-between gap-[10px] items-center md:px-[20px]'>
            <div className='iconOfCourse'>
                <div className="w-[30px]">
                    <img src={picIcon} alt="" className='w-full' />
                </div>
            </div>
            <div>
                <p className='text-[18px] text-slate-300 font-normal'>{details}</p>
            </div>
            <div className=' px-[15px] py-[3px] rounded-full flex justify-center bg-slate-950 text-slate-200'>
                {time}
            </div>
        </div>
    )
}
export default PointCard