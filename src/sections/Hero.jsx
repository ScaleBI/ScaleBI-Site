// Hero.jsx
import React from "react";
import heroDashboard from "../assets/images/hero-dashboard.png";
import LockIcon from "../assets/icons/landing-page/lock-icon.svg";
import PriceIcon from "../assets/icons/landing-page/price-icon.svg";
import TrophyIcon from "../assets/icons/landing-page/trophy-icon.svg";
import ArrowIcon from "../assets/icons/landing-page/arrow-icon.svg";
import StarIcon from "../assets/icons/landing-page/star-icon.svg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#E0E5FF] flex justify-center" id="hero">
      <div className="w-full max-w-[1440px] flex flex-col items-center py-12 sm:py-16 px-4 sm:px-8 lg:px-20 ">
        <div className="w-full max-w-[1280px] px-6 lg:px-[80px] flex flex-col items-center gap-[32px] lg:pt-[80px] pt-[50px]">
          <div className="w-full max-w-[1120px] flex flex-col items-center text-center gap-[24px]">

            <h1 className="font-urbanist font-semibold text-[32px] sm:text-[48px]  leading-[40px] sm:leading-[56px] text-[#001066] md:text-[64px] md:leading-[72px] xl:text-[80px] xl:leading-[88px]">
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
              <span className="flex items-center gap-2  font-jetbrains text-[#5C5F70] bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] px-4 py-2 rounded-[12px] text-sm border border-gray-200">
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
              <span className="flex items-center gap-2 font-jetbrains text-[#5C5F70] bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] px-4 py-2 rounded-[12px] text-sm border border-gray-200">
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
              <span className="flex items-center gap-2 font-jetbrains text-[#5C5F70] bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] px-4 py-2 rounded-[12px] text-sm border border-gray-200">
                <img src={PriceIcon} className="w-5 h-5" />
                NO COMPROMISE
              </span>

            </div>



          </div>

          <Link
            to="/contact"
            className="flex items-center gap-2 sm:gap-3 py-2 sm:py-4  pr-3 sm:pr-[10px] pl-3 sm:pl-[16px] h-[40px] sm:h-[52px] 
             bg-[#504DFF] font-jetbrains text-white font-medium text-xs sm:text-sm 
             rounded-md hover:bg-[#3d3bdb] transition-colors cursor-pointer"
          >
            BOOK YOUR FREE BI CONSULTATION

            {/* Icon box */}
            <span className="2-[26px] h-[26px] sm:w-[32px] sm:h-[32px] bg-white rounded-md flex items-center justify-center">
              <img
                src={ArrowIcon}
                alt="arrow"
                className="w-[17px] h-[14px] sm:w-[17px] sm:h-[17px]"
              />
            </span>
          </Link>



          <p className="flex items-center gap-2 text-center font-jetbrains text-[#001066]">
            <img src={StarIcon} alt="Star-Icon" className="w-6 h-6" />
            YOUR DATA. YOUR CLOUD. YOUR BI POWERED BY SCALEBI.
            <img src={StarIcon} alt="Star-Icon" className="w-6 h-6" />
          </p>
        </div>



        <div className="mt-12 w-full flex justify-center">
          <div className=" w-full max-w-[1440px] rounded-[34px] overflow-visible sm:overflow-hidden"
          >
            <img
              src={heroDashboard}
              alt="ScaleBI Dashboard"
              className="w-full h-auto max-h-[280px] sm:max-h-none lg:h-auto object-contain sm:object-contain rounded-[8px] mx-auto"
            />
          </div>
        </div>




        <div className="mt-8 w-full flex justify-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-4 px-4 sm:px-8 lg:px-12 py-3 border border-[#EFEFF0] rounded-[12px] bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] max-w-full text-center">
            <span className="font-jetbrains font-normal text-[12px] sm:text-[15px] lg:text-[18px] uppercase text-[#001066]">SEE HOW SCALEBI GIVES YOU FULL CONTROLL OVER YOUR DATA IN MINUTES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
