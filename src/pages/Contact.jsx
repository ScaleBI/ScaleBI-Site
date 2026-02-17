import ContactIcon from '../assets/icons/contact/contact-icon.svg';
import EmailIcon from '../assets/icons/contact/email-icon.svg';
import PhoneIcon from '../assets/icons/contact/phone-icon.svg';
import LocationIcon from '../assets/icons/contact/location-icon.svg';
import RightArrow from '../assets/icons/contact/right-arrow.svg'

export default function Contact() {

    const contactCards = [
        {
            title: "Email",
            icon: EmailIcon,
            value: "hello@scalebi.io"
        },
        {
            title: "Phone",
            icon: PhoneIcon,
            value: "+1 (680) 225-5286"
        },
        {
            title: "Address",
            icon: LocationIcon,
            value: "PO 4321, River edge, NJ 07661."
        }

    ]
    return (
        <section className="w-full flex justify-center bg-gradient-to-b from-[#FFFFFF] to-[#E0E5FF40]">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-12 sm:gap-16 py-12 px-4 sm:px-8 lg:py-20 lg:px-20">
                <div className="w-full  flex flex-col items-center gap-5 sm:gap-6 text-center mt-[90px]">

                    <div className="bg-gradient-to-b from-[#EFEFF0] to-[#FFFFFF] border border-[#EFEFF0] flex items-center gap-2 rounded-[12px] px-4 py-2">
                        <img src={ContactIcon} alt="contact-icon" />
                        <span className="text-[#5C5F70] font-jetbrains font-normal text-[16px]">STEPS</span>
                    </div>

                    <h2 className="text-[#504DFF] font-urbanist font-semibold text-[24px] sm:text-[34px] lg:text-[40px]"> Let's talk </h2>

                    <p className="text-[#5C5F70] font-urbanist font-medium text-[14px] sm:text-[18px] ">Tell us about your data stack and goals, and we'll follow up quickly.</p>

                </div>

                {/* ===== CONTACT FORM ===== */}

                <div className="w-full max-w-[960px] bg-white border border-[#E0E5FF] rounded-[20px] p-6 sm:p-16 shadow-sm">
                    <div className="flex flex-col gap-6">

                        {/* Row 1 */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col gap-2">
                                <label className="text-[#5C5F70] font-urbanist font-medium text-[16px]">Full Name</label>
                                <input type="text" className="h-[50px] px-4 rounded-[12px] border border-[#E0E5FF] focus:outline-none focus:ring-2 focus:ring-[#504DFF]" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[#5C5F70] font-urbanist font-medium text-[16px]">Work email</label>
                                <input type="text" className="h-[50px] px-4 rounded-[12px] border border-[#E0E5FF] focus:outline-none focus:ring-2 focus:ring-[#504DFF]" />
                            </div>

                        </div>

                        {/* Row 2 */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[#5C5F70] font-urbanist font-medium text-[16px]">Phone Number (Optional)</label>
                                <input type="text" className="h-[50px] px-4 rounded-[12px] border border-[#E0E5FF] focus:outline-none focus:ring-2 focus:ring-[#504DFF]" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[#5C5F70] font-urbanist font-medium text-[16px]">Company</label>
                                <input type="text" className="h-[50px] px-4 rounded-[12px] border border-[#E0E5FF] focus:outline-none focus:ring-2 focus:ring-[#504DFF]" />
                            </div>

                        </div>

                        {/* Message */}

                        <div className="flex flex-col gap-2">
                            <label className="text-[#5C5F70] font-urbanist font-medium text-[16px]">
                                What can we help you build?
                            </label>
                            <textarea
                                rows="5"
                                className="px-4 py-3 rounded-[12px] border border-[#E0E5FF] focus:outline-none focus:ring-2 focus:ring-[#504DFF]"
                            ></textarea>
                        </div>

                        {/* Button */}

                        <button
                            type="submit"
                            className="h-[55px] mt-2 px-6 rounded-[14px] bg-[#504DFF] hover:opacity-90 transition flex items-center justify-center gap-3"
                        >
                            <span className="text-white font-urbanist font-medium font-medium text-[16px]">
                                Send message
                            </span>
                            <img src={RightArrow} alt="arrow" className="w-4 h-4" />
                       </button>

                    </div>
                </div>


                {/* ===== CONTACT CARDS ===== */}

                <div className="w-full max-w-[960px] grid grid-cols-1 md:grid-cols-3 gap-6">

                    {contactCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#E0E5FF] rounded-[20px] p-8 flex flex-col items-center text-center gap-4 shadow-sm"
                        >
                            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[12px] bg-white border border-[#F5F5F5] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)]">
                                <img src={card.icon} alt={card.title} className="w-5 h-5" />
                            </div>

                            <h4 className="text-[#5C5F70] font-urbanist font-medium text-[20px]">
                                {card.title}
                            </h4>

                            <p className="text-[#504DFF] font-urbanist font-normal text-[18px]">
                                {card.value}

                            </p>
                        </div>
                    ))}



                </div>


            </div>
        </section>

    );
}