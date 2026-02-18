import TakeawayImage from "../../assets/images/success-stories/takeaway-img.png";
import UserIcon from "../../assets/icons/success-stories/user-icon.svg";
import SpeedIcon from "../../assets/icons/success-stories/speed-icon.svg";
import ScaleIcon from "../../assets/icons/success-stories/scale-icon.svg";
import SupportIcon from "../../assets/icons/success-stories/support-icon.svg";
import QuotesIcon from "../../assets/icons/success-stories/quotes-icon.svg";

export default function LookingAhead() {
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
              HR Tech Firm plans to expand ScaleBI’s coverage to include data from
              related systems such as project tracking and finance, creating an
              integrated company-wide analytics ecosystem.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="flex flex-col gap-[20px] lg:gap-[24px]">
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#001066] font-urbanist">
              Key Takeaways
            </h2>

            <ul className="flex flex-col gap-[18px] lg:gap-[20px] text-[16px] lg:text-[20px]">

              <li className="flex items-start gap-[12px] lg:gap-[14px]">
                <img src={UserIcon} alt="icon" className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] mt-[4px]" />
                <p className="text-[#5C5F70] font-urbanist">
                  Ownership – Full control over infrastructure and data
                </p>
              </li>

              <li className="flex items-start gap-[12px] lg:gap-[14px]">
                <img src={SpeedIcon} alt="icon" className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] mt-[4px]" />
                <p className="text-[#5C5F70] font-urbanist">
                  Speed – Deployed and live within 3 months
                </p>
              </li>

              <li className="flex items-start gap-[12px] lg:gap-[14px]">
                <img src={ScaleIcon} alt="icon" className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] mt-[4px]" />
                <p className="text-[#5C5F70] font-urbanist">
                  Scale – 70+ reports automated
                </p>
              </li>

              <li className="flex items-start gap-[12px] lg:gap-[14px]">
                <img src={SupportIcon} alt="icon" className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] mt-[4px]" />
                <p className="text-[#5C5F70] font-urbanist">
                  Support – Enterprise-grade assistance with zero vendor lock-in
                </p>
              </li>

            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-[50px] lg:gap-[80px] w-full lg:w-[566px]">

          {/* Testimonial Card */}
          <div className="relative rounded-[16px] p-[24px] lg:p-[32px] text-white bg-gradient-to-b from-[#6A5CFF] to-[#504DFF]">

            <img
              src={QuotesIcon}
              alt="quote"
              className="absolute top-[20px] right-[20px] lg:top-[24px] lg:right-[24px] w-[18px] lg:w-[20px]"
            />

            <p className="text-[14px] lg:text-[16px] font-urbanist">
              Director, HR Tech Firm
            </p>

            <p className="text-[16px] lg:text-[18px] leading-[160%] font-urbanist mt-[12px] lg:max-w-[460px]">
              “With ScaleBI, we finally own our analytics solution and still get
              the enterprise support we need.”
            </p>
          </div>

          {/* Image */}
          <img
            src={TakeawayImage}
            alt="key-takeaway"
            className="w-full rounded-[20px] object-cover"
          />

        </div>

      </div>
    </section>
  );
}