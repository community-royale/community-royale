import Image from "next/image"

export function NewsTicker() {
  const news = [
    { id: 1, image: "/news1.png", alt: "News 1" },
    { id: 2, image: "/news2.png", alt: "News 2" },
    { id: 3, image: "/news3.png", alt: "News 3" },
    { id: 4, image: "/news4.png", alt: "News 4" },
    { id: 5, image: "/news5.png", alt: "News 5" },
  ]

  return (
    <div className="bg-black py-4 overflow-hidden">
      <div className="flex animate-scroll-left">
        {news.map((item) => (
          <div key={item.id} className="flex-shrink-0 mx-8">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.alt}
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

