import TurnArrowIcon from '../assets/icons/landing-page/turnArrow-icon.svg';
import SearchIcon from '../assets/icons/landing-page/search-icon.svg';
import RocketIcon from '../assets/icons/landing-page/rocket-icon.svg';
import PencilIcon from '../assets/icons/landing-page/pencil-icon.svg';

export default function Steps() {

    const steps = [
        {
            steps: "STEP 1",
            title: "Discover",
            icon: SearchIcon,
            description: "We design your BI roadmap to fit your data."
        },
        {
            steps: "STEP 2",
            title: "Discover",
            icon: RocketIcon,
            description: "We install, configure Apache Superset inside your cloud."
        },
        {
            steps: "STEP 3",
            title: "Customize",
            icon: PencilIcon,
            description: "Dashboards, SSO, RBAC, and integrations tailored to you."
        },
        {
            steps: "STEP 4",
            title: "Manage",
            icon: PencilIcon,
            description: "We maintain performance, security, and uptime 24×7."
        }
    ]
    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-12 sm:gap-16 py-12 px-4 sm:px-8 lg:py-20 lg:px-20">
                <div className="w-full  flex flex-col items-center gap-5 sm:gap-6 text-center ">

                    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] border border-[#EFEFF0] flex items-center gap-2 rounded-[12px] px-4 py-2">
                        <img src={TurnArrowIcon} alt="turn-arrow-icon" />
                        <span className="text-[#5C5F70] font-jetbrains font-normal text-[16px]">STEPS</span>
                    </div>

                    <h2 className="text-[#001066] font-urbanist font-semibold text-[24px] sm:text-[34px] lg:text-[40px]"> A Clear <span className="text-[#504DFF]">Path to Owning Your BI</span></h2>

                    <p className="text-[#5C5F70] font-urbanist font-medium text-[14px] sm:text-[20px] ">From discovery to deployment, we handle everything end-to-end.</p>

                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    { steps.map((item, index)=>(
                        <div key={index} className="flex flex-col items-center text-center gap-6 border border-[#E0E5FF] rounded-[16px] p-8 bg-[#FAFBFF]">
                            <span className="text-[#001066] font-jetbrains text-[16px] sm:text-[18px]">
                                {item.steps}
                            </span>

                            <div className="p-[2px] rounded-[32px] border-2 border-[#E0E5FF]">
                                <div className="p-[2px] rounded-[32px] border-2 border-[#99A9FF]">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-[#504DFF] rounded-[32px] text-white  text-[16px] sm:text-[20px] font-urbanist font-semibold">
                                        <img src={item.icon} alt="icon" className="w-6 h-6"/>
                                        {item.title}
                                    </div>
                                </div>
                            </div>

                            <p className="text-[#5C5F70] font-urbanist text-[18px]  max-w-[244px]">
                                {item.description}
                            </p>

                        </div>
                    ))

                    }


                </div>
            </div>

        </section>
    );
}