
export default function Hero({ data }) {
  return (
    <section className="w-full bg-[#EAF6F2] flex justify-center">
      <div className="w-full max-w-[1440px] px-6 md:px-10 lg:px-[80px] pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[60px] md:pb-[70px] lg:pb-[80px] flex flex-col items-center gap-6">

        {/* Title */}
        <h1 className="font-urbanist text-center text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold text-[#001066] leading-tight max-w-[900px]">
          {data.title.before}{" "}
          <span className="text-[#504DFF]">
            {data.title.highlight}{" "}
          </span>
          {data.title.after}
        </h1>

        {/* Description */}
        <p className="font-urbanist font-medium text-center text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] text-[#5C5F70] max-w-[1120px]">
          {data.desc1}
        </p>

        <p className="font-urbanist font-medium text-center text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] text-[#6B7280] max-w-[1000px]">
          {data.desc2}
        </p>

        {/* Meta Info Section */}
        <div className="flex flex-col items-center gap-6 mt-6 font-urbanist text-[16px] md:text-[18px] text-[#001066]">

          {/* Industry */}
          <div className="flex items-center gap-4">
            <img src={data.icons.industry} alt="industry" className="w-6 h-6 md:w-8 md:h-8" />
            <span>{data.industry}</span>
          </div>

          {/* Company Size + Role */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 xl:gap-26">

            <div className="flex items-center gap-4">
              <img src={data.icons.employees} alt="company" className="w-6 h-6 md:w-8 md:h-8" />
              <span>{data.companySize}</span>
            </div>

            <div className="flex items-center gap-4">
              <img src={data.icons.role} alt="role" className="w-6 h-6 md:w-8 md:h-8" />
              <span>{data.role}</span>
            </div>

          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full mt-10 flex justify-center">
          <img
            src={data.image}
            alt="case-study-hero"
            className="w-full max-w-[1172px] rounded-[16px] md:rounded-[20px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
