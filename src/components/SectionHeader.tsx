interface SectionHeaderProps {
    tag: string
    title: string
    description: string
    nowrap?: boolean;
}

const SectionHeader = ({ tag, title, description, nowrap = false }: SectionHeaderProps) => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <span className="text-primary px-3 min-w-[100px] h-[41px] rounded-[24px] border border-gray3 flex items-center justify-center text-sm">
                {tag}
            </span>
            <span className={`text-light md:text-[50px] text-[35px] max-w-[900px] text-center ${nowrap ? "md:whitespace-nowrap" : "whitepace-normal"}`}>{title}</span>
            <p className="text-center md:max-w-[640px] max-w-[90%] text-gray1 text-lg">
                {description}
            </p>
        </div>
    )
}

export default SectionHeader
