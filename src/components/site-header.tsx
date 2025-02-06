import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#4CAF50] border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Community Royale" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold tracking-wider text-white">COMMUNITY-ROYALE</span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium text-white hover:text-white/80">
              Built On
            </Link>
            <Link href="#" className="text-sm font-medium text-white hover:text-white/80">
              Whitepaper
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="secondary" className="bg-[#FFC107] hover:bg-[#FFC107]/90 text-black font-bold">
            CONNECT WALLET
          </Button>
          <Button variant="secondary" className="bg-[#2196F3] hover:bg-[#2196F3]/90 text-white font-bold">
            JOIN PREMARKET
          </Button>
        </div>
      </div>
    </header>
  )
}

