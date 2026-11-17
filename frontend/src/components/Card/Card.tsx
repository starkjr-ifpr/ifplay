import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
}

export function Card({
  children,
  title,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-5 shadow-sm ${className}`}
      {...props}
    >
      {title && (
        <h3 className="mb-3 text-lg font-semibold">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}