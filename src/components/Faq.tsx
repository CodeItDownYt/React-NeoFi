import { useState } from "react";
import { faqItems, headerContent } from "../data"
import Overlay from "./Overlay";
import SectionHeader from "./SectionHeader";

const Faq = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    return (
        <div className="w-full flex flex-col gap-[80px] relative py-[60px] md:px-[120px]">
            <SectionHeader
                tag={headerContent["FAQ"].tag}
                title={headerContent["FAQ"].title}
                description={headerContent["FAQ"].description}
            />
            <div className="w-full flex flex-col items-center justify-center gap-[30px]">
                {faqItems.map((item, index) => {
                    const isOpen = openIndexes.includes(index);
                    return (
                        <div key={index} className="w-full md:max-w-[800px] max-w-[85%] z-[1]">
                            <div
                                onClick={() => toggleItem(index)}
                                className="w-full flex items-center justify-between border border-gray3 px-5 h-[52px] cursor-pointer"
                            >
                                <span className="text-light">{item.question}</span>
                                <span className="text-light text-2xl">{isOpen ? "-" : "+"}</span>
                            </div>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] py-4 px-5' : 'grid-rows-[0fr] px-5'
                                    }`}
                            >
                                <div className="overflow-hidden text-gray1 text-sm">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Overlay />
        </div>
    )
}

export default Faq