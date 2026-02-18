import HeroImage from "../../assets/images/success-stories/hr-team.png";
import EmployeesIcon from "../../assets/icons/success-stories/employees-icon.svg";
import IndustryIcon from "../../assets/icons/success-stories/industry-icon.svg";
import UserRoleIcon from "../../assets/icons/success-stories/userRole-icon.svg";

export default function Hero() {
  return (
    <section className="w-full bg-[#EAF6F2] flex justify-center">
      <div className="w-full max-w-[1440px] px-6 md:px-10 lg:px-[80px] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[60px] md:pb-[70px] lg:pb-[80px] flex flex-col items-center gap-6">

        {/* Title */}
        <h1 className="font-urbanist text-center text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold text-[#001066] leading-tight max-w-[900px]">
          How Leading HR Tech Firm Streamlined HR Analytics,
          <span className="text-[#504DFF]">
            {" "}Cut Reporting Time by 80%,{" "}
          </span>
          and Gained Full BI Ownership with ScaleBI
        </h1>

        {/* Description */}
        <p className="font-urbanist font-medium text-center text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] text-[#5C5F70] max-w-[1120px]">
          A fast-growing HR Tech firm manages a diverse workforce and multiple HR systems across payroll,
          attendance, and recruitment. The HR team faced growing complexity in managing data across
          systems, making it difficult to obtain a unified, real-time view of workforce performance and compliance.
        </p>

        <p className="font-urbanist font-medium text-center text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] text-[#6B7280] max-w-[1000px]">
          As a result, key HR and compliance decisions were often made with incomplete or delayed information.
        </p>

        {/* Meta Info Section */}
        <div className="flex flex-col items-center gap-6 mt-6 font-urbanist text-[16px] md:text-[18px] text-[#001066]">

          {/* Industry */}
          <div className="flex items-center gap-4">
            <img src={IndustryIcon} alt="industry" className="w-6 h-6 md:w-8 md:h-8" />
            <span>Industry – HR Tech Firm</span>
          </div>

          {/* Company Size + Role */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">

            <div className="flex items-center gap-4">
              <img src={EmployeesIcon} alt="company" className="w-6 h-6 md:w-8 md:h-8" />
              <span>Company Size – 51 to 200 Employees</span>
            </div>

            <div className="flex items-center gap-4">
              <img src={UserRoleIcon} alt="role" className="w-6 h-6 md:w-8 md:h-8" />
              <span>Role Interviewed – Director</span>
            </div>

          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full mt-10 flex justify-center">
          <img
            src={HeroImage}
            alt="case-study-hero"
            className="w-full max-w-[1172px] rounded-[16px] md:rounded-[20px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
