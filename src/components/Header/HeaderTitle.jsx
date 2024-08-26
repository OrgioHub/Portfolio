export const HeaderTitle = ({ Text, type }) => {
  return (
    <a
      href={type}
      className="w-auto h-auto flex justify-center items-center text-base text-[#4B5563] hover:text-[#10b981]"
    >
      {Text}
    </a>
  );
};
