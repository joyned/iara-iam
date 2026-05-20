import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContent(props: Props) {
  return <div className="flex flex-col gap-5">{props.children}</div>;
}
