import sectionBg from '../../images/Svg5.svg'
import Cube from '../../images/Cube.svg'
import Cube2 from '../../images/Cube2.svg'
import rocket from '../../images/rocket.svg'
import starship from '../../images/spaceship.svg'
import alien from '../../images/alien.svg'
import IconSection from './IconsSetion'
import MainCards from './MainCards'
import CardsOffer from './CardsOffer'

const LearnPage = () => {
    return (

        <div id="learn" className="page min-h-[100vh] w-full pb-[50px]">
            <div>
                <img src={sectionBg} alt="" className='w-full object-cover' />
            </div>

            <div className="cube w-fit absolute md:top-[110px] top-[55px] left-[10%]">
                <img src={Cube} className="w-12 h-12" />
            </div>
            <div className="cube w-fit absolute md:top-[150px] top-[75px] right-[10%]">
                <img src={Cube2} className="w-12 h-12" />
            </div>

            <div className="pageContainer min-h-full md:px-[100px] px-[10px] max-[991px]:pt-[50px]">
                <div className="headersection flex flex-row max-[991px]:flex-col  gap-y-[50px] gap-x[25px] ">
                    <div className="leftSection basis-[50%] max-[776px]:text-center">
                        <span className='text-[19px] text-slate-300 font-semibold '>120 hours of courses</span>
                        <h1 className='md:text-[55px] text-slate-200 text-[35px] font-bold'>Learn the best tools and  platforms</h1>
                        <p className='text-slate-300 font-semibold md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa fuga recusandae est voluptas possimus esse! Officiis accusantium consectetur libero cupiditate ipsa delectus, vel dolore praesentium cum consequatur sed iusto.</p>
                    </div>
                    <IconSection />
                </div>
                <MainCards />
                <CardsOffer />
            </div>

        </div>
    )
}
export default LearnPage