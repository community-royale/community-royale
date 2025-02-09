"use client";

import Link from "next/link";
import { Home, FileText, DollarSign } from "lucide-react";

export default function TopNavigation() {
  return (
    <div className="relative z-10 flex justify-between items-center p-4 bg-black/[0.8]">
      <h1 className="text-white text-xl">Community Royal</h1>
      <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded">
        Connect Wallet
      </button>
    </div>
  );
}
