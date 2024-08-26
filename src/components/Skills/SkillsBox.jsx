export const SkillsBox = ({IconComponent, Text}) => {
    return (
        <div className="w-[88px] h-[100px] flex flex-col items-center gap-[8px]">
            {IconComponent}
            <p className="text-[#4B5563] text-lg font-normal">{Text}</p>
        </div>
    )
}