import type { ReactNode } from "react";
import Button from "./Button";

interface Props {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  buttonAction?: () => void;
  buttonIcon?: ReactNode;
}

export default function PageHeader(props: Props) {
  return (
    <div className="flex justify-between items-center bg-white p-5 border-b border-black/10">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-black/80 text-3xl">{props.title}</h1>
        <span className="text-black/50">{props.subtitle}</span>
      </div>
      {props.buttonLabel && (
        <div className="flex items-center justify-center">
          <Button icon={props.buttonIcon} onClick={props.buttonAction}>
            {props.buttonLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
