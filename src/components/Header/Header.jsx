import { ButtonDownload } from "./ButtonDownload";
import { HeaderTitle } from "./HeaderTitle";
import { LogoButton } from "./LogoButton";
import { SunIcon, HumburgerIcon } from "../Icons";

export const Header = () => {
  return (
    <div className="w-full h-auto bg-[#FFF] py-[16px] top-0 sticky z-1 ">
      <div className="container-xl w-full h-auto flex justify-between item-center px-[32px] md:p-[16px]">
        <div className="contianer flex justify-center items-center px-[32px]">
          <LogoButton />
        </div>
        <div className="hidden justify-center items-center gap-6 md:flex">
          <HeaderTitle type={"#about"} Text="About" />
          <HeaderTitle type={"#work"} Text="Works" />
          <HeaderTitle type={"#skills"} Text="Testimonials" />
          <HeaderTitle type={"#contact"} Text="Contact" />
          <div className="w-[2px] h-[24px] bg-[#F3F4F6]"></div>
          <label for="check">
            <SunIcon />
          </label>
          <div className="w-full h-auto">
            <ButtonDownload ButtonDownload="Download CV" />
          </div>
        </div>
        <HumburgerIcon />
      </div>
    </div>
  );
};
