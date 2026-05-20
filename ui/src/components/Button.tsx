import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "danger";
  className?: string;
  icon?: ReactNode;
}

export default function Button(props: Props) {
  const { variant = "default", className, ...rest } = props;

  const getVariant = (variant: string) => {
    switch (variant) {
      case "outline":
        return "bg-transparent border border-black/10 text-black/70";
      case "danger":
        return "bg-red-600 text-white border-red-600";
      default:
        return "border-primary bg-primary text-white";
    }
  };

  const baseClasses =
    "text-[14px] flex items-center justify-center gap-2 rounded p-2 min-w-[120px] transition-colors duration-200 cursor-pointer";
  const variantClasses = getVariant(variant);

  const combinedClasses = `${baseClasses} ${variantClasses} ${className || ""}`
    .replace(/\s+/g, " ")
    .trim();

  return (
    <>
      <button className={combinedClasses} {...rest}>
        {props.icon && props.icon}
        {props.children}
      </button>
    </>
  );
}
