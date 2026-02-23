import WarningIcon from '../assets/icons/landing-page/warning-icon.svg';
import RedWarningIcon from '../assets/icons/landing-page/red-warning-icon.svg';
import CostsImage from '../assets/images/costs-image.png';
import LackImage from '../assets/images/lack-image.png';
import VendorsImage from '../assets/images/vendors-image.png';

export default function Problem() {
  const problems = [
    {
      title: "Lack of Control",
      describtion: "You can't customize or secure your own dashboards.",
      img: LackImage,
    },
    {
      title: "High Costs",
      describtion: "You pay per user just to view insights.",
      img: CostsImage,
    },
    {
      title: "Slow Vendors",
      describtion: "You wait for fixes you should own.",
      img: VendorsImage,
    },
  ];

  return (
    <section className="w-full bg-[#E1FFF7] flex justify-center">
      {/* MAIN CONTAINER */}
      <div
        className="
          w-full max-w-[1440px]
          flex flex-col items-center gap-[64px]
          px-6 py-12
          sm:px-10 sm:py-16
          lg:p-[80px]
        "
      >
        {/* HEADER CONTENT */}
        <div
          className="w-full max-w-[1280px] flex flex-col items-center gap-[24px] px-4 sm:px-10 md:px-[80px] xl:px-[160px]
          "
        >
          <div className="w-full flex flex-col items-center gap-[16px] text-center ">
            {/* THE PROBLEM BADGE */}
            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] rounded-[12px] border border-[#EFEFF0]">
              <p
                className="flex items-center justify-center gap-3 px-[12px] py-[8px] text-[16px] font-jetbrains font-normal text-[#5C5F70]"
              >
                <img src={WarningIcon} alt="warning-icon" />
                THE PROBLEM
              </p>
            </div>

            {/* TITLE */}
            <p
              className="
                font-urbanist font-semibold text-[#001066]
                text-[28px] sm:text-[32px] md:text-[36px] xl:text-[40px]
              "
            >
              <span className="text-[#504DFF]">
                You're Paying Too Much
              </span>{" "}
              for Dashboards <br /> You'll Never Own
            </p>
          </div>

          {/* SUBTITLE */}
          <p
            className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium font-urbanist text-[#5C5F70] text-center"
          >
            Most "modern" BI platforms penalize your growth with per-user fees and
            lock your data behind proprietary clouds. Your scaling success
            shouldn't come with an exponential bill.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] place-items-center"
        >
          {problems.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[416px] h-[377px] flex flex-col gap-[32px] border border-[#E0E5FF] rounded-[16px] bg-[#FAFBFF] px-[24px] pt-[24px]"
            >
              {/* CARD TOP */}
              <div className="flex flex-col gap-[8px] items-center text-center">
                <div className="flex items-center gap-2 bg-white border border-[#EFEFF0] rounded-full px-2 py-1">
                  <img src={RedWarningIcon} alt="warning" />
                  <span className="text-[#001066] font-semibold font-urbanist text-[20px]">
                    {item.title}
                  </span>
                </div>

                <p className="font-urbanist text-[18px] font-medium text-[#5C5F70]">
                  {item.describtion}
                </p>
              </div>

              {/* CARD IMAGE */}
              <div className="mt-auto flex justify-center">
                <img
                  src={item.img}
                  alt="problem"
                  className="max-w-full h-auto block"
                />
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <p className="uppercase font-normal font-jetbrains text-[14px] sm:text-[16px] lg:text-[20px] text-center">
          YOU DESERVE ANALYTICS THAT BELONG TO YOU, NOT YOUR SOFTWARE VENDOR.
        </p>
      </div>
    </section>
  );
}
