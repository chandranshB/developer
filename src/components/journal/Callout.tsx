import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "success" | "warning" | "error";
}

export function Callout({ children, type = "info" }: CalloutProps) {
  const styles = {
    info: {
      bg: "bg-blue-500/10 dark:bg-blue-500/20",
      border: "border-blue-500/30",
      icon: Info,
      iconColor: "text-blue-500",
    },
    success: {
      bg: "bg-green-500/10 dark:bg-green-500/20",
      border: "border-green-500/30",
      icon: CheckCircle,
      iconColor: "text-green-500",
    },
    warning: {
      bg: "bg-orange-500/10 dark:bg-orange-500/20",
      border: "border-orange-500/30",
      icon: AlertTriangle,
      iconColor: "text-orange-500",
    },
    error: {
      bg: "bg-red-500/10 dark:bg-red-500/20",
      border: "border-red-500/30",
      icon: AlertCircle,
      iconColor: "text-red-500",
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`my-8 p-6 rounded-[20px] border ${style.bg} ${style.border}`}>
      <div className="flex gap-4">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${style.iconColor}`} />
        <div className="text-[17px] leading-[1.6] text-foreground/90">{children}</div>
      </div>
    </div>
  );
}
