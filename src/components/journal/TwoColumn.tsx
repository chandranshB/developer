interface TwoColumnProps {
  left: React.ReactNode;
  right: React.ReactNode;
  variant?: "equal" | "left-heavy" | "right-heavy";
}

export function TwoColumn({ left, right, variant = "equal" }: TwoColumnProps) {
  const gridClasses = {
    equal: "md:grid-cols-2",
    "left-heavy": "md:grid-cols-[2fr_1fr]",
    "right-heavy": "md:grid-cols-[1fr_2fr]",
  };

  return (
    <div className={`grid ${gridClasses[variant]} gap-8 my-8`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
