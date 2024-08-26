import { FooderNote } from "../Icons/FooderNote";

export const Fooder = () => {
  return (
    <div className="w-full h-auto bg-[#F9FAFB] flex md:px-[80px] py-[24px] justify-center items-center gap-1 ">
      <FooderNote />
      <p className="text-[#4B5563] text-sm font-normal leading-5">
        2024 | Greetings with ❤️️ from Ulaanbaatar
      </p>
    </div>
  );
};
