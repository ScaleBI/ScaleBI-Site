import { useState } from "react";
import ArrowDown from "../assets/icons/landing-page/arrowDown-icon.svg";
import ArrowUp from "../assets/icons/landing-page/arrowUp-icon.svg";
import QuestionIcon from '../assets/icons/landing-page/question-icon.svg';


export default function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }


    const faqs = [

        {
            question: "What exactly is ScaleBI?",
            answer: "ScaleBI is your BI partner not a SaaS platform. We help startups and growing companies deploy and manage Apache Superset, an open-source BI tool, right inside your own cloud. You own it, we run it so you get modern dashboards without vendor lock-ins or surprise bills."
        },

        {
            question: "How is ScaleBI different from Tableau or Looker?",
            answer: "Tableau and Looker charge per user and keep your data in their cloud. ScaleBI gives you full control and ownership. Your dashboards live inside your own environment with no recurring license costs. Think of it as “enterprise BI without enterprise pricing.”"
        },

        {
            question: "Do I need a data team to use ScaleBI?",
            answer: "No. We handle everything from setup to scaling. Even if you’re a lean startup, you’ll get plug-and-play analytics without hiring BI engineers. For mid-size teams, we act as your extended BI department."
        },

        {
            question: "What kind of companies benefit most from ScaleBI?",
            answer: "ScaleBI is perfect for startups and emerging mid-market businesses that want to make data-driven decisions but without the overhead of big-ticket BI tools.Our customers are typically: Startups ready to move beyond spreadsheets. Mid-market companies tired of paying per-user fees. Teams needing secure, compliant analytics in their own cloud. If you want enterprise-grade BI with startup-speed execution, ScaleBI fits right in."
        },

        {
            question: "How long does it take to go live?",
            answer: "Most clients go live in 4–8 weeks, depending on the data volume and integration needs. We move fast so you start seeing dashboards, not just plans."
        },

        {
            question: "What’s your pricing model?",
            answer: "Simple and transparent no hidden costs. Contact us for more details."
        },

        {
            question: "How secure is my data?",
            answer: "Completely. Your BI runs inside your VPC or on-premises, not ours. We configure SSO (Okta, Azure AD, Google), fine-grained access control (RBAC), and regular health checks, ensuring compliance and data privacy from day one."
        },

        {
            question: "Can ScaleBI connect with my existing tools?",
            answer: "Yes — we integrate with all major databases and warehouses like Snowflake, Redshift, BigQuery, PostgreSQL, MySQL, and more. We also support embedding dashboards into your product or internal portals."
        },

        {
            question: "We already use Apache Superset — can you still help?",
            answer: "Absolutely. We provide enterprise-grade support for existing Superset setups — including scaling, performance tuning, monitoring, and security hardening."
        },

        {
            question: "What if I’m migrating from Tableau or Power BI?",
            answer: "We’ll help you migrate your dashboards and users seamlessly. Clients who switched from Tableau typically save 60–80% in annual BI spend."
        },

        {
            question: " Do you offer support after deployment?",
            answer: "Yes. Every deployment includes ongoing managed service — updates, performance checks, and 24×7 monitoring. We’re your BI partner, not a one-time vendor."
        },

        {
            question: "Is ScaleBI a SaaS platform?",
            answer: "No and that’s our biggest advantage. ScaleBI is a service-driven model that gives you freedom and ownership. You own the infrastructure and data; we handle the heavy lifting."
        }
    ]

    return (
        <section className="bg-[#E1FFF7] flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-center py-12 px-4 sm:px-8 lg:py-20 lg:px-20  gap-[40px] lg:gap-[64px]">
                <div className="w-full flex flex-col items-center gap-5 sm:gap-6 text-center">
                    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] border border-[#EFEFF0] flex items-center gap-2 rounded-[12px] px-4 py-2">
                        <img src={QuestionIcon} alt="study-icon" className="h-6 w-6" />
                        <span className="font-jetbrains font-normal text-[16px] uppercase text-[#5C5F70]">
                            FAQ
                        </span>
                    </div>

                    <h2 className="font-urbanist font-semibold text-[20px] sm:text-[40px] text-[#001066]">
                        Questions?{" "}
                        <span className="text-[#504DFF]">We're Glad You Asked.</span>
                    </h2>
                </div>

                <div className="flex flex-col  gap-[8px] w-full max-w-[800px] ">

                    {faqs.map((faq, index) => (
                        <div key={index} className={`rounded-[16px] border transition-all duration-300 ${activeIndex === index ? "bg-[#504DFF] text-white border-[#EFEFF0] shadow-lg " : "bg-[#FAFBFF] border-[#E0E5FF]"}`}>
                            <button onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-8 h-[80px] text-left cursor-pointer"

                            >

                                <span className={`font-urbanist font-semibold text-[14px] sm:text-[18px]  ${activeIndex === index ? "text-[#FFFFF]" : "text-[#001066]"}`}>
                                    {faq.question}

                                </span>

                                <div className="flex items-center justify-center w-8 h-8 rounded bg-white rounded-lg" >
                                    <img src={activeIndex === index ? ArrowUp : ArrowDown} alt="Toggle" className="w-4 h-4" />
                                </div>

                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className=" px-8 pb-6  font-urbanist font-medium text-[14px] sm:text-[18px] text-[#FFFFFF] leading-relaxed ">
                                    {faq.answer}
                                </div>

                            </div>


                        </div>

                    ))}

                </div>
            </div>

        </section>
    )

}
