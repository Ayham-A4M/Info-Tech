import FreeSubscribe from "./FreeSubscribe";
import ProCard from "./ProCard";
import TeamSubscribe from "./TeamSubscribe";
import SubscribeButton from "./SubscribeButton";
import { FcElectricity } from "react-icons/fc";
import { WiAlien } from "react-icons/wi";

const SubscribeAnnualCards = () => {
    return (
        <div className="SubscribeMonthlyCards flex max-[1220px]:flex-wrap justify-evenly items-center gap-[35px] pt-[100px]">
            <ProCard contentSubscribe={[{ mainWord: "All Courses", secondWord: "and videos" }, { mainWord: "Source Files", secondWord: "ePub" }, { mainWord: "Source Code", secondWord: "git hub" }, { mainWord: "UI & UX", secondWord: "design" }]} subscribeButtonInCard={<SubscribeButton iconComponent={<WiAlien className="text-[18px] text-purple-900" />} />} details={"per once in Year,billed Yearly!"} price={"400$"} />

            <TeamSubscribe contentSubscribe={[{ mainWord: "All Courses", secondWord: "and videos" }, { mainWord: "All Courses", secondWord: "and videos" }, { mainWord: "All Courses", secondWord: "and videos" }]} subscribeButtonInCard={<SubscribeButton iconComponent={<FcElectricity className="text-[18px]" />} />} details={"Permember,per Year,billed Yearly"} price={"200$"} isAnnual={true} />
        </div>
    )
}
export default SubscribeAnnualCards