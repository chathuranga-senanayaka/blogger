import { Button } from "@/components/ui/button";
import React from "react";

// Nextjs ISR caching strategy
export const revalidate = false;

export default function Home() {
  return (
    <div className="hero-section btn">
      <Button>Button</Button>
      <div className="h-10 w-10"></div>
      <Button variant={"outline"} size={"small"}>
        Button
      </Button>
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
