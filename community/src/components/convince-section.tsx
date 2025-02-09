"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Chat } from "./chat";

export default function ConvinceSection() {
  return (
    <div
      id="convince"
      className="relative min-h-[calc(100vh-76px)] flex items-center mt-8 mb-[100px]"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Chat />
        </div>
      </div>
    </div>
  );
}
