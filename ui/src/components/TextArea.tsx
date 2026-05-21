import type { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea(props: Props) {
  return (
    <div
      className={`flex items-center gap-2 p-2 pl-3 pr-3 text-black/70
        border border-black/10 rounded relative ${props.className} ${props.disabled && "bg-gray-200"}`}
    >
      <textarea className="border-none" {...props} style={{ width: "100%" }} />
    </div>
  );
}
