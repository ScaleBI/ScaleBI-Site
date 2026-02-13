// Hero.jsx
import React from "react";
import heroDashboard from "../assets/images/hero-dashboard.png";
import LockIcon from "../assets/icons/lock-icon.svg";
import PriceIcon from "../assets/icons/price-icon.svg";
import TrophyIcon from "../assets/icons/trophy-icon.svg";
import ArrowIcon from "../assets/icons/arrow-icon.svg";
import StarIcon from "../assets/icons/star-icon.svg";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#E0E5FF] flex justify-center ">
      <div className="w-full max-w-[1440px] flex flex-col items-center py-12 sm:py-16 px-4 sm:px-8 lg:px-20">
        <div className="w-full max-w-[1280px] px-6 lg:px-[80px] flex flex-col items-center gap-[32px]">
          <div className="w-full max-w-[1120px] flex flex-col items-center text-center gap-[24px]">

            <h1 className="font-urbanist font-semibold text-[32px] sm:text-[48px] lg:text-[80px] leading-[40px] sm:leading-[56px] lg:leading-[88px] text-[#001066]">
              Take Control of Your <br /> <span className="text-[#504DFF]">Business Intelligence</span>
            </h1>
            <p className="max-w-[1000px] text-[#5C5F70] text-[15px] sm:text-[16px] lg:text-[20px] font-urbanist leading-[26px] sm:leading-[28px]">
              ScaleBI helps startups and emerging enterprise businesses build and
              manage Apache Superset–powered BI stacks within their own cloud,
              providing the flexibility of open source with the reliability of
              enterprise engineering.

            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center">

              {/* ITEM 1 */}
              <span className="flex items-center gap-2  font-jetbrains text-[#5C5F70] bg-gradient-to-b from-[#EFEFF0] to-[#FFFFFF] px-4 py-2 rounded-[12px] text-sm border border-gray-200">
                <img src={LockIcon} className="w-5 h-5" />
                NO SAAS LOCK-IN
              </span>

              {/* CONNECTOR */}
              <div className="relative flex items-center justify-center w-[28px] h-[28px] sm:h-[2px] sm:w-[28px]">

                {/* line (behind) */}
                <div className="absolute z-0 bg-[#EFEFF0] w-[2px] h-[28px] sm:w-[28px] sm:h-[2px]" />

                {/* ball (front) */}
                <div className="absolute z-10 w-[12px] h-[12px] bg-[#22C55E]/20 rounded-full flex items-center justify-center">
                  <div className="w-[8px] h-[8px] bg-[#22C55E] rounded-full" />
                </div>
              </div>

              {/* ITEM 2 */}
              <span className="flex items-center gap-2 font-jetbrains text-[#5C5F70] bg-gradient-to-b from-[#EFEFF0] to-[#FFFFFF] px-4 py-2 rounded-[12px] text-sm border border-gray-200">
                <img src={TrophyIcon} className="w-5 h-5" />
                NO PER-USER PRICING
              </span>

              {/* CONNECTOR */}
              <div className="relative flex items-center justify-center w-[28px] h-[28px] sm:h-[2px] sm:w-[28px]">

                {/* line (behind) */}
                <div className="absolute z-0 bg-[#EFEFF0] w-[2px] h-[28px] sm:w-[28px] sm:h-[2px]" />

                {/* ball (front) */}
                <div className="absolute z-10 w-[12px] h-[12px] bg-[#22C55E]/20 rounded-full flex items-center justify-center">
                  <div className="w-[8px] h-[8px] bg-[#22C55E] rounded-full" />
                </div>
              </div>

              {/* ITEM 3 */}
              <span className="flex items-center gap-2 font-jetbrains text-[#5C5F70] bg-gradient-to-b from-[#EFEFF0] to-[#FFFFFF] px-4 py-2 rounded-[12px] text-sm border border-gray-200">
                <img src={PriceIcon} className="w-5 h-5" />
                NO COMPROMISE
              </span>

            </div>



          </div>

          <button
            className="flex items-center gap-3 py-4 pr-[10px] pl-[16px] h-[52px] bg-[#504DFF] font-jetbrains text-white font-medium text-sm rounded-lg hover:bg-[#7F7CFF] transition-colors"
          >
            BOOK YOUR FREE BI CONSULTATION

            {/* Icon box */}
            <span className="w-[32px] h-[32px] bg-white rounded-lg flex items-center justify-center">
              <img
                src={ArrowIcon}
                alt="arrow"
                className="w-[17px] h-[17px]"
              />
            </span>
          </button>



          <p className="flex items-center gap-2 text-center font-jetbrains text-[#001066]">
            <img src={StarIcon} alt="Star-Icon" className="w-6 h-6" />
            YOUR DATA. YOUR CLOUD. YOUR BI POWERED BY SCALEBI.
            <img src={StarIcon} alt="Star-Icon" className="w-6 h-6" />
          </p>
        </div>



        <div className="mt-12 w-full flex justify-center">
          <div className=" w-full max-w-[1440px] bg-white rounded-[34px] overflow-visible sm:overflow-hidden"
          >
            <img
              src={heroDashboard}
              alt="ScaleBI Dashboard"
              className="w-full h-auto max-h-[280px] sm:max-h-none lg:h-auto object-contain sm:object-contain rounded-[8px] mx-auto"
            />
          </div>
        </div>




        <div className="mt-8 w-full flex justify-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-4 px-4 sm:px-8 lg:px-12 py-3 border border-[#EFEFF0] rounded-[12px] bg-[#EFEFF0] max-w-full text-center">
            <span className="font-jetbrains font-normal text-[11px] sm:text-[13px] lg:text-[14px] uppercase text-[#001066]">SEE HOW SCALEBI GIVES YOU FULL CONTROLL OVER YOUR DATA IN MINUTES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
