import React from "react";

// Nextjs ISR caching strategy
export const revalidate = false;

export default function Home() {
  return (
    <div className="hero-section btn">
      Hi
      <div></div>
      <div>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
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
