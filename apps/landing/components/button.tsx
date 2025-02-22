import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { SparkleIcon } from "./svg/template-page";

type Props = {
  className?: string;
  IconLeft?: LucideIcon;
  label: string;
  IconRight?: LucideIcon;
};

export const PrimaryButton: React.FC<Props> = ({ className, IconLeft, label, IconRight }) => {
  return (
    <div className="relative group/button">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0239FC] to-[#7002FC] rounded-lg blur-md hover:opacity-75 group-hover/button:opacity-100 transition duration-1000 hover:rotate-20  opacity-0 group-hover/button:duration-200" />
      <button
        type="button"
        className={cn(
          "relative flex items-center px-4 gap-2 text-sm font-semibold text-black bg-white rounded-lg h-10",
          className,
        )}
      >
        {IconLeft ? <IconLeft className="w-4 h-4" /> : null}
        {label}
        {IconRight ? <IconRight className="w-4 h-4" /> : null}
      </button>
    </div>
  );
};

export const SecondaryButton: React.FC<Props> = ({ className, IconLeft, label, IconRight }) => {
  return (
    <button
      type="button"
      className={cn(
        "items-center gap-2 px-4 duration-500 text-white/50 hover:text-white h-10 hidden sm:flex",
        className,
      )}
    >
      {IconLeft ? <IconLeft className="w-4 h-4" /> : null}
      {label}
      {IconRight ? <IconRight className="w-4 h-4" /> : null}
    </button>
  );
};

export const RainbowDarkButton: React.FC<Props> = ({ className, label, IconRight }) => {
  return (
    <div className={cn("p-[.75px] hero-hiring-gradient rounded-full w-fit mx-auto", className)}>
      <button
        type="button"
        className="items-center gap-4 px-3 py-1.5 bg-black text-white rounded-full flex flex-block text-sm"
      >
        <SparkleIcon className="text-white" />
        {label}
        {IconRight ? <IconRight className="w-4 h-4" /> : null}
      </button>
    </div>
  );
};
