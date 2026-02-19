
export default function Challenge({ data }) {
  return (
    <section className="w-full bg-white flex justify-center py-[60px] md:py-[70px] lg:py-[80px]">

      <div className="w-full max-w-[1283px] px-6 md:px-10 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-[40px] lg:gap-[60px]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 w-full lg:max-w-[560px]">

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#504DFF] font-urbanist">
            The Challenge
          </h2>

          <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#5C5F70] font-urbanist font-medium">
            {data.intro}
          </p>


          <ul className="flex flex-col gap-4 text-[16px] sm:text-[17px] md:text-[18px] text-[#5C5F70] font-urbanist list-disc pl-5">
            {data.points.map((point, index) => (
              <li key={index} className="text-[#5C5F70]">
                <span className="font-semibold text-[#121212]">
                  {point.bold}
                </span>
                {point.text}
              </li>
            ))}
          </ul>


          <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#5C5F70] font-urbanist">
            {data.outro}
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[560px] h-[260px] sm:h-[320px] md:h-[360px] lg:h-[396px]">
          <img
            src={data.image}
            alt="challenge"
            className="w-full h-full object-cover rounded-[14px] md:rounded-[16px]"
          />
        </div>

      </div>

    </section>
  );
}
