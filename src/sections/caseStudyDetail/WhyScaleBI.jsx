import CloudIcon from "../../assets/icons/success-stories/cloud-icon.svg";
import EmailIcon from "../../assets/icons/success-stories/email-icon.svg";
import LicenseIcon from "../../assets/icons/success-stories/license-icon.svg";
import ComplianceIcon from "../../assets/icons/success-stories/compliance-icon.svg";

export default function WhyScaleBI() {
  const whyData = [
    {
      icon: CloudIcon,
      title: "Full ownership",
      description:
        "Full ownership of their BI platform within their own cloud environment",
    },
    {
      icon: EmailIcon,
      title: "Enterprise-grade support",
      description: "Enterprise-grade support and scalability",
    },
    {
      icon: LicenseIcon,
      title: "No Recurring License Fees",
      description:
        "A one-time setup model with no recurring license fees, ensuring predictable, transparent costs",
    },
    {
      icon: ComplianceIcon,
      title: "Data independence and Compliance",
      description:
        "Alignment with their long-term vision of data independence and compliance",
    },
  ];

  return (
    <section className="w-full flex justify-center py-[60px] md:py-[70px] lg:py-[80px] bg-white">
      <div className="w-full max-w-[1283px] px-6 md:px-10 lg:px-0 flex flex-col items-center gap-[30px] md:gap-[40px]">

        {/* Heading */}
        <div className="flex flex-col items-center gap-[10px] text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#504DFF] font-urbanist">
            Why ScaleBI?
          </h2>

          <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[160%] text-[#3D3D3D] font-urbanist font-medium max-w-[700px]">
            After evaluating Power BI and Alteryx, HR Tech Firm chose ScaleBI
            because it offered:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[24px] w-full">

          {whyData.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFBFF] rounded-[14px] md:rounded-[16px] py-[20px] px-[20px] sm:px-[28px] md:px-[36px] flex flex-col gap-[14px] border border-[#E0E5FF]"
            >
              {/* Icon */}
              <div className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-[8px] md:rounded-[10px] bg-white flex items-center justify-center border border-[#E0E5FF]">
                <img src={item.icon} alt="icon" className="w-4 h-4 md:w-5 md:h-5" />
              </div>

              {/* Title */}
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#001066] font-urbanist">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[160%] text-[#5C5F70] font-medium font-urbanist">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
