'use client'

import { useState } from "react";
import { useTheme } from "next-themes";

const gradient_list = [
  `
  radial-gradient(circle at 20% 20%, #7b1fa2, transparent 50%),
  radial-gradient(circle at 80% 30%, #d32f2f, transparent 50%),
  radial-gradient(circle at 50% 80%, #1a237e, transparent 50%),
  #0b0613
  `,
  `
  radial-gradient(circle at top, #1b5e20, transparent 55%),
  radial-gradient(circle at bottom, #0d2818, transparent 60%),
  #050a07
  `,
  `
  radial-gradient(circle at 30% 20%, #0d47a1, transparent 55%),
  radial-gradient(circle at 70% 80%, #001e3c, transparent 60%),
  #020814
  `,
  `
  radial-gradient(circle at top left, #ff6f00, transparent 50%),
  radial-gradient(circle at bottom right, #c2185b, transparent 55%),
  #12060f
  `,
  `
  radial-gradient(circle at 40% 30%, #006064, transparent 55%),
  radial-gradient(circle at 70% 70%, #00363a, transparent 60%),
  #020b0c
  `,
  `
  radial-gradient(circle at 20% 30%, #ec407a, transparent 50%),
  radial-gradient(circle at 80% 70%, #8e24aa, transparent 55%),
  #0c0612
  `,
  `
  radial-gradient(circle at 30% 25%, #2e7d32, transparent 55%),
  radial-gradient(circle at 70% 75%, #1b5e20, transparent 60%),
  #040a06
  `,
  `
  radial-gradient(circle at 50% 20%, #b71c1c, transparent 55%),
  radial-gradient(circle at 30% 80%, #4a0404, transparent 60%),
  #0a0202
  `,
];

export default function Background() {
  const { resolvedTheme } = useTheme();

  const [gradient] = useState(() => {
    return gradient_list[Math.floor(Math.random() * gradient_list.length)];
  });

  return (
    <>
      {resolvedTheme === "dark" && (
        <div
          className="w-full h-60 opacity-70 absolute pointer-events-none -z-20 blur-3xl transition-all duration-700"
          style={{ background: gradient }}
        />
      )}
    </>
  );
}
