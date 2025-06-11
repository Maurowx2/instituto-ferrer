"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Paciente",
    content:
      "Excelente atendimento! Fui tratada pelo Dr. Ferrer para um problema no joelho e o resultado foi incrível. Toda a equipe é muito atenciosa e profissional.",
    avatar: "/placeholder.svg?height=80&width=80&query=woman portrait",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Paciente",
    content:
      "Passei por uma cirurgia de coluna com o Dr. Marcos e não poderia estar mais satisfeito. O cuidado pré e pós-operatório foi excepcional. Recomendo fortemente o Instituto Ferrer.",
    avatar: "/placeholder.svg?height=80&width=80&query=man portrait",
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Paciente",
    content:
      "Minha filha foi atendida na ortopedia pediátrica e ficamos impressionados com o carinho e atenção dos profissionais. O diagnóstico foi preciso e o tratamento eficaz.",
    avatar: "/placeholder.svg?height=80&width=80&query=woman portrait 2",
  },
  {
    id: 4,
    name: "Roberto Almeida",
    role: "Paciente",
    content:
      "Após anos sofrendo com dores no quadril, finalmente encontrei solução no Instituto Ferrer. A equipe médica é extremamente competente e as instalações são modernas e confortáveis.",
    avatar: "/placeholder.svg?height=80&width=80&query=man portrait 2",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Quote className="h-8 w-8 text-primary opacity-50" />
                    <p className="text-lg italic">"{testimonial.content}"</p>
                    <div className="flex flex-col items-center pt-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
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
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <span className="sr-only">Depoimento {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
