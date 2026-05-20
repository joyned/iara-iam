import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageBody(props: Props) {
  return <div className="p-5 flex flex-col gap-5">{props.children}</div>;
}
