import WarningIcon from "../../assets/icons/success-stories/warning-icon.svg";
import SuccessIcon from "../../assets/icons/success-stories/success-icon.svg";

export default function Result() {
  const metrics = [
    "Reporting Workflow",
    "Data Consolidation",
    "Reports Generated",
    "Human Error",
    "Decision Speed",
  ];

  const traditional = [
    "Manual, Excel-based",
    "4+ systems, inconsistent",
    "~ 15 static Excel reports",
    "Frequent recalculations",
    "Delayed by days",
  ];

  const afterScaleBI = [
    "Automated HR dashboards",
    "Unified, validated data model",
    "70+ live dashboards consolidated",
    "Zero manual error due to automation",
    "Real-time insights available anytime",
  ];

  return (
    <section className="w-full flex justify-center py-[60px] lg:py-[80px] bg-white">
      <div className="w-full max-w-[1280px] px-6 lg:px-0 flex flex-col gap-[40px] lg:gap-[60px]">

        {/* Heading */}
        <div className="text-center flex flex-col gap-[16px] lg:gap-[20px]">
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#504DFF] font-urbanist">
            Results <span className="text-[#001066]">& Outcomes</span>
          </h2>

          <p className="text-[16px] lg:text-[18px] leading-[160%] text-[#5C5F70] font-urbanist font-medium  mx-auto">
            The transition to ScaleBI not only automated reporting but also transformed HR analytics
            from a manual, reactive process into a real-time strategic capability.
          </p>

          <p className="text-[16px] lg:text-[18px] leading-[160%] text-[#5C5F70] font-urbanist  mx-auto">
            The HR team achieved an{" "}
            <span className="font-semibold">80% reduction in manual reporting effort</span>,
            significantly improved the{" "}
            <span className="font-semibold">
              accuracy of audit and board reports, and enhanced transparency across HR and departmental decision-making.
            </span>
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="flex flex-col lg:flex-row">

          {/* LEFT SECTION */}
          <div className="flex flex-col md:flex-row lg:flex-row">

            {/* Metric Column */}
            <div className="w-full md:w-1/2 lg:w-[308px] 
                            border border-[#F2F2F2] 
                            lg:rounded-l-[16px] 
                            px-6 lg:px-[32px] 
                            py-[24px] lg:py-[31px] 
                            flex flex-col gap-[24px] lg:gap-[32px] 
                            bg-[#FFFFFF]">

              <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#504DFF] font-urbanist">
                Metric
              </h3>

              {metrics.map((item, i) => (
                <div key={i} className="border-t border-[#F2F2F2] pt-[16px] lg:pt-[20px]">
                  <p className="text-[16px] lg:text-[18px] text-[#001119] font-urbanist">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Traditional Column */}
            <div className="w-full md:w-1/2 lg:w-[408px] 
                            border-t md:border-t-0 
                            md:border-l 
                            lg:border-t lg:border-b lg:border-r 
                            border-[#F2F2F2] 
                            px-6 lg:px-[32px] 
                            py-[24px] lg:py-[31px] 
                            flex flex-col gap-[24px] lg:gap-[32px] 
                            bg-[#F9F9F9]">

              <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#504DFF] font-urbanist">
                Traditional Analytics Platforms
              </h3>

              {traditional.map((item, i) => (
                <div key={i} className="border-t border-[#F2F2F2] pt-[16px] lg:pt-[20px] flex items-center gap-[10px]">
                  <img src={WarningIcon} alt="warning-icon" className="w-4 h-4 lg:w-5 lg:h-5" />
                  <p className="text-[16px] lg:text-[18px] text-[#5C5F70] font-urbanist">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER SCALEBI COLUMN */}
          <div className="w-full lg:w-[568px] 
                          mt-6 lg:mt-0 
                          lg:rounded-r-[16px] 
                          px-6 lg:px-[32px] 
                          py-[24px] lg:py-[31px] 
                          flex flex-col gap-[24px] lg:gap-[32px] 
                          text-white 
                          bg-gradient-to-b from-[#6A5CFF] to-[#504DFF]">

            <h3 className="text-[20px] lg:text-[24px] font-semibold font-urbanist">
              After ScaleBI
            </h3>

            {afterScaleBI.map((item, i) => (
              <div key={i} className="border-t border-white/20 pt-[16px] lg:pt-[20px] flex items-center gap-[10px]">
                <img src={SuccessIcon} alt="success-icon" className="w-4 h-4 lg:w-5 lg:h-5" />
                <p className="text-[16px] lg:text-[18px] font-urbanist">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
