export default function Solution({ data }) {

    if (!data) return null;

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
                            <span className="font-medium">{data.scopeCard.scope}</span>
                        </p>
                        <p>
                            <span className="font-semibold">Go-Live:</span>{" "}
                            <span className="font-medium">{data.scopeCard.goLive}</span>
                        </p>
                    </div>

                    {/* RIGHT SIDE */}
                    <p className="text-[16px] md:text-[18px] leading-[160%] text-[#5C5F70] font-urbanist font-medium md:max-w-[600px]">
                        {data.scopeCard.description}
                    </p>
                </div>

                {/* Intro Line */}
                <p className="text-[16px] md:text-[18px] text-[#121212] font-urbanist">
                    {data.intro}
                </p>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-[80px]">


                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-[20px] md:gap-[30px] w-full lg:w-[55%]">

                        {data.steps.map((step, index) => (
                            <div key={index} className="flex gap-[16px] lg:w-[572px]">

                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]"
                                />

                                <div className="flex flex-col gap-[15px] sm:gap-[24px]">
                                    <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-[#504DFF] font-urbanist">
                                        {step.title}
                                    </h3>

                                    {/* Description if exists */}
                                    {step.description && (
                                        <p className="text-[16px] md:text-[18px] leading-[160%] font-medium text-[#5C5F70] font-urbanist">
                                            {step.description}
                                        </p>
                                    )}

                                    {/* Bullets if exists */}
                                    {step.bullets && (
                                        <ul className="list-disc pl-[20px] text-[16px] md:text-[18px] leading-[160%] font-urbanist flex flex-col ">
                                            {step.bullets.map((bullet, i) => (
                                                <li key={i}>
                                                    {typeof bullet === "string" ? (
                                                        <span className="font-medium text-[#5C5F70]">
                                                            {bullet}
                                                        </span>
                                                    ) : (
                                                        <>
                                                            <span className="font-semibold text-[#5C5F70]">
                                                                {bullet.heading}
                                                            </span>{" "}
                                                            <span className="font-medium text-[#5C5F70]">
                                                                {bullet.text}
                                                            </span>
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </div>

                            </div>
                        ))}

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-[45%]">
                        <img
                            src={data.image}
                            alt="solution"
                            className="w-full lg:h-[677px] rounded-[20px] object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
