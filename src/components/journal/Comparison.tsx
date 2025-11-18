interface ComparisonProps {
  before: {
    title: string;
    items: string[];
  };
  after: {
    title: string;
    items: string[];
  };
}

export function Comparison({ before, after }: ComparisonProps) {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-6">
      {/* Before */}
      <div className="p-6 rounded-[20px] bg-red-500/5 border border-red-500/20">
        <h3 className="text-[21px] leading-[1.3] tracking-tight mb-4 flex items-center gap-2">
          <span className="text-red-500">✗</span>
          {before.title}
        </h3>
        <ul className="space-y-2">
          {before.items.map((item, index) => (
            <li key={index} className="text-[17px] text-muted-foreground leading-[1.5] flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* After */}
      <div className="p-6 rounded-[20px] bg-green-500/5 border border-green-500/20">
        <h3 className="text-[21px] leading-[1.3] tracking-tight mb-4 flex items-center gap-2">
          <span className="text-green-500">✓</span>
          {after.title}
        </h3>
        <ul className="space-y-2">
          {after.items.map((item, index) => (
            <li key={index} className="text-[17px] text-muted-foreground leading-[1.5] flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
