export default function LookingAhead({ data }) {
  if (!data) return null;

  return (
    <section className="w-full flex justify-center py-[60px] lg:py-[80px] bg-white">
      <div className="w-full max-w-[1283px] px-6 lg:px-0 flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-[50px] lg:gap-[80px] w-full lg:w-[640px]">

          {/* Looking Ahead */}
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#001066] font-urbanist">
              Looking Ahead
            </h2>

            <p className="text-[16px] lg:text-[18px] leading-[160%] text-[#5C5F70] font-urbanist font-medium">
              {data.description}
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="flex flex-col gap-[20px] lg:gap-[24px]">
           <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#001066] font-urbanist">
              Key Takeaways
            </h2>

            <ul className="flex flex-col gap-[18px] lg:gap-[20px] text-[16px] lg:text-[20px]">

              {data.keyTakeaways.map((item, index) => (
                <li key={index} className="flex items-start gap-[12px] lg:gap-[14px]">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] mt-[4px]"
                  />
                  <p className="text-[#5C5F70] font-urbanist">
                    {item.text}
                  </p>
                </li>
              ))}

            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-[50px] lg:gap-[80px] w-full lg:w-[566px]">

          {/* Testimonial Card */}
          <div className="relative rounded-[16px] p-[24px] lg:p-[32px] text-white bg-gradient-to-b from-[#6A5CFF] to-[#504DFF]">

            <img
              src={data.testimonial.quotesIcon}
              alt="quote"
              className="absolute top-[20px] right-[20px] lg:top-[24px] lg:right-[24px] w-[18px] lg:w-[20px]"
            />

            <p className="text-[14px] lg:text-[16px] font-urbanist">
              {data.testimonial.role}
            </p>

            <p className="text-[16px] lg:text-[18px] leading-[160%] font-urbanist mt-[12px] lg:max-w-[460px]">
              “{data.testimonial.text}”
            </p>
          </div>

          {/* Image */}
          <img
            src={data.image}
            alt="key-takeaway"
            className="w-full rounded-[20px] object-cover"
          />

        </div>

      </div>
    </section>
  );
}
