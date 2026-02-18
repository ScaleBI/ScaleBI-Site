import SolutionImage from "../../assets/images/success-stories/solution-img.png";
import LayoutIcon from "../../assets/icons/success-stories/layout-icon.svg";
import FolderIcon from "../../assets/icons/success-stories/folder-icon.svg";
import AnalyticsIcon from "../../assets/icons/success-stories/analytics-icon.svg";


export default function Solution() {
    return (
        <section className="w-full flex justify-center py-[80px] bg-white">
            <div className="w-full max-w-[1280px]  flex flex-col gap-[40px]">

                {/* Section Title */}
                <h2 className="text-[40px] font-semibold text-[#504DFF] font-urbanist text-center">
                    Solutions <span className="text-[#001066]">& Implementations</span>
                </h2>

                {/* Scope Card */}
                <div className=" bg-[#FAFBFF] border border-[#E0E5FF] rounded-[16px] px-[32px] py-[20px] flex justify-between items-center gap-[40px]">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col gap-[8px] text-[18px] leading-[160%] font-urbanist text-[#121212]">
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
                    <p className="text-[18px] leading-[160%] text-[#5C5F70] font-urbanist font-medium max-w-[697px]">
                        Leveraging the ScaleBI framework, our team implemented a comprehensive HR
                        analytics layer built on Apache Superset, fully deployed within company
                        infrastructure for maximum data control.
                    </p>

                </div>


                {/* Intro Line */}
                <p className="text-[18px] text-[#121212] font-urbanist font-normal">
                    The process followed this structured flow:
                </p>


                {/* Two Column Layout */}
                <div className="flex justify-between items-start gap-[80px]">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-[40px] w-[671px]">

                        {/* Step 1 */}
                        <div className="flex gap-[16px]">

                            <img src={FolderIcon} alt="ingestion" className="w-[46px] h-[46px]" />


                            <div className="flex flex-col gap-[8px]">
                                <h3 className="text-[24px] font-bold text-[#504DFF] font-urbanist">
                                    Data Ingestion
                                </h3>
                                <p className="text-[18px] leading-[160%] font-medium text-[#5C5F70] font-urbanist">
                                    Integrated data from Excel/CSV files, payroll and attendance systems,
                                    and the HRMS platform into a single source of truth.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-[16px]">
                            <img src={LayoutIcon} alt="ingestion" className="w-[46px] h-[46px]" />

                            <div className="flex flex-col gap-[8px]">
                                <h3 className="text-[24px] font-bold text-[#504DFF] font-urbanist">
                                    Data Modeling
                                </h3>

                                <ul className="list-disc pl-[20px] text-[18px] leading-[160%] text-[#5C5F70] font-urbanist font-medium flex flex-col gap-[6px]">
                                    <li>Created centralized datasets: Raw → Cleaned → Augmented → Business Data.</li>
                                    <li>Applied validation rules to eliminate duplication and ensure accuracy.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-[16px]">
                            <img src={AnalyticsIcon} alt="ingestion" className="w-[46px] h-[46px]" />

                            <div className="flex flex-col gap-[12px]">
                                <h3 className="text-[24px] font-bold text-[#504DFF] font-urbanist">
                                    Analytics & Visualization
                                </h3>

                                <p className="text-[18px] text-[#6B7280] font-urbanist mt-3">
                                    Built HR dashboards across multiple domains:
                                </p>

                                <ul className="list-disc pl-[20px] text-[18px] leading-[160%] text-[#5C5F70] font-medium font-urbanist flex flex-col gap-[6px] mt-3">
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
                    <div className="w-[650px]">
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
