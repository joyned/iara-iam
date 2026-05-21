import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "DEFAULT" | "DANGER" | "SUCCESS";
}

export default function Icon({ children, variant = "DEFAULT" }: Props) {
  const getVariant = () => {
    switch (variant) {
      case "DANGER":
        return "hover:text-red-600 hover:bg-red-600/20";
      case "SUCCESS":
        return "text-green-600";
      default:
        return "hover:bg-black/10";
    }
  };
  return <div className={`flex p-2 cursor-pointer transition-all duration-300 rounded ${getVariant()}`}>{children}</div>;
}
