import { Link } from 'react-router-dom';
import TrophyIcon from '../assets/icons/success-stories/trophy-icon.svg';
import HRTeamImage from '../assets/images/success-stories/hr-team.png';
import ManufacturerImage from '../assets/images/success-stories/manufacturer.png';

export default function SuccessStories() {
    const stories = [
        {
            slug: "hr-tech-analytics",
            img: HRTeamImage,
            title: "Leading HR Tech Firm: 80% Faster HR Reporting with ScaleBI",
            description: "Streamlined HR analytics and gained full BI ownership through smart automation."
        },

        {
            img: ManufacturerImage,
            title: "How a Global Manufacturer Unified 12 Data Systems, Boosted Efficiency by 25%",
            description: "From scattered reports to a single dashboard-ScaleBI unified 12 systems seamlessly."
        }



    ]
    return (
        <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#E1FFF7] flex justify-center pt-[80px]" id="comparison" >
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-[64px] px-4 py-12 lg:p-[80px]">
                <div className=" max-w-[1280px] flex flex-col gap-[24px]  items-center text-center">
                    <div className="flex gap-[8px] bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0]from-[#FFFFFF] to-[#EFEFF0] border border-[#EFEFF0] rounded-[16px] px-[12px] py-[8px]">
                        <img src={TrophyIcon} alt="trophy-icon" className="w-6 h-6" />
                        <span className="text-[#5C5F70] font-jetbrains font-normal text-[14px] lg:text-[16px]">SUCCESS STORIES</span>
                    </div>

                    <h1 className="text-[#504DFF] text-[26px] sm:text-[50px]  lg:text-[80px] font-urbanist font-semibold">Success <span className="text-[#001066]">Stories</span> </h1>

                    <p className="font-urbanist font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-[#5C5F70]">Explore how our team identifies business challenges and applies creative, data-driven solutions for growth.</p>

                </div>

                <div className="w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {

                        stories.map((story, index) => {
                            const Card = (
                                <div key={index} className="bg-[#FAFBFF] p-4 rounded-[16px] flex flex-col gap-4 border border-[#E0E5FF]">

                                    <img src={story.img} alt="story-index" />

                                    <div className=' flex flex-col gap-3'>

                                        <h3 className="text-[#001066] font-semibold font-urbanist text-[24px]">{story.title}</h3>

                                        <p className="text-[#5C5F70] font-medium font-urbanist text-[18px] max-w-[480px]">{story.description}</p>


                                    </div>

                                </div>
                            );

                            if (story.slug) {
                                return (
                                    <Link key={index} to={`/case-study/${story.slug}`} className='cursor-pointer'>
                                        {Card}

                                    </Link>
                                )
                            }

                            return (
                                <div key={index}>
                                    {Card}
                                </div>
                            );


                        })
                    }

                </div>


            </div>
        </section>

    )
}