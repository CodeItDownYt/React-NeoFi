import logo from "../assets/images/logo.png";
import { navItems } from "../data";

const Navbar = () => {

    return (
        <div className='w-full flex items-center justify-between h-[80px] md:px-[120px] px-5'>
            <div className="w-full md:ml-0 ml-5">
                <img src={logo} alt="logo" className="cursor-pointer" />
            </div>
            <div className="hidden w-full lg:flex items-center justify-center gap-[40px]">
                {navItems.map((item, index) => (
                    <a href={item.path} key={index} className="text-gray1 hover:text-light font-medium">{item.title}</a>
                ))}
            </div>
            <div className="w-full flex items-center justify-end md:gap-[40px] gap-5">
                <a href="#" className="text-white">Log in</a>
                <button className="text-black bg-primary w-[141px] h-[40px] rounded-[40px] text-center cursor-pointer">Try For Free</button>
            </div>
        </div>
    )
}

export default Navbar