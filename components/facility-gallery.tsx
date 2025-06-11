"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

type FacilityImage = {
  src: string
  alt: string
  description: string
  category: string
}

const facilityImages: FacilityImage[] = [
  {
    src: "/facility/recepcao.jpeg",
    alt: "Recepção",
    description: "Nossa recepção moderna e acolhedora para melhor atendê-lo",
    category: "Áreas Comuns",
  },
  {
    src: "/facility/fachada.jpeg",
    alt: "Fachada",
    description: "Fachada do Instituto Ferrer no Centro Clínico Linea Vitta",
    category: "Áreas Comuns",
  },
  {
    src: "/facility/sala-espera.jpeg",
    alt: "Sala de espera",
    description: "Sala de espera confortável para nossos pacientes",
    category: "Áreas Comuns",
  },
  {
    src: "/facility/consultorio-1.jpeg",
    alt: "Consultório médico",
    description: "Consultório equipado para exames e procedimentos",
    category: "Consultórios",
  },
  {
    src: "/facility/consultorio-2.jpeg",
    alt: "Consultório médico",
    description: "Ambiente confortável para consultas e atendimentos",
    category: "Consultórios",
  },
  {
    src: "/facility/consultorio-3.jpeg",
    alt: "Consultório médico",
    description: "Consultório com design moderno e funcional",
    category: "Consultórios",
  },
  {
    src: "/facility/sala-procedimento.jpeg",
    alt: "Sala de procedimentos",
    description: "Sala equipada para procedimentos ortopédicos",
    category: "Procedimentos",
  },
  {
    src: "/facility/sala-ultrassom.jpeg",
    alt: "Sala de ultrassom",
    description: "Equipamentos de última geração para diagnóstico por imagem",
    category: "Procedimentos",
  },
  {
    src: "/facility/espaco-infantil.jpeg",
    alt: "Espaço infantil",
    description: "Espaço dedicado para o conforto dos nossos pequenos pacientes",
    category: "Áreas Especiais",
  },
  {
    src: "/facility/area-administrativa.jpeg",
    alt: "Área administrativa",
    description: "Área administrativa para melhor gestão do seu atendimento",
    category: "Áreas Administrativas",
  },
]

export default function FacilityGallery() {
  const [selectedImage, setSelectedImage] = useState<FacilityImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState(5)
  const [autoplay, setAutoplay] = useState(true)

  // Determinar quantos itens mostrar com base no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(2)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3)
      } else if (window.innerWidth < 1280) {
        setVisibleItems(4)
      } else {
        setVisibleItems(5)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Autoplay
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, autoplay])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (facilityImages.length - visibleItems + 1))
  }

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + (facilityImages.length - visibleItems + 1)) % (facilityImages.length - visibleItems + 1),
    )
  }

  return (
    <div className="relative">
      {/* Controles de navegação */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 shadow-md hover:bg-white"
          onClick={prev}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </Button>
      </div>

      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 shadow-md hover:bg-white"
          onClick={next}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próximo</span>
        </Button>
      </div>

      {/* Carrossel de imagens */}
      <div className="overflow-hidden mx-4">
        <div
          ref={scrollContainerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {facilityImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 px-1"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <div
                className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg h-full"
                onClick={() => setSelectedImage(image)}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium text-xs truncate">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-3 gap-1">
        {Array.from({ length: facilityImages.length - visibleItems + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? "w-4 bg-primary" : "w-1.5 bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>

      {/* Modal de visualização */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-1 sm:p-6 bg-white/95 backdrop-blur-sm">
          {selectedImage && (
            <div className="flex flex-col space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
              <div className="px-2 py-4">
                <Badge className="mb-2">{selectedImage.category}</Badge>
                <h3 className="text-xl font-bold">{selectedImage.alt}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
