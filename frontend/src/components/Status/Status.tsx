
import type { HTMLAttributes } from "react";

type StatusType = "ativa" | "encerrada" | "pendente" | "selecionada";

interface StatusProps extends HTMLAttributes<HTMLSpanElement> {
  status: StatusType;
}

export default function Status({
  status,
  className = "",
  ...props
}: StatusProps) {
  const styles = {
    ativa: "bg-green-100 text-green-700",
    encerrada: "bg-red-100 text-red-700",
    pendente: "bg-yellow-100 text-yellow-700",
    selecionada: "bg-blue-100 text-blue-700",
  };

  const labels = {
    ativa: "Ativa",
    encerrada: "Encerrada",
    pendente: "Pendente",
    selecionada: "Selecionada",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles[status]} ${className}`}
      {...props}
    >
      {labels[status]}
    </span>
  );
}
