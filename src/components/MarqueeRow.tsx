import UserReview from "./UserReview"

const MarqueeRow = ({
    offset = 0,
    prefix = 'marquee',
}: {
    offset?: number
    prefix?: string
}) => {
    const items = [...Array(20)].map((_, i) => <UserReview key={`${prefix}-${i}`} />)

    return (
        <div className="relative flex overflow-hidden w-full">
            <div
                className={`flex gap-5 animate-marquee`}
                style={{
                    animation: 'var(--animate-marquee)',
                    marginLeft: offset ? `${offset}px` : undefined,
                }}
            >
                {items}
            </div>
        </div>
    )
}

export default MarqueeRow;
