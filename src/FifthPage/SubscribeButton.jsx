const SubscribeButton = ({iconComponent}) => {
    return (
        <button className="bg-slate-300 text-slate-950 flex flex-row gap-[10px] justify-center items-center rounded-full px-[30px] py-[10px]">
            {iconComponent}
            <span>Subscribe</span>
        </button>
    )
}
export default SubscribeButton