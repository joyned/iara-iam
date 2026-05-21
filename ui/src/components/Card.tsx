import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card(props: Props) {
  return (
    <div className="bg-white border-black/10 border p-5 rounded-lg">{props.children}</div>
  );
}
