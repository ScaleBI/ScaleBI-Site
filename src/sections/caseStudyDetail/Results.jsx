import WarningIcon from "../../assets/icons/success-stories/warning-icon.svg"
import SuccessIcon from "../../assets/icons/success-stories/success-icon.svg"
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
    <section className="w-full flex justify-center py-[80px] bg-white">
      <div className="w-full max-w-[1280px]  flex flex-col gap-[60px]">

        {/* Heading */}
        <div className="text-center flex flex-col gap-[20px]">
          <h2 className="text-[40px] font-semibold text-[#504DFF] font-urbanist">
            Results  <span className="text-[#001066]">& Outcomes</span>
          </h2>

          <p className="text-[18px] leading-[160%] text-[#5C5F70] font-urbanist font-medium  mx-auto">
            The transition to ScaleBI not only automated reporting but also transformed HR analytics
            from a manual, reactive process into a real-time strategic capability.
          </p>

          <p className="text-[18px] leading-[160%] text-[#5C5F70] font-urbanist  mx-auto">
            The HR team achieved an <span className="font-semibold">80% reduction in manual reporting effort</span>,
            significantly improved the <span className="font-semibold"> accuracy of audit and board reports, and enhanced transparency
            across HR and departmental decision-making.</span>
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="flex">

          {/* LEFT SECTION (2 Columns Grey) */}
          <div className="flex">

            {/* Metric Column */}
            <div className="w-[308px] border border-[#F2F2F2] rounded-l-[16px] px-[32px] py-[31px] flex flex-col gap-[32px] bg-[#FFFFFF]">
              <h3 className="text-[24px] font-semibold text-[#504DFF] font-urbanist">
                Metric
              </h3>

              {metrics.map((item, i) => (
                <div key={i} className="border-t border-[#F2F2F2] pt-[20px]">
                  <p className="text-[18px] text-[#001119] font-urbanist">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Traditional Column */}
            <div className="w-[408px] border-t border-b border-r border-[#F2F2F2] px-[32px] py-[31px] flex flex-col gap-[32px] bg-[#F9F9F9]">
              <h3 className="text-[24px] font-semibold text-[#504DFF] font-urbanist">
                Traditional Analytics Platforms
              </h3>

              {traditional.map((item, i) => (
                <div key={i} className="border-t border-[#F2F2F2] pt-[20px] flex items-center gap-[10px]">
                  {/* <span className="w-[20px] h-[20px] rounded-full bg-red-400 flex items-center justify-center text-white text-[12px]">
                    !
                  </span> */}
                  <img src={WarningIcon} alt="warning-icon" />
                  <p className="text-[18px] text-[#5C5F70] font-urbanist">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* AFTER SCALEBI COLUMN */}
          <div className="w-[568px] rounded-r-[16px] px-[32px] py-[31px] flex flex-col gap-[32px] text-white bg-gradient-to-b from-[#6A5CFF] to-[#504DFF]">
            <h3 className="text-[24px] font-semibold font-urbanist">
              After ScaleBI
            </h3>

            {afterScaleBI.map((item, i) => (
              <div key={i} className="border-t border-white/20 pt-[20px] flex items-center gap-[10px]">
              <img src={SuccessIcon} alt="success-icon" />
                <p className="text-[18px] font-urbanist">
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
