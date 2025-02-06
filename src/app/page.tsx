import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { NewsTicker } from "@/components/news-ticker"
import { NftSections } from "@/components/nft-sections"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E8F5E9]">
      <SiteHeader />
      <main>
        <HeroSection />
        <NewsTicker />
        <NftSections />
      </main>
    </div>
  )
}

