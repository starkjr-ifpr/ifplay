import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "success" | "danger" | "warning" | "info" | "neutral";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({
  variant = "neutral",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const styles = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-700",
    neutral: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}