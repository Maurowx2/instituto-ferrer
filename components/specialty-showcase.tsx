import { Card } from "@/components/ui/card"

// Importe o componente ResponsiveImage
import ResponsiveImage from "@/components/responsive-image"

const specialties = [
  {
    name: "Ortopedia Geral",
    description:
      "Diagnóstico e tratamento de problemas musculoesqueléticos em geral, incluindo fraturas, lesões e doenças articulares.",
    image: "/ortopedia-geral.jpeg",
    href: "/especialidades/ortopedia-geral",
  },
  {
    name: "Cirurgia do Joelho",
    description:
      "Tratamentos minimamente invasivos e cirurgias para lesões ligamentares, meniscais e artrose do joelho.",
    image: "/cirurgia-joelho.png",
    href: "/especialidades/cirurgia-joelho",
  },
  {
    name: "Cirurgia da Coluna",
    description:
      "Abordagens modernas para tratamento de hérnias de disco, estenose e outras patologias da coluna vertebral.",
    image: "/cirurgia-coluna.jpeg",
    href: "/especialidades/cirurgia-coluna",
  },
  {
    name: "Exames",
    description:
      "Exames de diagnóstico por imagem e procedimentos específicos para avaliação precisa de condições ortopédicas.",
    image: "/facility/sala-ultrassom.jpeg",
    href: "/especialidades/exames",
  },
]

export default function SpecialtyShowcase() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
      {specialties.map((specialty, index) => (
        <Card
          key={index}
          className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
        >
          <div className="relative h-56 overflow-hidden">
            <ResponsiveImage
              src={specialty.image || "/placeholder.svg"}
              alt={specialty.name}
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">{specialty.name}</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
