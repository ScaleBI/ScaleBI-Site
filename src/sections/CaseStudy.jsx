import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { Key } from 'lucide-react';

import StudyIcon from '../assets/icons/landing-page/study-icon.svg';
import FileIcon from '../assets/icons/landing-page/file-icon.svg';
import SwitchIcon from '../assets/icons/landing-page/switch-icon.svg';

export default function CaseStudy() {

    const navigate = useNavigate();



    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const isResettingRef = useRef(false);


    const caseStudies = [
        {
            slug: "hr-tech-analytics",
            title: "Leading HR Tech Company Cut 80% of Manual Reporting Effort.",
            description: "Replaced spreadsheets with a fully managed Apache Superset stack - automating 70+ HR reports in under 3 months.",
            testimonial: '"With ScaleBI, we finally own our analytics solution and still get enterprise support."',
            author: "Director. HR Tech Company"
        },
        {
           
            title: "How a Global Manufacturer Unified 12 Data Systems, Boosted Efficiency by 25%.",
            description:
                "From scattered reports to a single dashboard - ScaleBI unified 12 systems seamlessly.",
            testimonial:
                '"ScaleBI helped us consolidate complex data environments into one powerful analytics platform."',
            author: "VP of Operations. Global Manufacturing Company"
        }
    ]



    // Always Right → Left only
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev =>
                prev >= caseStudies.length ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [caseStudies.length]);


    useEffect(() => {


        if (activeIndex === caseStudies.length && !isResettingRef.current) {

            isResettingRef.current = true;

            setTimeout(() => {

                setIsTransitioning(false);
                setActiveIndex(0);

                // setTimeout(() => {
                //     setIsTransitioning(true);
                // }, 50);

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setIsTransitioning(true);
                        isResettingRef.current = false;
                    });
                });

            }, 700);

        }

    }, [activeIndex, caseStudies.length]);


    return (
        <section className="bg-[#FFFFFF] flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-center py-12 px-4 sm:px-8 lg:py-20 lg:px-20 lg:gap-[64px]">

                <div className="w-full flex flex-col items-center gap-5 sm:gap-6 text-center">
                    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] border border-[#EFEFF0] flex items-center gap-2 rounded-[12px] px-4 py-2">
                        <img src={StudyIcon} alt="study-icon" className="h-6 w-6" />
                        <span className="font-jetbrains font-normal text-[16px] uppercase text-[#5C5F70]">
                            CASE STUDY
                        </span>
                    </div>

                    <h2 className="font-urbanist font-semibold text-[20px] sm:text-[40px] text-[#001066]">
                        Forward-thinking businesses <br />
                        <span className="text-[#504DFF]">choose ScaleBI as their BI partner</span>
                    </h2>
                </div>

                < div className="relative overflow-hidden w-full" >
                    <div
                        className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }
                        }
                    >

                        {
                            [...caseStudies, caseStudies[0]].map((item, index) => (


                                < div key={index} className="min-w-full flex flex-col lg:flex-row bg-[#FAFAFA] p-[16px] gap-[16px] rounded-[16px]" >

                                    {/* Left Content */}
                                    <div className="flex flex-col gap-[32px] p-[16px] w-full" >
                                        <h3 className="font-urbanist font-medium text-[20px] text-[#001066]">
                                            {item.title}
                                        </h3>

                                        <p className="font-urbanist font-medium text-[18px] text-[#5C5F70]">
                                            {item.description}
                                        </p>

                                        <button
                                            onClick={() => {
                                                if (item.slug) {
                                                    navigate(`/${item.slug}`);

                                                }

                                            }}
                                            className="flex items-center gap-[12px] px-4 py-2 sm:px-6 sm:py-3 border border-[#504DFF] text-[#4F46E5] bg-gradient-to-b from-[#FFFFFF] to-[#E0E5FF] rounded-[12px] font-medium text-xs sm:text-sm hover:from-[#EEF2FF] hover:to-[#C7D2FE] transition w-fit cursor-pointer"
                                        >
                                            <img src={FileIcon} alt="file-icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                                            READ THE FULL STORY
                                        </button>


                                        {/* Toggle */}

                                        <div
                                            className="hidden lg:flex relative w-[55px] h-[20px] rounded-[16px] border-1 border-[#504DFF] bg-[#F3F4FF] flex items-center"
                                            onClick={() =>
                                                setActiveIndex((prev) =>
                                                    prev === caseStudies.length - 1 ? 0 : prev + 1
                                                )
                                            }
                                        >
                                            {/* Active pill */}
                                            <div
                                                className={`absolute h-[12px] w-[24px] rounded-[8px] bg-gradient-to-r from-[#504DFF] to-[#6C63FF] transition-transform duration-500 ${activeIndex % caseStudies.length === 0
                                                    ? "translate-x-[5px]"
                                                    : "translate-x-[24px]"
                                                    }`}
                                            />

                                            {/* Small dot */}
                                            <div
                                                className={`absolute w-[12px] h-[12px] rounded-full bg-[#C5C8FF] transition-transform duration-500 ${activeIndex % caseStudies.length === 0
                                                    ? "translate-x-[34px]"
                                                    : "translate-x-[5px]"
                                                    }`}
                                            />
                                        </div>



                                    </div>

                                    {/* Right Testimonial */}
                                    <div className="flex flex-col items-center bg-[#FFFFFF] border border-[#E0E5FF] lg:gap-[40px] p-[32px] rounded-[16px] text-center w-full">
                                        <img src={SwitchIcon} alt="switch-icon" className="h-[48px] w-[55px] mx-auto" />

                                        <p className="font-urbanist font-medium text-[20px] text-[#5C5F70]">
                                            {item.testimonial}
                                        </p>

                                        <p className="text-[#1FDA8C] font-urbanist font-semibold text-[16px]">
                                            {item.author}
                                        </p>
                                    </div>


                                    {/* toggle  */}
                                    <div
                                        className=" flex lg:hidden relative w-[55px] h-[20px] rounded-[16px] border-1 border-[#504DFF] bg-[#F3F4FF] flex items-center"
                                        onClick={() =>
                                            setActiveIndex((prev) =>
                                                prev === caseStudies.length - 1 ? 0 : prev + 1
                                            )
                                        }
                                    >
                                        {/* Active pill */}
                                        <div
                                            className={`absolute h-[12px] w-[24px] rounded-[8px] bg-gradient-to-r from-[#504DFF] to-[#6C63FF] transition-transform duration-500 ${activeIndex % caseStudies.length === 0
                                                ? "translate-x-[5px]"
                                                : "translate-x-[24px]"
                                                }`}
                                        />

                                        {/* Small dot */}
                                        <div
                                            className={`absolute w-[12px] h-[12px] rounded-full bg-[#C5C8FF] transition-transform duration-500 ${activeIndex % caseStudies.length === 0
                                                ? "translate-x-[34px]"
                                                : "translate-x-[5px]"
                                                }`}
                                        />
                                    </div>


                                </div>
                            ))}
                    </div>

                </div >

            </div >
        </section >
    );
}
