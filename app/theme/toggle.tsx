'use client'

import { useTheme } from "next-themes";
import { Light, Dark, System } from "../components/svg";

export default function Toggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex border border-[#292929] w-fit rounded-full p-0.75">
      <button
        className={`w-8 h-8 border-0 rounded-full ${
          theme === "light"
            ? "text-[#ededed] bg-[#292929]"
            : "text-[hsl(0,0%,63%)]"
        } flex items-center justify-center `}
        onClick={() => setTheme("light")}
      >
        <Light size={16} color="currentcolor" />
      </button>
      <button
        className={`w-8 h-8 border-0 rounded-full ${
          theme === "dark"
            ? "text-[#ededed] bg-[#292929]"
            : "text-[hsl(0,0%,63%)]"
        } flex items-center justify-center text-[#292929]`}
        onClick={() => setTheme("dark")}
      >
        <Dark size={16} color="currentcolor" />
      </button>

      <button
        className={`w-8 h-8 border-0 rounded-full ${
          theme === "system"
            ? "text-[#ededed] bg-[#292929]"
            : "text-[hsl(0,0%,63%)]"
        } flex items-center justify-center text-[#292929]`}
        onClick={() => setTheme("system")}
      >
        <System size={16} color="currentcolor" />
      </button>
    </div>
  );
}
