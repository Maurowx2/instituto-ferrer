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
    role: "Paciente - Cirurgia do Joelho",
    content:
      "Excelente atendimento! Fui tratada pelo Dr. Ferrer para um problema no joelho e o resultado foi incrível. Toda a equipe é muito atenciosa e profissional.",
    avatar: "/testimonial-1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Paciente - Cirurgia da Coluna",
    content:
      "Passei por uma cirurgia de coluna com o Dr. Marcos e não poderia estar mais satisfeito. O cuidado pré e pós-operatório foi excepcional. A dor que me acompanhava há anos desapareceu.",
    avatar: "/testimonial-2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Mãe de Paciente - Ortopedia Pediátrica",
    content:
      "Minha filha foi atendida na ortopedia pediátrica e ficamos impressionados com o carinho e atenção dos profissionais. O diagnóstico foi preciso e o tratamento eficaz.",
    avatar: "/testimonial-3.png",
    rating: 5,
  },
]

export default function TestimonialSlider() {
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
    }, 6000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none bg-white/10 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <Quote className="h-12 w-12 text-yellow-500 opacity-80" />
                    <p className="text-xl md:text-2xl italic text-white leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex flex-col items-center pt-6">
                      <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white/20">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-xl text-white">{testimonial.name}</h4>
                        <p className="text-white/80">{testimonial.role}</p>
                      </div>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5 text-yellow-500"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/20 border-white/10 text-white hover:bg-white/30 hover:text-white"
          onClick={prev}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/20 border-white/10 text-white hover:bg-white/30 hover:text-white"
          onClick={next}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Próximo</span>
        </Button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${index === current ? "bg-white w-6" : "bg-white/40"}`}
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
