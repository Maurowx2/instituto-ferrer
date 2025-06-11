"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const doctors = [
  {
    id: 1,
    name: "Dr. Marcos Ferrer",
    specialty: "Ortopedia Geral",
    subSpecialty: "Cirurgia do Joelho",
    image: "/placeholder.svg?height=400&width=300&query=professional male doctor portrait",
    education: "CRM-DF 12345",
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 2,
    name: "Dra. Ana Luiza Costa",
    specialty: "Ortopedia Pediátrica",
    subSpecialty: "Deformidades Congênitas",
    image: "/placeholder.svg?height=400&width=300&query=professional female doctor portrait",
    education: "CRM-DF 23456",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: "Dr. Roberto Mendes",
    specialty: "Cirurgia da Coluna",
    subSpecialty: "Tratamento Minimamente Invasivo",
    image: "/placeholder.svg?height=400&width=300&query=professional male doctor portrait 2",
    education: "CRM-DF 34567",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: "Dra. Carla Almeida",
    specialty: "Medicina Esportiva",
    subSpecialty: "Lesões Ligamentares",
    image: "/placeholder.svg?height=400&width=300&query=professional female doctor portrait 2",
    education: "CRM-DF 45678",
    rating: 4.7,
    reviews: 87,
  },
  {
    id: 5,
    name: "Dr. Paulo Silveira",
    specialty: "Cirurgia do Quadril",
    subSpecialty: "Artroplastia Total",
    image: "/placeholder.svg?height=400&width=300&query=professional male doctor portrait 3",
    education: "CRM-DF 56789",
    rating: 4.8,
    reviews: 112,
  },
]

export default function DoctorCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  const next = () => {
    setCurrent((current) => (current + 1) % (doctors.length - visibleItems + 1))
  }

  const prev = () => {
    setCurrent((current) => (current - 1 + (doctors.length - visibleItems + 1)) % (doctors.length - visibleItems + 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * (100 / visibleItems)}%)` }}
        >
          {doctors.map((doctor) => (
            <div key={doctor.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-0 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <Badge className="bg-primary mb-2">{doctor.specialty}</Badge>
                      <div className="flex items-center gap-1 text-yellow-400 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= Math.floor(doctor.rating) ? "fill-current" : ""}`}
                          />
                        ))}
                        <span className="text-white text-sm ml-1">
                          {doctor.rating} ({doctor.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-primary font-medium mb-2">{doctor.subSpecialty}</p>
                    <p className="text-sm text-muted-foreground mb-4">{doctor.education}</p>
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link href={`/corpo-clinico/${doctor.id}`}>Ver Perfil Completo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={prev}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={next}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próximo</span>
        </Button>
      </div>

      <div className="flex justify-center mt-4 gap-1">
        {Array.from({ length: doctors.length - visibleItems + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
