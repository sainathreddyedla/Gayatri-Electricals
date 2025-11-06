"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClientLogo {
  name: string
  logo: string
}

interface ClientLogoCarouselProps {
  clients: ClientLogo[]
}

export function ClientLogoCarousel({ clients }: ClientLogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const canScrollLeft = currentIndex > 0
  const canScrollRight = currentIndex + itemsPerView < clients.length

  const scrollLeft = () => {
    if (canScrollLeft) {
      const scrollAmount = Math.min(3, currentIndex)
      setCurrentIndex((prev) => Math.max(0, prev - scrollAmount))
    }
  }

  const scrollRight = () => {
    if (canScrollRight) {
      const remaining = clients.length - (currentIndex + itemsPerView)
      const scrollAmount = Math.min(3, remaining)
      setCurrentIndex((prev) => Math.min(clients.length - itemsPerView, prev + scrollAmount))
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="shrink-0 disabled:opacity-30 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center justify-center rounded-lg border border-border bg-card p-8"
                style={{ width: `calc(${100 / itemsPerView}% - ${(6 * (itemsPerView - 1)) / itemsPerView}px)` }}
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index < itemsPerView}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="shrink-0 disabled:opacity-30 bg-transparent"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Indicator dots */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: Math.ceil(clients.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerView)}
            className={`h-2 w-2 rounded-full transition-all ${
              Math.floor(currentIndex / itemsPerView) === index ? "w-6 bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
