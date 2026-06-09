export default function Ticker() {
  const items = [
    "Debt Settlement",
    "Roofing",
    "HVAC",
    "Windows",
    "Solar",
    "Gutters",
    "Bathroom Remodeling",
    "Walk-in Tubs",
    "Pest Control",
    "Home Security",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="border-y border-gray-100 py-4 overflow-hidden"
      style={{ background: "#f8fafc" }}
    >
      <div className="flex gap-0" style={{ width: "max-content" }}>
        <div
          className="flex gap-10 animate-ticker whitespace-nowrap items-center"
          style={{ width: "max-content" }}
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-10 flex-shrink-0">
              <span
                className="text-sm font-semibold tracking-wide uppercase"
                style={{
                  color: "#6b7280",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {item}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#39caff" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
