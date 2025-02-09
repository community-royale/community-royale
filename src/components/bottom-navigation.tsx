"use client";

import Link from "next/link";
import { Home, FileText, DollarSign } from "lucide-react";

export default function BottomNavigation() {
  return (
    <nav className="bg-black/[0.96] fixed bottom-0 w-full z-20 max-w-[375px] mx-auto">
      <div className="flex justify-around items-center py-4">
        <Link href="/" className="text-white flex flex-col items-center">
          <Home className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/convince"
          className="text-white flex flex-col items-center"
        >
          <FileText className="h-6 w-6" />
          <span className="text-xs">Convince</span>
        </Link>
        <Link href="/bets" className="text-white flex flex-col items-center">
          <DollarSign className="h-6 w-6" />
          <span className="text-xs">Bets</span>
        </Link>
      </div>
    </nav>
  );
}
