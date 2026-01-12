'use client'

import dynamic from "next/dynamic";
const Toggle = dynamic(() => import("./toggle"), {
  ssr: false,
});

export default function ToggleDynamic() {
  return <Toggle />;
}