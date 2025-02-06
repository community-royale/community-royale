import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function NftSections() {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-[#4CAF50] text-white">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-center text-red-500">JOIN PRE-MARKET</h2>
            <Image src="/pre-market.png" alt="Pre Market" width={300} height={300} className="w-full h-auto" />
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Image
                  key={i}
                  src={`/meme-${i + 1}.png`}
                  alt={`Meme ${i + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#4CAF50] text-white">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-400">
              10K ORDINALS
              <br />
              NFT CLUB
            </h2>
            <p className="text-center mb-4">COLLECT AND TRADE</p>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Image
                  key={i}
                  src={`/nft-${i + 1}.png`}
                  alt={`NFT ${i + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-auto rounded-full"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

