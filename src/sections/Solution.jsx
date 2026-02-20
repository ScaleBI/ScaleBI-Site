import SolutionIcon from '../assets/icons/landing-page/solution-icon.svg';
import OwnItIcon from '../assets/icons/landing-page/ownIt-icon.svg';
import RunItIcon from '../assets/icons/landing-page/runIt-icon.svg';
import ScaleItIcon from '../assets/icons/landing-page/scaleIt-icon.svg';
import ArrowIcon from '../assets/icons/landing-page/arrow-icon.svg';
import { Link } from "react-router-dom";

export default function Solution() {

    const solutions = [
        {
            icon: OwnItIcon,
            title: "Own It",
            describtion: "Deployed securely in your VPC or on-prem infrastructure.  Deployed securely in your VPC or on-prem infrastructure."
        },
        {
            icon: RunItIcon,
            title: "Run It",
            describtion: "Fully managed, monitored, and optimized by SRE experts. Fully managed, monitored, and optimized by SRE experts."
        },
        {
            icon: ScaleItIcon,
            title: "Scale It",
            describtion: "Cloud-ready, Kubernetes-packaged, and audit-proof.  Cloud-ready, kubernetes-packaged, and audit-proof."
        }
    ];

    return (
        <section className="w-full bg-[#FFFFFF] flex justify-center">
            <div className=" w-full max-w-[1440px] flex flex-col items-center p-[40px] sm:p-[80px] gap-[32px] sm:gap-[64px] px-[16px] ">

                {/* Header */}
                <div className="max-w-[1280px] flex flex-col items-center gap-[16px] sm:gap-[24px]">
                    <div className="inline-flex gap-[8px] px-[12px] py-[6px] sm:py-[8px] bg-gradient-to-b from-[#EFEFF0] to-[#FFFFFF] border border-[#EFEFF0] rounded-[12px] text-sm sm:text-base font-jetbrains font-normal text-[#5C5F70]">
                        <img src={SolutionIcon} alt="solution-icon" />
                        THE SOLUTION
                    </div>

                    <h1 className="font-urbanist font-semibold text-[25px] sm:text-[35px] xl:text-[40px] text-center text-[#001066]">
                        We Make <span className="text-[#504DFF]">Open Source BI</span><br />
                        Enterprise Ready — Built for You, Managed by Us
                    </h1>

                    <p className="font-urbanist text-[#5C5F70] font-medium text-[16px] sm:text-[20px] text-center">
                        ScaleBI combines the freedom of Apache Superset with the reliability of a dedicated engineering team.
                    </p>
                </div>

                {/* Solutions Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] place-items-center
">

                    {solutions.map((item, index) => (
                        <div key={index} className="w-full max-w-[416px] flex flex-col gap-[16px] sm:gap-[24px] rounded-[16px] border border-[#E0E5FF] p-[24px] sm:p-[32px] items-center bg-[#FAFBFF]">

                            <div className="border-2 border-[#E0E5FF] p-[2px] rounded-[32px]">
                                <div className="border-2 border-[#99A9FF] p-[2px] rounded-[32px]">
                                    <div className="flex items-center gap-2 px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm lg:px-6 lg:py-3 lg:text-base bg-[#504DFF] rounded-[32px] text-white font-medium">
                                        <img src={item.icon} alt={`${item.title}-icon`} />
                                        <span className="font-urbanist font-semibold text-[20px] sm:text-[24px] text-[#FFFFFF]">{item.title}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="font-urbanist text-[16px] sm:text-[18px] font-medium text-center text-[#5C5F70]">{item.describtion}</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <Link  to="/contact" className="flex gap-2 bg-gradient-to-b from-[#FFFFFF] to-[#E0E5FF]  w-[250px] sm:w-auto border border-[#504DFF] rounded-[12px] py-[10px] px-[16px] justify-center items-center cursor-pointer">
                    <img src={ArrowIcon} alt="arrow-icon" />
                    <span className="text-[#504DFF] font-jetbrains font-medium text-[16px]">TALK TO OUR EXPERTS</span>
                </Link>

            </div>
        </section>
    );
}
