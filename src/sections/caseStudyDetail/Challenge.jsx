import ChallengeImage from "../../assets/images/success-stories/challenge-img.png";

export default function Challenge() {
  return (
    <section className="w-full bg-white flex justify-center py-[80px]">
      
      <div className="w-full max-w-[1283px]  flex justify-between items-center gap-[60px]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 max-w-[560px]">

          <h2 className="text-[40px] font-semibold text-[#504DFF] font-urbanist">
            The Challenge
          </h2>

          <p className="text-[18px] text-[#5C5F70] font-urbanist font-medium">
            Before adopting ScaleBI, the HR tech firm depended largely on Excel
            spreadsheets and disconnected HR systems for reporting, which led to
            several key challenges:
          </p>

          <ul className="flex flex-col gap-4 text-[18px] text-[#5C5F70] font-urbanist list-disc pl-5">
            <li><span className="font-semibold text-[#121212]">High recurring BI costs</span>{" "} costs from external tools and services</li>
            <li><span className="font-semibold text-[#121212]">Lack of ownership </span>{" "} and control over their data and analytics stack</li>
            <li><span className="font-semibold text-[#121212]">Manual report creation </span>{" "} prone to human errors and time delays</li>
          </ul>

          <p className="text-[18px] text-[#5C5F70] font-urbanist">
            These limitations made it difficult for HR leaders to access reliable,
            real-time insights on attrition, attendance, and recruitment efficiency.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[560px] h-[396px]">
          <img
            src={ChallengeImage}
            alt="challenge"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>

      </div>

    </section>
  );
}
