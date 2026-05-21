import {
  forwardRef,
  useImperativeHandle,
  useState,
  type ReactNode,
} from "react";

interface Props {
  children: ReactNode;
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export const SlidePanel = forwardRef((props: Props, ref: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const setState = (open: boolean) => {
    setOpen(open);
  };

  useImperativeHandle(ref, () => ({
    setState,
  }));

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#0000008b] ${open ? "opacity-100 visible z-40" : "opacity-0 invisible -z-40"}`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed top-0 bottom-0 right-0 w-200 bg-background shadow-2xl transition-all duration-300 ease-in-out transform ${
          open ? "translate-x-0 z-50" : "translate-x-full z-50"
        }`}
      >
        <div className="flex flex-col gap-5 h-full">
          <div className="flex justify-between items-center p-5 border-b border-black/10 bg-white">
            <div className="flex items-center gap-5">
              <div className="p-2 bg-blue-600 text-white rounded">
                {props.icon}
              </div>
              <div className="flex flex-col">
                <h1 className="text-black/70 font-bold text-lg">
                  {props.title}
                </h1>
                <span className="text-black/50">{props.subtitle}</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-black/50 hover:text-black/70 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-5 flex-1 overflow-y-auto">{props.children}</div>
        </div>
      </div>
    </>
  );
});
