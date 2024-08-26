import { Tag } from "../Tag/Tag";
import { WorkCardOne } from "./WorkCardOne";
import { WorkCardThree } from "./WorkCardThree";
import { WorkCardTwo } from "./WorkCardTwo";

export const Work = () => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] py-[96px] px-[80px]" id="work">
      <div className="container-xl w-full h-auto flex flex-col items-center px-[32px] gap-[48px]">
        <div className="max-w-[576px] flex flex-col justify-center items-center gap-[16px]">
          <Tag Tag="Work" />
          <p className="text-xl text-[#4B5563] font-normal leading-6">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="max-w-[1152px] flex flex-col justify-center gap-[48px]">
          {/* Davtalt bolgoh zasah */}
          <div className="rounded-xl shadow-md">
            <WorkCardOne />
          </div>
          <div className="rounded-xl shadow-md">
            <WorkCardTwo />
          </div>
          <div className="rounded-xl shadow-md">
            <WorkCardThree />
          </div>
        </div>
      </div>
    </div>
  );
};
