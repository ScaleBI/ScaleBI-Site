//Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarLogo from '../assets/logos/scaleBI_logo.svg'
import ContactIcon from '../assets/icons/landing-page/contact-icon.svg';
import { Menu, X } from "lucide-react";
import useScrollNavigation from "../hooks/useScrollNavigation";




export default function Navbar() {

  const [open, setOpen] = useState(false)

  const { goToSection } = useScrollNavigation();

  return (
    <>
      <nav className="w-full border-b border-[#EFEFF0] bg-white fixed top-0 left-0 z-50">
        <div className="max-w-[1440px] mx-auto h-[70px] flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20">

          {/* Logo */}
          <div>
            <img
              src={NavbarLogo}
              alt="ScaleBI"
              className="h-[40px] w-[121px] cursor-pointer"
              onClick={() => goToSection('hero')}
            />

          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-4 font-jetbrains font-medium text-[16px] uppercase text-[#5C5F70]">
            <li className="hover:text-[#504DFF] cursor-pointer px-4" onClick={() =>goToSection('hero')}>Home</li>
            <li className="hover:text-[#504DFF] cursor-pointer px-4" onClick={() => goToSection('comparison')}>Why Us</li>
            <li className="px-4">
              <Link
                to="/case-study-index"
                className="hover:text-[#504DFF] cursor-pointer"
              >
                Success Stories
              </Link>
            </li>

          </ul>


          {/* Contact Button */}
          <button className="hidden md:flex items-center justify-center gap-2 font-jetbrains bg-[#504DFF] font-medium text-[16px] text-white min-w-[150px] min-h-[46px] px-4 py-2 rounded-[12px] text-sm hover:bg-[#3d3bdb] transition cursor-pointer">
            <Link to="/contact">
            CONTACT US
            </Link>
            <img src={ContactIcon} alt="Contact Icon" className="w-6 h-6 " />
          </button>

          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>


      {/* Mobile Screen*/}

      {open && (
        <div className="fixed inset-0 bg-white z-[999]">

          {/* Tob bar */}
          <div className="flex items-center justify-between h-[70px] px-6 border-b border-gray-200">
            <img
              src={NavbarLogo}
              alt="ScaleBI"
              className="h-[40px]"
              onClick={()=> goToSection('hero')}
            />

            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>

          </div>

          {/* Menu items */}

          <div className="px-6 pt-6 font-jetbrains text-[14px] text-[#5C5F70] flex-1">
            <div className="flex justify-between items-center border-b border-gray-200 py-4">
              <span className="cursor-pointer" onClick={() => {
                setOpen(false);
                goToSection('hero')
              }}>Home</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-4">
              <span className="cursor-pointer" onClick={() => {
                setOpen(false);
                goToSection('comparison')
              }}>Why Us</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-4">
              <Link to="/case-study-index" className="cursor-pointer" onClick={() => setOpen(false)}>
                Success Stories
              </Link>
            </div>
          </div>

          {/* Contact Button*/}
          <div className="mt-10 flex justify-center">
            <Link  to="/contact" onClick={() => setOpen(false)} className="w-[180px] bg-[#504DFF] text-white py-2 rounded-full font-medium h-[40px] cursor-pointer flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      )
      }

    </>
  );
}
