import { StatusEnum } from "../models/StatusEnum";

interface Props {
  status: StatusEnum;
}

export default function Status(props: Props) {
  const variant = () => {
    switch (props.status) {
      case StatusEnum.ACTIVE:
        return "bg-green-600 text-white";
      case StatusEnum.INACTIVE:
        return "bg-gray-200 font-bold";
      default:
        return "";
    }
  };

  return (
    <div className={`text-sm flex w-fit p-1 px-2 rounded-lg ${variant()}`}>
      {props.status}
    </div>
  );
}
