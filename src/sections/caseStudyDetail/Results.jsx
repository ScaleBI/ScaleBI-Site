
export default function Result({ data }) {
  if (!data) return null;

  return (
    <section className="w-full flex justify-center py-[60px] lg:py-[80px] bg-white">
      <div className="w-full max-w-[1280px] px-6 lg:px-0 flex flex-col gap-[40px] lg:gap-[60px]">

        {/* Heading */}
        <div className="text-center flex flex-col gap-[16px] lg:gap-[20px]">

          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#504DFF] font-urbanist">
            Results <span className="text-[#001066]">& Outcomes</span>
          </h2>

          {/* Desc 1 */}
          <p className="text-[16px] lg:text-[18px] leading-[160%] text-[#5C5F70] font-urbanist font-medium mx-auto">
            {data.desc1}
          </p>

          {/* Desc 2 Dynamic */}
          <p className="text-[16px] lg:text-[18px] leading-[160%] text-[#5C5F70] font-urbanist mx-auto">
            {data.desc2.before}
            <span className="font-semibold">
              {data.desc2.highlight1}
            </span>
            {data.desc2.middle}
            <span className="font-semibold">
              {data.desc2.highlight2}
            </span>
          </p>

        </div>

        {/* Comparison Layout */}
        <div className="flex flex-col lg:flex-row">

          {/* LEFT SIDE */}
          <div className="flex flex-col md:flex-row lg:flex-row">

            {/* Metric Column */}
            <div className="w-full md:w-1/2 lg:w-[308px] border border-[#F2F2F2] lg:rounded-l-[16px]  px-6 lg:px-[32px] py-[24px] lg:py-[31px]  flex flex-col gap-[24px] lg:gap-[32px]  bg-[#FFFFFF]">

              <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#504DFF] font-urbanist">
                {data.columns.metric}
              </h3>

              {data.table.map((row, i) => (
                <div key={i} className="border-t border-[#F2F2F2] pt-[16px] lg:pt-[20px]">
                  <p className="text-[16px] lg:text-[18px] text-[#001119] font-urbanist">
                    {row.metric}
                  </p>
                </div>
              ))}

            </div>

            {/* Traditional Column */}
            <div className="w-full md:w-1/2 lg:w-[408px]  border-t md:border-t-0  md:border-l  lg:border-t lg:border-b lg:border-r  border-[#F2F2F2]  px-6 lg:px-[32px] py-[24px] lg:py-[31px] flex flex-col gap-[24px] lg:gap-[32px] bg-[#F9F9F9]">

              <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#504DFF] font-urbanist">
                {data.columns.traditional}
              </h3>

              {data.table.map((row, i) => (
                <div key={i} className="border-t border-[#F2F2F2] pt-[16px] lg:pt-[20px] flex items-center gap-[10px]">
                  <img src={data.icons.warning} alt="" className="w-4 h-4 lg:w-5 lg:h-5" />
                  <p className="text-[16px] lg:text-[18px] text-[#5C5F70] font-urbanist">
                    {row.traditional}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* AFTER SCALEBI COLUMN */}
          <div className="w-full lg:w-[568px]  mt-6 lg:mt-0  lg:rounded-r-[16px]  px-6 lg:px-[32px]  py-[24px] lg:py-[31px]  flex flex-col gap-[24px] lg:gap-[32px]  text-white  bg-gradient-to-b from-[#6A5CFF] to-[#504DFF]">

            <h3 className="text-[20px] lg:text-[24px] font-semibold font-urbanist">
              {data.columns.after}
            </h3>

            {data.table.map((row, i) => (
              <div key={i} className="border-t border-white/20 pt-[16px] lg:pt-[20px] flex items-center gap-[10px]">
                <img src={data.icons.success} alt="" className="w-4 h-4 lg:w-5 lg:h-5" />
                <p className="text-[16px] lg:text-[18px] font-urbanist">
                  {row.after}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
