import TickIcon from '../assets/icons/landing-page/tick-icon.svg';
import ScaleBIIcon from '../assets/icons/landing-page/scaleBI-icon.svg';
import DollerIcon from '../assets/icons/landing-page/doller-icon.svg';
import DisplyIcon from '../assets/icons/landing-page/disply-icon.svg';
import ControlIcon from '../assets/icons/landing-page/control-icon.svg';
import MenuWIcon from '../assets/icons/landing-page/menu-w-icon.svg';
import HealthIcon from '../assets/icons/landing-page/health-icon.svg';
import ExclamationMarkIcon from '../assets/icons/landing-page/exclamation-mark-icon.svg'



export default function Comparison() {

    return (
        <section className="w-full bg-[#504DFF] flex justify-center" id="comparison">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-[64px] px-4 py-12 lg:p-[80px]">
                <div className=" max-w-[1280px] flex flex-col gap-[24px]  items-center text-center">
                    <div className="flex gap-[8px] bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] border border-[#EFEFF0] rounded-[16px] px-[12px] py-[8px]">
                        <img src={TickIcon} alt="tick-icon" />
                        <span className="text-[#5C5F70] font-jetbrains font-normal text-[14px] lg:text-[16px]">COMPARISON</span>
                    </div>

                    <h1 className="text-[#FFFFFF] text-[26px] sm:text-[32px]  lg:text-[40px] font-urbanist font-semibold">Why Data Leaders Switch to ScaleBI</h1>

                    <p className="font-urbanist font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-[#FFFFFF]">We combine the flexibility of open-source with the reliability of enterprise support, giving you freedom <br /> without sacrificing performance or security.</p>

                </div>

                <div className="w-full bg-[#FAFBFF] rounded-[32px] pt-[24px] pb-[16px] px-4 border border-[#E0E5FF] ">

                    <h2 className="font-urbanist text-center text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-[#001066] mb-[32px]">
                        Here’s how ScaleBI transforms BI from a cost center into a strategic asset
                    </h2>

                    <div className="flex  flex-col sm:flex-row gap-[16px]  border border-4 border-[#E0E5FF] p-[16px] rounded-[24px] bg-[#FFFFFF]">

                        {/* ICON COLUMN (ONLY 5 ROWS — NOT HEADER) */}
                        <div className="hidden sm:block w-[80px] lg:w-[112px] bg-gradient-to-b from-[#5B5BFF] to-[#4F46FF] rounded-[16px] overflow-hidden mt-[85px] lg:mt-[117px]">

                            {[DollerIcon, DisplyIcon, ControlIcon, MenuWIcon, HealthIcon].map((icon, index) => (
                                <div
                                    key={index}
                                    className="h-[80px] lg:h-[93px] flex items-center justify-center border-b last:border-b-0 border-white"
                                >
                                    <img
                                        src={icon}
                                        alt="icon"
                                        className="w-[20px] lg:w-[28px]"
                                    />
                                </div>
                            ))}


                        </div>

                        {/* LEFT SIDE (ICON + LEGACY) */}
                        {/* <div className="flex"> */}



                            {/* LEGACY CARD */}
                            <div className=" w-full sm:w-[420px] lg:w-[540px] bg-white  rounded-r-[20px] overflow-hidden flex flex-col shadow-[8px_0_30px_rgba(13,13,43,0.06)] border border-white">

                           

                                {/* HEADER */}
                                <div className="h-[90px] lg:h-[117px] bg-white flex items-center justify-center border-[#FFFFFF] rounded">
                                  
                                    <span className="flex gap-[8px] bg-[#FFECE7] text-[14px] sm:text-[16px] lg:text-[18px] text-[#EB6347] px-[20px] lg:px-[32px] py-[8px] lg:py-[12px] rounded-full text-sm  font-urbanist font-medium">
                                          <img src={ExclamationMarkIcon} alt="exclamation-mark-icon" />
                                        Legacy BI Pain
                                    </span>
                                </div>

                                {/* ROWS (WHITE / GREY ALTERNATING) */}
                                {[
                                    "Expensive per-user licenses",
                                    "Vendor-hosted SaaS",
                                    "Limited control or extensibility",
                                    "Locked ecosystems",
                                    "Slow support or rigid SLAs"
                                ].map((t, index) => (
                                    <div
                                        key={t}
                                        className={` font-urbanist font-medium h-[75px] lg:h-[93px] flex py-[32px] px-[20px] lg:px-[40px] items-center justify-center border-b last:border-b-0 border-[#FFFFFF] text-[13px] sm:text-[14px] lg:text-[18px] text-[#5C5F70] ${index % 2 === 0 ? "bg-[#F9FAFA]" : "bg-white"}`}
                                    >
                                        {t}
                                    </div>
                                ))}

                            </div>

                        {/* </div> */}

                        {/* SOLUTION CARD */}
                        <div className=" w-full sm:w-[420px] lg:w-[540px] rounded-[20px] overflow-hidden flex flex-col bg-[#DFF4ED] shadow-[8px_0_30px_rgba(13,13,43,0.06)] border border-white ">

                            {/* HEADER */}
                            <div className="h-[90px] lg:h-[117px] flex items-center justify-center border-b border-white/40">
                                <span className=" flex gap-[8px] bg-[#22C55E] text-white px-[20px] lg:px-[32px] py-[8px] lg:py-[12px] rounded-full text-sm  font-urbanist font-medium text-[14px] sm:text-[16px] lg:text-[18px]">
                                    <img src={ScaleBIIcon} alt="scaleBI-icom" />
                                    How ScaleBI Solves It
                                </span>
                            </div>

                            {/* ROWS */}
                            {[
                                "One-time setup + optional flat monthly support + unlimited users",
                                "Deployed inside your own infrastructure",
                                "100% open-source + customizable stack",
                                "Integrates with any warehouse or data tool",
                                "Dedicated, 24x7 Engineering-Led Managed Service."
                            ].map((t) => (
                                <div
                                    key={t}
                                    className="h-[75px] lg:h-[93px] flex items-center justify-center border-b last:border-b-0 border-white text-[13px] sm:text-[14px] lg:text-[18px] font-urbanist font-medium text-[#000419] px-[20px] lg:px-0"
                                >
                                    {t}
                                </div>
                            ))}          

                        </div>

                    </div>
                </div>



            </div>

        </section>
    );
}