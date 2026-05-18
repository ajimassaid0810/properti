export function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.26em] text-[#9d7a2f] uppercase">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#071527] md:text-5xl">{title}</h2>
            {description && <p className="mt-5 text-base leading-8 text-[#667085]">{description}</p>}
        </div>
    );
}
