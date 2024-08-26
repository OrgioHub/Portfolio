import { ShareIcon } from "../Icons/ShareIcon";
import { Tag } from "../Tag/Tag";

export const WorkCardOne = () => {
  return (
    <div className="w-full h-auto flex rounded-xl">
      <div className="w-full h-auto flex justify-center items-center bg-[#F9FAFB] p-[48px] rounded-l-xl">
        <img src="Picture.png" alt="" />
      </div>
      <div className="w-full h-auto flex flex-col  bg-[#FFFFFF] p-[48px] gap-[24px] rounded-r-xl">
        <div>
          <h1 className="w-full h-auto text-[#111827] text-xl not-italic font-semibold leading-7">
            UBCab
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
