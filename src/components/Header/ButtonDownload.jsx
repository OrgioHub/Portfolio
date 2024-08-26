export const ButtonDownload = ({ ButtonDownload, width = "136px" }) => {
  return (
    <button
      className={`w-${width} w-full h-[36px]flex justify-between items-center bg-[#111827] rounded-xl px-[16px] py-[6px] hover:bg-[#374151] active:bg-[#1F2937] active:shadow-2xl`}
    >
      {ButtonDownload}
    </button>
  );
};
