import { headerContent, stats } from "../data"
import Overlay from "./Overlay"
import SectionHeader from "./SectionHeader"

const Stats = () => {
    return (
        <div className="w-full flex flex-col gap-[80px] relative md:py-[120px] py-[80px] md:px-[120px] bg-gray4">
            <SectionHeader
                nowrap
                tag={headerContent["Stats"].tag}
                title={headerContent["Stats"].title}
                description={headerContent["Stats"].description}
            />
            <div className="w-full flex md:flex-row flex-col items-center justify-center gap-[72px]">
                {stats.map((item, index) => (
                    <div key={index} className="flex flex-col gap-5 items-center justify-center">
                        <span className="text-primary text-[50px]">{item.value}</span>
                        <span className="text-gray1 text-[20px]">{item.title}</span>
                    </div>
                ))}
            </div>
            <Overlay />
        </div>
    )
}

export default Stats