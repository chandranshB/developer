interface AlertProps {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error";
}

export function Alert({ title, children, variant = "default" }: AlertProps) {
  const styles = {
    default: {
      bg: "bg-muted/50",
      border: "border-border",
      title: "text-foreground",
    },
    primary: {
      bg: "bg-primary/5",
      border: "border-primary/20",
      title: "text-primary",
    },
    success: {
      bg: "bg-green-500/5",
      border: "border-green-500/20",
      title: "text-green-500",
    },
    warning: {
      bg: "bg-orange-500/5",
      border: "border-orange-500/20",
      title: "text-orange-500",
    },
    error: {
      bg: "bg-red-500/5",
      border: "border-red-500/20",
      title: "text-red-500",
    },
  };

  const style = styles[variant];

  return (
    <div className={`my-6 p-5 rounded-[16px] ${style.bg} border ${style.border}`}>
      {title && (
        <h4 className={`text-[17px] mb-2 ${style.title}`}>
          {title}
        </h4>
      )}
      <div className="text-[17px] leading-[1.5] text-foreground/90">
        {children}
      </div>
    </div>
  );
}
