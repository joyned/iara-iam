import type { ReactNode } from "react";

interface Props {
  header: string[];
  children: ReactNode;
}

function Table(props: Props) {
  return (
    <div className="bg-white border-black/10 border rounded-lg">
      <table className="w-full">
        <thead>
          <tr>
            {props.header.map((h: string) => {
              return (
                <th className="text-left bg-[#f9fafc] text-black/65 px-5 py-3 border-b border-black/10 text-sm">
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

function TableRow({ children }: any) {
  return <tr className="p-5 hover:bg-black/5 transition-all duration-300">{children}</tr>;
}

function TableData({ children, className }: any) {
  const combinedClasses = `p-5 text-black/70 border-b border-black/5 ${className}`;
  return <td className={combinedClasses}>{children}</td>;
}

export { Table, TableRow, TableData };
