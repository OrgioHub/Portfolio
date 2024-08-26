import { FigmaIcon } from "../Icons/FigmaIcon";
import { GithubIcon } from "../Icons/GithubIcon";
import { LocationIcon } from "../Icons/LocationIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";

export const Hero = () => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] md:py-[96px] md:px-[32px] py-[64px] px-[16px] md:gap-[48px] gap-[24px]" id="hero">
      <div className="container-xl grid md:grid-cols-2 items-center md:px-[32px] gap-[48px]">
        <div className="flex md:hidden flex-col justify-center items-center border-8 border-white">
          <img src="/TomMobile.png" alt="" />
        </div>
        <div className="max-w-[600px] flex flex-col gap-[48px]">
          <div className="w-full">
            <h1 className="text-[#111827] text-[60px] font-bold leading-[72px]">
              Hi, I’m Tom 👋
            </h1>
          </div>
          <div className="w-full">
            <p className="text-base text-[#4B5563] font-normal leading-[24px]">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="w-full flex flex-col gap-[8px]">
            <div className="flex items-center gap-[8px]">
              <LocationIcon />
              <p className="text-base text-[#4B5563] font-normal leading-[24px]">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#10B981] m-2"></div>
              <p className="text-base text-[#4B5563] font-normal leading-[24px]">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="flex">
            <GithubIcon />
            <TwitterIcon />
            <FigmaIcon />
          </div>
        </div>
        <div className="w-full md:flex flex-col justify-center items-end border-8 border-white hidden">
          <img src="./Column2.png" alt="" className=" w-full h-auto" />
        </div>
      </div>
    </div>
  );
};
