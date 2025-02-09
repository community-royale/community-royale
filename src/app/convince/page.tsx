import BottomNavigation from "@/components/bottom-navigation";
import ConvinceSection from "@/components/convince-section";
import { SparklesCore } from "@/components/sparkles";
import TopNavigation from "@/components/top-navigation";

export default function ConvincePage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden max-w-[375px] mx-auto">
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
      <ConvinceSection />
      <div className="relative z-10">
        <BottomNavigation />
      </div>
    </main>
  );
}
