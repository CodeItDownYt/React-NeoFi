import imageRight from "../assets/images/imgRight.svg";

const Header = () => {
    return (
        <div className="w-full flex md:flex-row flex-col items-center justify-between md:px-[120px] px-5 md:h-[calc(100vh-80px)] relative md:pb-0 pb-20">
            <div className="flex flex-col gap-6 md:ml-0 ml-5 md:mt-0 mt-5">
                <div className="flex items-center justify-center gap-2 border border-grayborder rounded-[24px] w-fit px-4 h-[37px]">
                    <span className="bg-primary w-[9px] h-[9px] rounded-full" />
                    <span className="text-primary text-sm">Decentralised</span>
                </div>
                <div className="text-light font-bold md:text-[84px] text-[45px] max-w-[661px] md:leading-[80px]">
                    Revolutionizing Web3 Finance
                </div>
                <p className="text-gray1 text-[20px] max-w-[600px]">
                    Secure, scalable, and decentralized solutions for your digital assets—experience the future of financial freedom.
                </p>
                <div className="flex items-center gap-5">
                    <button className="bg-primary text-black text-center cursor-pointer rounded-[40px] w-[150px] h-[50px]">Get Started</button>
                    <button className="text-light border border-grayborder text-center cursor-pointer rounded-[40px] w-[190px] h-[50px]">Watch video</button>
                </div>
            </div>
            <img src={imageRight} alt="imageRight" className="mt-20 smd:mt-0 md:w-auto w-[400px]" />
            <div className="absolute top-1/2 left-[-200px] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-overlay/10 blur-3xl" />
        </div>
    )
}

export default Header