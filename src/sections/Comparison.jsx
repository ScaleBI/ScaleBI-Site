import TickIcon from '../assets/icons/tick-icon.svg';
import {
  DollarSign,
  Monitor,
  Settings,
  Boxes,
  HeartHandshake,
} from "lucide-react";


export default function Comparison(){

    const rows = [
    {
      icon: <DollarSign size={22} />,
      pain: "Expensive per-user licenses",
      solution:
        "One-time setup + optional flat monthly support + unlimited users",
    },
    {
      icon: <Monitor size={22} />,
      pain: "Vendor-hosted SaaS",
      solution: "Deployed inside your own infrastructure",
    },
    {
      icon: <Settings size={22} />,
      pain: "Limited control or extensibility",
      solution: "100% open-source + customizable stack",
    },
    {
      icon: <Boxes size={22} />,
      pain: "Locked ecosystems",
      solution: "Integrates with any warehouse or data tool",
    },
    {
      icon: <HeartHandshake size={22} />,
      pain: "Slow support or rigid SLAs",
      solution: "Dedicated, 24x7 Engineering-Led Managed Service",
    },
  ];
  
    return(
        <section className="w-full bg-[#504DFF] flex justify-center">
            <div className="max-w-[1440px] flex flex-col items-center gap-[64px] p-[80px]">
                <div className=" max-w-[1280px] flex flex-col gap-[24px] max-w-[1280] flex items-center ">
                    <div className="flex gap-[8px] bg-gradient-to-b from-[#EFEFF0] to-[#FFFFFF] border border-[#EFEFF0] rounded-[16px] px-[12px] py-[8px]">
                        <img src={TickIcon} alt="tick-icon" />
                        <span className="text-[#5C5F70] font-jetbrains font-normal text-[16px]">COMPARISON</span>
                    </div>
                   
                   <h1 className="text-[#FFFFFF] text-[40px] font-urbanist font-semibold">Why Data Leaders Switch to ScaleBI</h1>

                   <p className="font-urbanist font-medium text-[20px] text-[#FFFFFF] text-center">We combine the flexibility of open-source with the reliability of enterprise support, giving you freedom <br /> without sacrificing performance or security.</p>

                </div>

                <div>

                    

                </div>
            </div>

        </section>
    );
}