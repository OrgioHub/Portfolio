import { Tag } from "../Tag/Tag";
import { CypressIcon } from "../Icons/CypressIcon";
import { ExpressjsIcon } from "../Icons/ExpressjsIcon";
import { FigmaIcons } from "../Icons/FigmaIcons";
import { GitIcon } from "../Icons/GitIcon";
import { JavascriptIcon } from "../Icons/JavascriptIcon";
import { MongoIcon } from "../Icons/MongoIcon";
import { NestjsIcon } from "../Icons/NestjsIcon";
import { NextjsIcon } from "../Icons/NextjsIcon";
import { NodejsIcon } from "../Icons/NodejsIcon";
import { ReactIcon } from "../Icons/ReactIcon";
import { SassIcon } from "../Icons/SassIcon";
import { SocketioIcon } from "../Icons/SocketioIcon";
import { StorybookIcon } from "../Icons/StorybookIcon";
import { TailwindIcon } from "../Icons/TailwindIcon";
import { TypescriptIcon } from "../Icons/TypescriptIcon";
import { SkillsBox } from "./SkillsBox";

export const Skills = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center  bg-[#FFFFFF] md:py-[96px] py-[64px] px-[16px] md:gap-[48px] gap-[24px]" id="skills">
      <div className="container w-full h-auto flex flex-col items-center md:px-[32px] gap-[48px]">
        <div className="max-w-[576px] flex flex-col items-center gap-[16px]">
          <Tag Tag="Skills" />
          <p className="text-xl text-[#4B5563] font-normal leading-[24px]">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center items-center gap-x-[60px] gap-y-[48px]">
          <SkillsBox IconComponent={<JavascriptIcon />} Text={"Javascripts"} />
          <SkillsBox IconComponent={<TypescriptIcon />} Text={"Typescript"} />
          <SkillsBox IconComponent={<ReactIcon />} Text={"React"} />
          <SkillsBox IconComponent={<NextjsIcon />} Text={"Next.js"} />
          <SkillsBox IconComponent={<NodejsIcon />} Text={"Node.js"} />
          <SkillsBox IconComponent={<ExpressjsIcon />} Text={"Express.js"} />
          <SkillsBox IconComponent={<NestjsIcon />} Text={"Nest.js"} />
          <SkillsBox IconComponent={<SocketioIcon />} Text={"Socked.io"} />
          <SkillsBox IconComponent={<MongoIcon />} Text={"MongoDB"} />
          <SkillsBox IconComponent={<SassIcon />} Text={"Sass/Scss"} />
          <SkillsBox IconComponent={<TailwindIcon />} Text={"Tailwindcss"} />
          <SkillsBox IconComponent={<FigmaIcons />} Text={"Figma"} />
          <SkillsBox IconComponent={<CypressIcon />} Text={"Cypress"} />
          <SkillsBox IconComponent={<StorybookIcon />} Text={"Storybook"} />
          <SkillsBox IconComponent={<GitIcon />} Text={"Git"} />
        </div>
      </div>
    </div>
  );
};
