import { LogoUpwork } from "../Icons/LogoUpwork";

export const ExperienceCardOne = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center gap-[48px]">
      <div className="flex w-full h-auto gap-x-[48px] bg-white rounded-xl shadow-md p-8">
        <div className="max-w-[206px] h-auto">
          <LogoUpwork />
        </div>
        <div className="max-w-[384px] h-auto flex flex-col gap-4">
          <h3 className="text-[#111827] text-xl font-semibold leading-7">
            Sr. Frontend Developer
          </h3>
          <div className="w-auto h-auto flex flex-col gap-1">
            <div className="text-left gap-1">
              <ul className="list-disc ml-5">
                <li className="text-base text-[#4B5563] font-normal leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="text-base text-[#4B5563] font-normal leading-6">
                  Ut pretium arcu et massa semper, id fringilla leo semper."
                </li>
                <li className="text-base text-[#4B5563] font-normal leading-6">
                  Sed quis justo ac magna.
                </li>
                <li className="text-base text-[#4B5563] font-normal leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[146px] flex flex-col items-end">
          <p className="text-base text-[#374151] font-normal leading-6">
            Nov 2021 - Present
          </p>
        </div>
      </div>
    </div>
  );
};
