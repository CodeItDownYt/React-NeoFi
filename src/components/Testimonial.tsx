import { headerContent } from "../data"
import MarqueeRow from "./MarqueeRow"
import Overlay from "./Overlay"
import SectionHeader from "./SectionHeader"

const Testimonial = () => {
    return (
        <div className="w-full flex flex-col gap-[80px] relative py-[60px] bg-gray4">
            <SectionHeader
                tag={headerContent["Testimonial"].tag}
                title={headerContent["Testimonial"].title}
                description={headerContent["Testimonial"].description}
            />
            <div className="w-full flex flex-col gap-5 overflow-hidden">
                <MarqueeRow prefix="marquee1" />
                <MarqueeRow offset={200} prefix="rev" />
            </div>

            <Overlay />
        </div>
    )
}

export default Testimonial