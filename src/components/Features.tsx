import { features, headerContent } from "../data"
import Overlay from "./Overlay"
import SectionHeader from "./SectionHeader"

const Features = () => {
    return (
        <div className="w-full flex flex-col gap-[80px] relative py-[80px] md:px-[120px]">
            <SectionHeader
                nowrap
                tag={headerContent["Features"].tag}
                title={headerContent["Features"].title}
                description={headerContent["Features"].description}
            />
            <div className="w-full flex md:flex-row flex-col items-center justify-center gap-[24px]">
                {features.map((item, index) => (
                    <div className="w-fit px-[50px] rounded-[12px] bg-white/4 border border-grayborder py-[50px] flex flex-col gap-[35px] items-center justify-center"
                        key={index}
                    >
                        <img src={item.icon} alt={item.title} />
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <span className="text-light text-[20px]">{item.title}</span>
                            <p className="text-gray1 max-w-[310px] text-center">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Overlay />
        </div>
    )
}

export default Features