
const StepInfo=({NumberOfStep,TitleOfStep,Details,Time})=>{
    return (
        <div className='steps flex flex-col gap-[10px]'>
        <div className="informationOfSetp pl-[20px]">

            <div className="titleAndTimeAndNumber flex flex-row gap-[20px] items-baseline">
                <div className="Number w-[25px] h-[25px] rounded-full flex justify-center items-center bg-slate-950 text-slate-300">{NumberOfStep}</div>
                <div className='flex flex-col gap-[7px] w-[70%]'>
                    <div className='md:w-[60%] w-[90%]'>
                        <h2 className='text-[25px] text-slate-300'>{TitleOfStep}</h2>
                    </div>
                    <div className="someWordAboutStep w-[90%]">
                        <p className='text-[18px] text-slate-400'>{Details}</p>
                    </div>
                </div>

                <div className='w-[50px] h-[20px] bg-slate-950 rounded-full flex items-center justify-center'><span className='text-[15px] text-slate-300'>{Time}</span></div>
            </div>
        </div>
    </div>
    )
}
export default StepInfo