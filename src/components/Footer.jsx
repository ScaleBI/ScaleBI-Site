import WebsiteLogo from "../assets/logos/website-logo.svg";
import ArrowIcon from "../assets/icons/arrow-icon.svg";
import DashBoardImage from "../assets/images/footer-db-image.png";
import LinkedlnIcon from "../assets/icons/linkedln-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import YoutubeIcon from "../assets/icons/youtube-icon.svg";

export default function Footer() {
    return (
        <section className="w-full overflow-hidden">

            {/* TOP CTA */}
            <div className="w-full bg-gradient-to-r from-[#504DFF] to-[#6C63FF] relative overflow-hidden">

                <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] pt-[80px] sm:pt-[100px] pb-[100px] sm:pb-[120px] relative">

                    <div className="flex flex-col lg:flex-row items-center justify-between">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col gap-8 text-center lg:text-left">
                            <h2 className="font-urbanist font-semibold text-[28px] sm:text-[32px] lg:text-[40px] text-white">
                                Let's Build BI That You Own
                            </h2>

                            <p className="font-urbanist font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-white">
                                Book a free consultation with our BI architects and
                                start owning your data, not renting it.
                            </p>

                            <button className="flex items-center gap-3 py-3 px-5 bg-gradient-to-b from-white to-[#E0E5FF] text-[#4F46E5] rounded-xl font-jetbrains text-sm font-medium w-fit mx-auto lg:mx-0 hover:opacity-90 transition">
                                <img src={ArrowIcon} alt="arrow" className="w-4 h-4" />
                                REQUEST CONSULTATION
                            </button>

                            <p className="font-jetbrains text-[14px] sm:text-[16px] lg:text-[18px] uppercase text-white">
                                NO COMMITMENTS, JUST A 20-MINUTE STRATEGY SESSION WITH OUR BI EXPERTS.
                            </p>
                        </div>

                    </div>

                </div>

                {/* IMAGE OUTSIDE CONTAINER */}
                <img
                    src={DashBoardImage}
                    alt="dashboard"
                    className="hidden lg:block absolute right-0 top-[80px] w-[560px] h-[455px] "
                />

            </div>

            {/* BOTTOM DARK SECTION */}
            <div className="w-full bg-[#000419]">

                <div className="flex flex-col gap-[48px] sm:gap-[64px] max-w-[1440px] mx-auto px-6 lg:px-[80px] pt-[60px] sm:pt-[80px] pb-[40px]">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        <img src={WebsiteLogo} alt="logo" className="h-8" />

                        <div className="bg-white py-2 px-6 rounded-xl hidden md:block">
                            <ul className="flex items-center gap-[16px] py-1 px-4 font-jetbrains uppercase text-[#5C5F70] text-[14px] lg:text-[16px]">
                                <li className="px-4">Home</li>
                                <li className="px-4">Why Us</li>
                                <li className="px-4">Success Stories</li>
                                <li className="px-4">Contact Us</li>
                            </ul>
                        </div>

                        <div className="flex gap-6">
                            <img src={LinkedlnIcon} alt="linkedin" className="w-8 h-8 sm:w-10 sm:h-10" />
                            <img src={TwitterIcon} alt="twitter" className="w-8 h-8 sm:w-10 sm:h-10" />
                            <img src={YoutubeIcon} alt="youtube" className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>

                    </div>

                    <div className="w-full h-[2px] bg-[#2E3038] rounded-[8px]"></div>

                    <p className="text-center text-white font-urbanist font-medium text-[14px] sm:text-[16px] lg:text-[18px]">
                        &copy;  2025 ScaleBI is a trademark of its respective owners.
                    </p>

                </div>

            </div>

        </section>
    );
}
