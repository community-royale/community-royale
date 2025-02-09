"use client";
import BottomNavigation from "@/components/bottom-navigation";
import HomeSection from "@/components/home-section";
import { SparklesCore } from "@/components/sparkles";
import TopNavigation from "@/components/top-navigation";
import { initTelegramApp } from "@/lib/telegram";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initTelegram = async () => {
      try {
        const webApp = await initTelegramApp();
        // Store WebApp instance in global state if needed
        console.log("Telegram WebApp initialized");
      } catch (error) {
        console.error("Failed to initialize Telegram WebApp:", error);
      }
    };

    if (typeof window !== "undefined") {
      initTelegram();
    }
  }, []);
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden max-w-[375px] mx-auto">
      {/* Top Navigation */}
      <TopNavigation />
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <HomeSection />
      <div className="relative z-10">
        <BottomNavigation />
      </div>
    </main>
  );
}
