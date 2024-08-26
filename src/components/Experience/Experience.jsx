import { ExperienceCardOne } from "./ExperienceCardOne";
import { ExperienceCardTwo } from "./ExperienceCardTwo";
import { Tag } from "../Tag/Tag";
import { ExperienceCardThree } from "./ExperienceCardThree";

export const Experience = () => {
  return (
    <div className="w-full h-auto bg-[#F9FAFB] flex justify-center items-center py-[96px] px-[80px] gap-[48px]">
      <div className="container w-full h-auto flex flex-col items-center px-[32px] gap-[48px]">
        <div className="max-w-[576px] flex flex-col justify-center items-center gap-[16px]">
          <Tag Tag="Experience" />
          <p className="text-xl text-[#4B5563] font-normal leading-6">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        {/* irdeeduid zasah */}
        <div className="max-w-[896px] flex flex-col gap-12">
          <ExperienceCardOne />
          <ExperienceCardTwo />
          <ExperienceCardThree />
        </div>
      </div>
    </div>
  );
};
