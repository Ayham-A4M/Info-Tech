import rectbox from '../../images/ReactBoxPhoto.png'
import mob from '../../images/workMobile.png'
import swift from '../../images/swiftBox.png'
import design from '../../images/designBox.png'
import videosmaker from '../../images/createVideosBox.png'
import SecondryCard from './SecondryCard'



const CardsOffer = () => {

    
    return (
        <div className="SecondCardsContainer flex flex-row flex-wrap gap-[20px] pt-[50px] justify-center">
            <SecondryCard Title={"Build a web app with React Hooks"} picture={rectbox} fewdetails={"Early Access"} durationAos={'1500'}  />
            <SecondryCard Title={"Flutter for Designer"} picture={mob} fewdetails={"18videos-35hours"} durationAos={'1200'}  />
            <SecondryCard Title={"SwiftUI for ios 17"} picture={swift} fewdetails={"12videos-20hours"} durationAos={'900'}  />
            <SecondryCard Title={"UI Designer for Developer"} picture={design} fewdetails={"08videos-12hours"} durationAos={'600'}  />
            <SecondryCard Title={"Create a promr video in After Effects"} picture={videosmaker} fewdetails={"10videos-19hours"} durationAos={'300'}  />

        </div>
    )
}
export default CardsOffer