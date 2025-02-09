"use client";

import { BetPlacement } from "@/components/bet-placement";

export default function BetsSection() {
  return (
    <div
      id="bets"
      className="relative min-h-[calc(100vh-76px)] flex items-center mt-8 mb-[100px]"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 gap-8 mb-12">
          <BetPlacement />
        </div>
      </div>
    </div>
  );
}
