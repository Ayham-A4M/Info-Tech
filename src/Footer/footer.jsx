import headSvg from '../../images/FooterSvg.svg'
import FirstLinksList from './firstLinksList'
const Footer = () => {
    return (
        <div className="footer bg-slate-900">
            <div>
                <img src={headSvg} className='w-full object-cover' />
            </div>
            <div className="footerContainer flex md:flex-row flex-col-reverse items-center justify-center gap-[25px] py-[100px]">
                <div className="left flex flex-row gap-[20px]">
                        <FirstLinksList/>
                        <FirstLinksList/>  
                </div>
                <div className="right text-slate-300 flex flex-col gap-[15px] justify-center">
                    <span className="capitalize font-normal text-[17px]">This site made with React...</span>
                    <span>Design Code &copy; 2024 </span>
                    <a href="#" className="decoration-none text-slate-100">Term and Services-PrivacyPolicy</a>
                </div>
            </div>
        </div>
    )
}
export default Footer