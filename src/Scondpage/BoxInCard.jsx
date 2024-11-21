
import { BiLike } from "react-icons/bi";
const BoxInCard = ({Title,picture}) => {
    return (
        <div className="boxOfSvgAndTitle flex items-center">
            <div className='Box h-[490px] rounded-[10px] max-w-[350px]  bg-yellow-700 max-[771px]:pb-[20px]'>
                <div className='ImageSvg rounded-[10px]'>
                    <img src={picture} alt="" className='w-full h-full  rounded-t-[10px] aspect-[5/3]' />
                </div>
                <div className='flex flex-col gap-5 items-center '>
                    <div className='TitleOfBox'>
                        <h2 className='text-[35px] text-slate-300 font-bold uppercase text-center '>{Title}</h2>
                    </div>
                    <div className='text-center'>
                        <span className='text-slate-300 font-medium text-[16px]'>22votes-3hours</span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-slate-400 text-[20px]'>
                            <BiLike />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BoxInCard