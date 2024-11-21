import FreeSubscribe from "./FreeSubscribe";
import ProCard from "./ProCard";
import TeamSubscribe from "./TeamSubscribe";
import SubscribeButton from "./SubscribeButton";
import { FcMindMap } from "react-icons/fc";
import { FcVip } from "react-icons/fc";
import { FcRadarPlot } from "react-icons/fc";

const SubscribeMonthlyCards = () => {
    return (
        <div className="SubscribeMonthlyCards flex max-[1220px]:flex-wrap justify-evenly items-center gap-[35px] pt-[100px]">

            <FreeSubscribe contentSubscribe={[{ mainWord: "Free", secondWord: "Courses" }, { mainWord: "Free", secondWord: "Courses" }, { mainWord: "Free", secondWord: "Courses" }]} subscribeButtonInCard={<SubscribeButton iconComponent={<FcMindMap className="text-[18px]" />} />} details={"Trail"} price={"Free"} />
            <ProCard contentSubscribe={[{ mainWord: "All Courses", secondWord: "and videos" }, { mainWord: "Source Files", secondWord: "ePub" }, { mainWord: "Source Code", secondWord: "git hub" }, { mainWord: "UI & UX", secondWord: "design" }]} subscribeButtonInCard={<SubscribeButton iconComponent={<FcVip className="text-[18px]" />} />} details={"per Month,billed monthly!"}  price={"19$"} />
            <TeamSubscribe contentSubscribe={[{ mainWord: "All Courses", secondWord: "and videos" }, { mainWord: "All Courses", secondWord: "and videos" }, { mainWord: "All Courses", secondWord: "and videos" }]} subscribeButtonInCard={<SubscribeButton iconComponent={<FcRadarPlot className="text-[18px]" />} />} details={"Permember,per month,billed monthly"}  price={"25$"} isAnnual={false} />
        </div>
    )
}
export default SubscribeMonthlyCards