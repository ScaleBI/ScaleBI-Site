import ContactIcon from '../assets/icons/contact/contact-icon.svg';

export default function Contact(){
    return(
 <section className="w-full flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-12 sm:gap-16 py-12 px-4 sm:px-8 lg:py-20 lg:px-20">
                <div className="w-full  flex flex-col items-center gap-5 sm:gap-6 text-center mt-[90px]">

                    <div className="bg-gradient-to-b from-[#EFEFF0] to-[#FFFFFF] border border-[#EFEFF0] flex items-center gap-2 rounded-[12px] px-4 py-2">
                        <img src={ContactIcon} alt="contact-icon" />
                        <span className="text-[#5C5F70] font-jetbrains font-normal text-[16px]">STEPS</span>
                    </div>

                    <h2 className="text-[#504DFF] font-urbanist font-semibold text-[24px] sm:text-[34px] lg:text-[40px]"> Let's talk </h2>

                    <p className="text-[#5C5F70] font-urbanist font-medium text-[14px] sm:text-[18px] ">Tell us about your data stack and goals, and we'll follow up quickly.</p>

                </div>
                </div>
                </section>
                
    );
}