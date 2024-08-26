import { Tag } from "../Tag/Tag";

export const AboutMe = () => {
  return (
    <div
      className="w-full h-auto flex justify-center items-center bg-[#F9FAFB] md:py-[96px] py-[64px]"
      id="about"
    >
      <div className="container-xl w-full h-auto bg-[#F9FAFB] flex flex-col items-center md:px-[32px] px-[16px] gap-[48px]">
        <div className="flex justify-center items-center">
          <Tag Tag="About Me" />
        </div>
        <div className="w-full h-auto grid md:grid-cols-2 items-center gap-[48px]">
          <div className="flex justify-center items-center w-[343px] md:hidden">
            <img src="./TomMobile1.png" alt="" />
          </div>
          <div className="w-full h-auto hidden md:flex ">
            <img src="./Column.png" alt="" />
          </div>
          <div className="w-full h-auto flex flex-col gap-[24px]">
            <h2 className="text-3xl text-[#111827] font-semibold leading-9">
              Curious about me? Here you have it:
            </h2>
            <div className="w-full h-auto flex flex-col gap-[16px]">
              <p className="text-base text-[#4B5563] font-normal leading-[24px]">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p className="text-base text-[#4B5563] font-normal leading-[24px]">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p className="text-base text-[#4B5563] font-normal leading-[24px]">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p className="text-base text-[#4B5563] font-normal leading-[24px]">
                Finally, some quick bits about me.
              </p>
              <div className="flex gap-1 my-4">
                <div className="flex flex-wrap gap-[10px]">
                  <li className="md:w-[287px] text-base text-[#4B5563] font-normal leading-[24px]">
                    B.E. in Computer Engineering
                  </li>
                  <li className="md:w-[287px] text-base text-[#4B5563] font-normal leading-[24px]">
                    Full time freelancer
                  </li>
                  <li className="md:w-[287px] text-base text-[#4B5563] font-normal leading-[24px]">
                    Avid learner
                  </li>
                </div>
              </div>
              <p className="text-base text-[#4B5563] font-normal leading-[24px]">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
