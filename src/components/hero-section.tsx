import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative bg-red-600 py-16 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src="/angry-frog.png" alt="Angry Frog" width={400} height={400} className="w-full h-auto" />
          </div>
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">WHAT IS COMMUNITY-ROYALE?</h1>
            <p className="text-xl md:text-2xl">
              The most memeable token in existence. The dogs have had their day, it's time for the community to take
              reign.
            </p>
            <div className="flex space-x-4">
              <Button variant="secondary" size="lg" className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white font-bold">
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <Image src="/happy-frog.png" alt="Happy Frog" width={200} height={200} className="w-auto h-auto" />
      </div>
    </div>
  )
}

