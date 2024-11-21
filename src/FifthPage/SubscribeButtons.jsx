
import { clickedContexte } from "./FifthPage";
const SubscribeButtons = () => {
    return (
        <clickedContexte.Consumer>
            {
                (e) => {
                    return (
                        <div className="buttonSubscribes flex flex-row justify-center pt-[75px] ">
                            <button className="px-[35px] py-[10px] text-center rounded-full" onClick={(event) => {
                                event.preventDefault();
                                e.setClicked(1);


                            }} style={e.clicked === 1 ? { backgroundColor: '#E2E8F0', color: '#0F172A' } : { backgroundColor: '#0F172A', color: '#E2E8F0' }}>Monthly</button>
                            <button className="px-[35px] py-[10px] text-center rounded-full" onClick={(event) => { event.preventDefault; e.setClicked(2) }}
                                style={e.clicked === 2 ? { backgroundColor: '#E2E8F0', color: '#0F172A' } : { backgroundColor: '#0F172A', color: '#E2E8F0' }}>Annual</button>
                        </div>
                    )
                }
            }
        </clickedContexte.Consumer>
    )
}
export default SubscribeButtons