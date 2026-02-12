import StudyIcon from '../assets/icons/study-icon.svg';
import FileIcon from '../assets/icons/file-icon.svg';
import ToggleIcon from '../assets/icons/toggle-icon.svg';
import SwitchIcon from '../assets/icons/switch-icon.svg';

export default function CaseStudy() {
    return (
        <section className="bg-[#FFFFFF] flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-center py-12 px-4 sm:px-8 lg:py-20 lg:px-20 lg:gap-[64px]">

                <div className="w-full flex flex-col items-center gap-5 sm:gap-6 text-center">
                    <div className="bg-gradient-to-b from-[#EFEFF0] to-[#FFFFFF] border border-[#EFEFF0] flex items-center gap-2 rounded-[12px] px-4 py-2">
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

                {/* Main Card */}
                <div className="flex flex-col lg:flex-row bg-[#FAFAFA] p-[16px] gap-[16px] rounded-[16px]">

                    {/* Left Content */}
                    <div className="flex flex-col gap-[32px] p-[16px] w-full">
                        <h3 className="font-urbanist font-medium text-[20px] text-[#001066]">
                            Leading HR Tech Company Cut 80% of Manual Reporting Effort.
                        </h3>

                        <p className="font-urbanist font-medium text-[18px] text-[#5C5F70]">
                            Replaced spreadsheets with a fully managed Apache Superset stack-automating 70+ HR reports in under 3 months.
                        </p>

                        <button
                            className="flex items-center gap-[12px] px-4 py-2 sm:px-6 sm:py-3 border border-[#504DFF] text-[#4F46E5] bg-gradient-to-b from-[#FFFFFF] to-[#E0E5FF] rounded-[12px] font-medium text-xs sm:text-sm hover:bg-gray-50 transition w-fit"
                        >
                            <img src={FileIcon} alt="file-icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            READ THE FULL STORY
                        </button>

                        <img src={ToggleIcon} alt="toggle-icon" className="w-[64px] h-[20px]" />
                    </div>

                    {/* Right Testimonial */}
                    <div className="flex flex-col items-center bg-[#FFFFFF] border border-[#E0E5FF] lg:gap-[40px] p-[32px] rounded-[16px] text-center w-full">
                        <img src={SwitchIcon} alt="switch-icon" className="h-[48px] w-[55px] mx-auto" />

                        <p className="font-urbanist font-medium text-[20px] text-[#5C5F70]">
                            "With ScaleBI, we finally own our analytics solution and still get enterprise support."
                        </p>

                        <p className="text-[#1FDA8C] font-urbanist font-semibold text-[16px]">
                            Director. HR Tech Company
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
