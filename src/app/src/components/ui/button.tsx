// src/components/ui/button.tsx
import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Componente de botão reutilizável.
 * Aceita todas as props padrão de <button> e permite estilização via className.
 */
export function Button({ children, className = "", ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`font-semibold rounded-md px-4 py-2 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}