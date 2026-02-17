//Navbar.jsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavbarLogo from '../assets/logos/scaleBI_logo.svg'
import ContactIcon from '../assets/icons/contact-icon.svg';
import { Menu, X } from "lucide-react";



export default function Navbar() {

  const [open, setOpen] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };


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
              onClick={() => {
                const el = document.getElementById('hero');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-4 font-jetbrains font-medium text-[16px] uppercase text-[#5C5F70]">
            <li className="hover:text-[#504DFF] cursor-pointer px-4" onClick={() => {
              const el = document.getElementById('hero');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>Home</li>
            <li className="hover:text-[#504DFF] cursor-pointer px-4" onClick={() => {
              const el = document.getElementById('comparison');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>Why Us</li>
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
            Contact Us
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
                const el = document.getElementById('hero');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>Home</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-4">
              <span className="cursor-pointer" onClick={() => {
                setOpen(false);
                const el = document.getElementById('comparison');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>Why Us</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-4">
              <Link to="/case-study-index" className="cursor-pointer">
                Success Stories
              </Link>
            </div>
          </div>

          {/* Contact Button*/}
          <div className="mt-10 flex justify-center">
            <button className="w-[180px] bg-[#504DFF] text-white py-2 rounded-full font-medium h-[40px] cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      )
      }

    </>
  );
}
