interface Props {
    severity:
        | "Low"
        | "Medium"
        | "High"
        | "Critical";
}

function SeverityBadge({ severity }: Props) {
    const colors = {
        Low: "bg-green-500/20 text-green-400",

        Medium:
            "bg-yellow-500/20 text-yellow-400",

        High:
            "bg-orange-500/20 text-orange-400",

        Critical:
            "bg-red-500/20 text-red-400",
    };

    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors[severity]}`}
        >
            {severity}
        </span>
    );
}

export default SeverityBadge;