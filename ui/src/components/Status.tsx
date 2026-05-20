import { StatusEnum } from "../models/StatusEnum";

interface Props {
  status: "ACTIVE" | "INACTIVE";
}

export default function Status(props: Props) {
  const value = StatusEnum[props.status];

  const variant = () => {
    switch (props.status) {
      case "ACTIVE":
        return "bg-green-600 text-white";
      case "INACTIVE":
        return "bg-gray-200 font-bold";
      default:
        return "";
    }
  };

  return <div className={`text-xs flex w-fit p-1 rounded-lg ${variant()}`}>{value}</div>;
}
