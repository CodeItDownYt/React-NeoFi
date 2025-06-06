import logo from "../assets/images/logo.png";
import arrow from "../assets/images/arrow.svg";
import { footerContent } from "../data";

const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-[80px] pt-[80px] pb-[40px] md:px-[120px] px-5'>
            <div className="w-full flex md:flex-row flex-col md:px-0 px-5 items-start justify-between md:gap-[90px] gap-10">
                <img src={logo} alt="logo" className="w-[130px]" />
                {footerContent.map((item, index) => (
                    <div className="flex flex-col gap-6" key={index}>
                        <span className="text-light text-[20px]">{item.title}</span>
                        <div className="flex flex-col gap-1">
                            {item.links.map((link, index) => (
                                <a href={link.path} key={index} className="text-sm text-gray1">{link.title}</a>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="flex flex-col gap-6">
                    <span className="text-light text-[20px] md:max-w-[250px]">Join our mailing list for updates</span>
                    <div className="flex md:flex-row flex-col md:items-center gap-5">
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="outline-none md:w-fit w-full bg-transparent border-b border-gray1 pb-3 placeholder:text-gray1 text-white"
                        />
                        <button className="flex items-center justify-center rounded-full bg-primary w-[40px] h-[40px] cursor-pointer">
                            <img src={arrow} alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center text-[12px] text-gray1">
                © 2025. All rights reserved.
            </div>
        </div>
    )
}

export default Footer