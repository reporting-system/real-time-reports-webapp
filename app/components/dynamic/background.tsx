'use client'

import dynamic from "next/dynamic";
const Background = dynamic(() => import("@/app/components/background"), {
  ssr: false,
});

export default function BackgroundDynamic() {
  return <Background />;
}
