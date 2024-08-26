import { ButtonDownload } from "../Header/ButtonDownload";
import { LogoButton } from "../Header/LogoButton";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { SunIcon } from "../Icons/SunIcon";
// bg-[#F3F4F6]
export const MobileTheme = () => {
  return (
    <div className="w-[375px] h-screen flex items-start bg-[#FFF] relative backdrop-blur-sm">
      <div className="w-[320px] h-full flex flex-col items-start bg-[#FFF] shadow-gray-100 right-0 absolute z-1 drop-shadow-2xl">
        <div className="w-full flex justify-between items-center p-[16px] ">
          <div className="w-auto h-auto flex">
            <LogoButton />
          </div>
          <div className="w-auto h-auto flex justify-center items-center p-[6px]">
            <DeleteIcon />
          </div>
        </div>
        <div className="flex flex-col p-[16px] bg-[#FFF] gap-[16px] border-y-2 border-[#F3F4F6] w-full">
          <h1 className="text-[#4B5563] text-base not-italic font-medium leading-6 hover:text-[#10b981]">
            About
          </h1>
          <h1 className="text-[#4B5563] text-base not-italic font-medium leading-6 hover:text-[#10b981]">
            Work
          </h1>
          <h1 className="text-[#4B5563] text-base not-italic font-medium leading-6 hover:text-[#10b981]">
            Testimonials
          </h1>
          <h1 className="text-[#4B5563] text-base not-italic font-medium leading-6 hover:text-[#10b981]">
            Contact
          </h1>
        </div>
        <div className="w-[320px] h-[120px] flex flex-col items-start bg-[#FFF] p-[16px] gap-[16px]">
          <div className="w-full h-auto flex justify-between items-center">
            <h1 className="text-[#4B5563] text-base not-italic font-normal leading-6">
              Switch Theme
            </h1>
            <SunIcon />
          </div>
          <div className="w-full h-auto dark:bg-[--download-color:]">
            <ButtonDownload ButtonDownload="Download CV" width="full" />
          </div>
        </div>
      </div>
    </div>
  );
};
