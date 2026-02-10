import FileIcon from "../assets/icons/file-icon.svg";

export default function TrustedBy() {
  const trustedCompanyLogo = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <section className="bg-[#000419] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">

        {/* Title */}
        <h2 className="font-urbanist text-[20px] sm:text-[28px] lg:text-[32px] text-[#99A9FF]">
          Trusted by world-class companies
        </h2>

        {/* Logos */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-[40px] opacity-50">
          {trustedCompanyLogo.map((id) => (
            <div
              key={id}
              className="h-[60px] sm:h-[70px] lg:h-[80px] bg-[#141B3D] rounded-[8px]"
            />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10 sm:mt-12 lg:mt-16">
          <button
            className="
              flex items-center gap-[12px]
              px-4 py-2 sm:px-6 sm:py-3
              border border-[#4F46E5]
              text-[#4F46E5]
              bg-white
              rounded-[12px]
              font-medium
              text-xs sm:text-sm
              hover:bg-gray-50
              transition
            "
          >
            <img src={FileIcon} alt="file-icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            READ MORE CUSTOMER STORIES
          </button>
        </div>

      </div>
    </section>
  );
}
