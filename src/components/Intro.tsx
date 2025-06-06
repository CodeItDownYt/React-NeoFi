import imageLeft from "../assets/images/imgLeft.svg";
import { headerContent, introItems } from "../data";
import Overlay from "./Overlay";
import SectionHeader from "./SectionHeader";

const Intro = () => {
    return (
        <div className="w-full flex flex-col gap-[80px] relative py-[60px] md:px-[120px]">
            <SectionHeader
                nowrap
                tag={headerContent["Intro"].tag}
                title={headerContent["Intro"].title}
                description={headerContent["Intro"].description}
            />
            <div className="w-full flex md:flex-row flex-col items-center justify-between">
                <div className="md:w-[40%] w-[400px]">
                    <img src={imageLeft} alt="imageLeft" className="w-full" />
                </div>
                <div className="flex md:w-[45%] w-[80%] flex-col gap-[40px]">
                    {introItems.map((item, index) => (
                        <div className="w-full bg-gray4 rounded-[20px] px-5 py-[30px] flex items-start gap-[24px] border border-grayborder" key={index}>
                            <img src={item.icon} alt={item.title} />
                            <div className="flex flex-col gap-[8px]">
                                <div className="text-light text-[20px]">{item.title}</div>
                                <p className="text-gray1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Overlay />

        </div>
    )
}

export default Intro