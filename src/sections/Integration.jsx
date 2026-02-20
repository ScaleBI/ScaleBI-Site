import Menu from '../assets/icons/landing-page/menu-icon.svg';
import IntegrationImage from '../assets/images/integration-image.png';
export default function Integration(){
    return(
        <section className="bg-[#E1FFF7] flex justify-center">

            <div className="w-full max-w-[1440px] flex flex-col items-center  py-12 px-4 sm:px-8 lg:py-20 lg:px-20">
                <div className="w-full  flex flex-col items-center gap-5 sm:gap-6 text-center">
                    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#EFEFF0] border border-[#EFEFF0] flex items-center gap-2 rounded-[12px] px-4 py-2">
                        <img src={Menu} alt="menu-icon"  className="h-6 w-6"/>
                        <span className="font-jetbrains font-normal text-[16px] text-center uppercase text-[#5C5F70]">INTEGRATIONS</span>
                    </div>

                    <h2 className="font-urbanist font-semibold text-[20px] sm:text-[40px] text-center text-[#001066]">Turn Every Data Source You <br /> Use into  <span className="text-[#504DFF]">Real-Time Intelligence</span></h2>

                </div>

                <div className="">
                    <img src={IntegrationImage} alt="integration-image"  />

                </div>
            </div>

            
        </section>
    );
}