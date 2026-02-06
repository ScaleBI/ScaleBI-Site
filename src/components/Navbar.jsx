//Navbar.jsx

import NavbarLogo from '../assets/logos/scaleBI_logo.svg'
import ContactIcon from '../assets/icons/contact-icon.svg';



export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#EFEFF0] bg-white">
            <div className="max-w-[1440px] mx-auto h-[70px] flex items-center justify-between px-6">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src={NavbarLogo}
                        alt="ScaleBI"
                        className="h-[40px] w-[121px]"
                    />
                    {/* <span className="font-bold text-lg text-gray-800">ScaleBI</span> */}
                </div>

                {/* Menu */}
                <ul className="hidden md:flex items-center gap-8 font-jetbrains font-medium text-[16px] uppercase text-[#5C5F70]">
                    <li className="hover:text-[#504DFF] cursor-pointer">Home</li>
                    <li className="hover:text-[#504DFF] cursor-pointer">Why Us</li>
                    <li className="hover:text-[#504DFF] cursor-pointer">Success Stories</li>
                </ul>


                {/* Contact Button */}
                <button className="flex items-center justify-center gap-2 font-jetbrains bg-[#504DFF] font-medium text-[16px] text-white w-[150px] h-[46px] px-4 py-2 rounded-[12px] text-sm hover:bg-[#3d3bdb] transition">
                    Contact Us
                    <img src={ContactIcon} alt="Contact Icon" className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}
