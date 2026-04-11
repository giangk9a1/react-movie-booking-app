export default function ColumnEmpty({ title, description, className }) {
    return (
        <div className={className}>
            {title ? (
                <p className="text-sm font-semibold text-white">{title}</p>
            ) : null}
            <p
                className={`text-sm leading-relaxed text-zinc-400 ${
                    title ? "mt-2" : ""
                }`}
            >
                {description}
            </p>
        </div>
    );
}
