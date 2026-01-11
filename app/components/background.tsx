'use client'

import { useState } from "react";

const gradient_list = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #89f7fe, #66a6ff)",
  "linear-gradient(135deg, #f6d365, #fda085)",
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  "linear-gradient(135deg, #fdcbf1, #e6dee9)",
  "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #fccb90, #d57eeb)",
  "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #30cfd0, #330867)",
  "linear-gradient(135deg, #5f72bd, #9b23ea)",
  "linear-gradient(135deg, #c471f5, #fa71cd)",
  "linear-gradient(135deg, #48c6ef, #6f86d6)",
  "linear-gradient(135deg, #fdfbfb, #ebedee)",
  "linear-gradient(135deg, #accbee, #e7f0fd)",
  "linear-gradient(135deg, #d4fc79, #96e6a1)",
  "linear-gradient(135deg, #fddb92, #d1fdff)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #fad0c4, #ffd1ff)",
  "linear-gradient(135deg, #ffecd2, #fcb69f)",
  "linear-gradient(135deg, #cfd9df, #e2ebf0)",
  "linear-gradient(135deg, #bdc2e8, #e6dee9)",
  "linear-gradient(135deg, #6a11cb, #2575fc)",
  "linear-gradient(135deg, #ff758c, #ff7eb3)",
  "linear-gradient(135deg, #2193b0, #6dd5ed)",
];

export default function Background() {
  const [gradient] = useState(() => {
    return gradient_list[Math.floor(Math.random() * gradient_list.length)];
  });
  return (
    <div
      className="w-full h-52 opacity-30 absolute pointer-events-none -z-20 blur-3xl saturate-200 transition-all duration-700"
      style={{ backgroundImage: gradient }}
    />
  );
}
