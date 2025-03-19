import Headersection from "@/components/Headersection";
import { Button } from "@/components/ui/button";
import Postcard from "@/components/ui/postcard";
import React from "react";

// Nextjs ISR caching strategy
export const revalidate = false;

export default function Home() {
  return (
    <div className="">
      <Headersection />
      <Postcard />
    </div>
  );
}

// Nextjs dynamic metadata
export function generateMetadata() {
  return {
    title: `Home`,
    description: `Page - Description here`,
    icons: {
      icon: `path to asset file`,
    },
  };
}
