interface TextBlockProps {
  children: React.ReactNode;
  variant?: "paragraph" | "heading" | "subheading" | "quote" | "list";
}

export function TextBlock({ children, variant = "paragraph" }: TextBlockProps) {
  const variants = {
    paragraph: "text-[17px] leading-[1.6] text-foreground/90 my-6",
    heading: "text-[32px] md:text-[40px] leading-[1.08] tracking-tight mt-16 mb-6",
    subheading: "text-[24px] md:text-[28px] leading-[1.14] tracking-tight mt-12 mb-4",
    quote: "text-[21px] leading-[1.5] text-foreground/80 italic border-l-4 border-primary pl-6 my-8",
    list: "text-[17px] leading-[1.6] text-foreground/90 my-6 pl-6 space-y-2",
  };

  const Component = variant === "heading" ? "h2" : variant === "subheading" ? "h3" : variant === "quote" ? "blockquote" : variant === "list" ? "ul" : "p";

  return <Component className={variants[variant]}>{children}</Component>;
}

interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li className="flex items-start">
      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2.5 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}
