import SolutionImage from "../../assets/images/success-stories/solution-img.png";
import LayoutIcon from "../../assets/icons/success-stories/layout-icon.svg";
import FolderIcon from "../../assets/icons/success-stories/folder-icon.svg";
import AnalyticsIcon from "../../assets/icons/success-stories/analytics-icon.svg";

export default function Solution() {
  return (
    <section className="w-full flex justify-center py-[60px] md:py-[70px] lg:py-[80px] bg-white">
      <div className="w-full max-w-[1280px] px-6 md:px-10 lg:px-0 flex flex-col gap-[30px] md:gap-[40px]">

        {/* Section Title */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#504DFF] font-urbanist text-center">
          Solutions <span className="text-[#001066]">& Implementations</span>
        </h2>

        {/* Scope Card */}
        <div className="bg-[#FAFBFF] border border-[#E0E5FF] rounded-[16px] px-6 md:px-[32px] py-[20px] flex flex-col md:flex-row md:justify-between md:items-center gap-[20px] md:gap-[40px]">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-[8px] text-[16px] md:text-[18px] leading-[160%] font-urbanist text-[#121212]">
            <p>
              <span className="font-semibold">Scope:</span>{" "}
              <span className="font-medium">Internal HR Analytics & Reporting</span>
            </p>
            <p>
              <span className="font-semibold">Go-Live:</span>{" "}
              <span className="font-medium">Within 3 months</span>
            </p>
          </div>

          {/* RIGHT SIDE */}
          <p className="text-[16px] md:text-[18px] leading-[160%] text-[#5C5F70] font-urbanist font-medium md:max-w-[600px]">
            Leveraging the ScaleBI framework, our team implemented a comprehensive HR
            analytics layer built on Apache Superset, fully deployed within company
            infrastructure for maximum data control.
          </p>
        </div>

        {/* Intro Line */}
        <p className="text-[16px] md:text-[18px] text-[#121212] font-urbanist">
          The process followed this structured flow:
        </p>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-[80px]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-[30px] md:gap-[40px] w-full lg:w-[55%]">

            {/* Step 1 */}
            <div className="flex gap-[16px]">
              <img src={FolderIcon} alt="ingestion" className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]" />

              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-[#504DFF] font-urbanist">
                  Data Ingestion
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] font-medium text-[#5C5F70] font-urbanist">
                  Integrated data from Excel/CSV files, payroll and attendance systems,
                  and the HRMS platform into a single source of truth.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-[16px]">
              <img src={LayoutIcon} alt="modeling" className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]" />

              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-[#504DFF] font-urbanist">
                  Data Modeling
                </h3>

                <ul className="list-disc pl-[20px] text-[16px] md:text-[18px] leading-[160%] text-[#5C5F70] font-medium font-urbanist flex flex-col gap-[6px]">
                  <li>Created centralized datasets: Raw → Cleaned → Augmented → Business Data.</li>
                  <li>Applied validation rules to eliminate duplication and ensure accuracy.</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-[16px]">
              <img src={AnalyticsIcon} alt="analytics" className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]" />

              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-[#504DFF] font-urbanist">
                  Analytics & Visualization
                </h3>

                <p className="text-[16px] md:text-[18px] text-[#6B7280] font-urbanist">
                  Built HR dashboards across multiple domains:
                </p>

                <ul className="list-disc pl-[20px] text-[16px] md:text-[18px] leading-[160%] text-[#5C5F70] font-medium font-urbanist flex flex-col gap-[6px]">
                  <li>Talent Acquisition: Time-to-hire, open requisitions, candidate pipeline</li>
                  <li>Compliance & Onboarding: Visa, medical, and document tracking</li>
                  <li>Workforce Management: Headcount, attendance, overtime analytics</li>
                  <li>Compensation & Payroll: Earnings, deductions, reconciliation</li>
                  <li>Retention & Learning: Attrition trend and training completion</li>
                </ul>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[45%]">
            <img
              src={SolutionImage}
              alt="solution"
              className="w-full rounded-[20px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
