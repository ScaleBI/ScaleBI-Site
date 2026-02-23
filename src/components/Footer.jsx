import { Link } from "react-router-dom";
import WebsiteLogo from "../assets/logos/website-logo.svg";
import ArrowIcon from "../assets/icons/landing-page/arrow-icon.svg";
import DashBoardImage from "../assets/images/footer-db-image.png";
import LinkedlnIcon from "../assets/icons/landing-page/linkedln-icon.svg";
import TwitterIcon from "../assets/icons/landing-page/twitter-icon.svg";
import YoutubeIcon from "../assets/icons/landing-page/youtube-icon.svg";
import useScrollNavigation from "../hooks/useScrollNavigation";

export default function Footer() {

    const { goToSection } = useScrollNavigation();

    return (
        <section className="w-full overflow-hidden">

            {/* TOP CTA */}
            <div className="w-full bg-[#504DFF] overflow-hidden relative ">


                <div className="max-w-[1440px] mx-auto px-6 xl:px-[80px] py-[80px]">


                    <div className="flex flex-col xl:flex-row">

                        {/* LEFT CONTENT */}


                        <div className="w-full text-center xl:text-left flex flex-col gap-8 xl:whitespace-nowrap">

                            <h2 className="font-urbanist font-semibold text-[28px] sm:text-[32px] xl:text-[40px] text-white">
                                Let's Build BI That You Own
                            </h2>

                            <p className="font-urbanist font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-white">
                                Book a free consultation with our BI architects and <br />
                                start owning your data, not renting it.
                            </p>

                            <Link to="/contact" className="flex items-center gap-3 py-3 px-5 bg-gradient-to-b from-white to-[#E0E5FF] text-[#4F46E5] rounded-xl font-jetbrains text-sm font-medium w-fit mx-auto xl:mx-0 hover:opacity-90 transition cursor-pointer relative z-50">
                                <img src={ArrowIcon} alt="arrow" className="w-4 h-4" />
                                REQUEST CONSULTATION
                            </Link>

                            <p className="font-jetbrains text-[14px] sm:text-[16px] lg:text-[18px] uppercase text-white">
                                NO COMMITMENTS, JUST A 20-MINUTE STRATEGY SESSION WITH OUR BI EXPERTS.
                            </p>

                        </div>
                    </div>

                </div>



                {/* IMAGE OUTSIDE CONTAINER */}
                <div className="w-full lg:flex lg:justify-end xl:absolute xl:right-0 xl:top-[80px]">
                    <img
                        src={DashBoardImage}
                        alt="dashboard"
                        className="w-full pl-16 sm:pl-8 md:pl-20 lg:pl-20  xl:w-[600px]  object-contain"
                    />
                </div>




            </div>

            {/* BOTTOM DARK SECTION */}
            <div className="w-full bg-[#000419]">

                <div className="flex flex-col gap-[48px] sm:gap-[64px] max-w-[1440px] mx-auto px-6 lg:px-[80px] pt-[60px] sm:pt-[80px] pb-[40px]">
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                        {/* Top Row → Logo + LinkedIn (mobile) */}
                        <div className="flex justify-between items-center w-full xl:w-auto">
                            <img src={WebsiteLogo} alt="logo" className="h-8" />

                            {/* Hide in laptop main row (because laptop already separate position) */}
                            <div className="xl:hidden">
                                <a
                                    href="https://www.linkedin.com/company/108485945/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={LinkedlnIcon}
                                        alt="linkedin"
                                        className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Menu */}
                        <div className="bg-white py-2 px-6 rounded-xl w-full xl:w-auto">
                            <ul className="flex flex-col xl:flex-row items-center gap-4 py-1 px-4 font-jetbrains uppercase text-[#5C5F70] text-[14px] lg:text-[16px]">
                                <li className="hover:text-[#504DFF] cursor-pointer lg:px-4" onClick={() => goToSection('hero')}>Home</li>
                                <li className="hover:text-[#504DFF] cursor-pointer lg:px-4" onClick={() => goToSection('comparison')}>Why Us</li>
                                <li className="hover:text-[#504DFF] cursor-pointer lg:px-4">
                                    <Link to="/success-story-index">Success Stories</Link>
                                </li>
                                <li className="hover:text-[#504DFF] cursor-pointer lg:px-4">
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        {/* LinkedIn for Laptop */}
                        <div className="hidden xl:flex gap-6">
                            <a
                                href="https://www.linkedin.com/company/108485945/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={LinkedlnIcon}
                                    alt="linkedin"
                                    className="w-10 h-10 cursor-pointer"
                                />
                            </a>
                        </div>

                    </div>


                    <div className="w-full h-[2px] bg-[#2E3038] rounded-[8px]" />

                    <p className="text-center text-white font-urbanist font-medium text-[14px] sm:text-[16px] lg:text-[18px]">
                        &copy;  2025 ScaleBI is a trademark of its respective owners.
                    </p>

                </div>

            </div>

        </section >
    );
}
