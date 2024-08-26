import { ShareIcon } from "../Icons/ShareIcon";
import { Tag } from "../Tag/Tag";

export const WorkCardThree = () => {
  return (
    <div className="w-full h-auto flex">
      <div className="w-full h-auto flex justify-center items-center p-[48px] bg-[#F9FAFB] rounded-l-xl">
        <img src="iToim.png" alt="" />
      </div>
      <div className="w-full h-auto flex flex-col bg-[#FFFFFF] gap-[24px] p-[48px] rounded-r-xl">
        <div>
          <h1 className="w-full h-auto text-[#111827] text-xl not-italic font-semibold leading-7">
            iToim
          </h1>
        </div>
        <div>
          <p className="text-base text-[#4B5563] font-normal leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag Tag="React" />
          <Tag Tag="Next.js" />
          <Tag Tag="Typescrip" />
          <Tag Tag="Nest.js" />
          <Tag Tag="PostgreSQL" />
          <Tag Tag="Tailwindcss" />
          <Tag Tag="Figma" />
          <Tag Tag="Cypress" />
          <Tag Tag="Storybook" />
          <Tag Tag="Git" />
        </div>
        <ShareIcon />
      </div>
    </div>
  );
};
