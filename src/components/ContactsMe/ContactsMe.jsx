import { CopyIcon } from "../Icons/CopyIcon";
import { EmailIcon } from "../Icons/EmailIcon";
import { FigmaIcon } from "../Icons/FigmaIcon";
import { GithubIcon } from "../Icons/GithubIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { Tag } from "../Tag/Tag";

export const ContactsMe = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#FFFFFF] md:py-[96px] py-[80px] px-[16px]" id="contact">
      <div className="w-full h-auto flex flex-col justify-center items-center md:px-[32px] gap-[48px] md:gap-[24px]">
        <div className="w-full flex flex-col items-center gap-[18px]">
          <Tag Tag="Get in touch" />
          <div className="max-w-[576px] h-auto flex justify-center items-center">
            <h2 className="text-[#4B5563] text-center text-xl font-normal leading-7">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </h2>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-[18px]">
          <div className="max-w-[436px] h-auto flex justify-center items-center gap-[20px]">
            <EmailIcon />
            <h2 className="text-[#111827] lg:text-4xl md:text-lg font-semibold">
              tom@pinecone.mn
            </h2>
            <CopyIcon />
          </div>
          <div className="max-w-[436px] h-auto flex justify-center items-center gap-[20px]">
            <PhoneIcon />
            <h2 className="text-[#111827] lg:text-4xl md:text-lg font-semibold">
              +976 88112233
            </h2>
            <CopyIcon />
          </div>
        </div>
        <div className="max-w-[312px] h-auto flex flex-col items-center gap-1">
          <div className="w-full h-auto">
            <p className="text-[#4B5563] text-base font-normal leading-5">
              You may also find me on these platforms!
            </p>
          </div>
          <div className="w-full h-auto flex justify-center items-center">
            <GithubIcon />
            <TwitterIcon />
            <FigmaIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
