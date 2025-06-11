import Link from "next/link"
import { Activity, Bone, Scan, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Importe o componente ResponsiveImage
import ResponsiveImage from "@/components/responsive-image"

const specialties = [
  {
    name: "Ortopedia Geral",
    description:
      "Diagnóstico e tratamento de problemas musculoesqueléticos em geral, incluindo fraturas, lesões e doenças articulares.",
    icon: Bone,
    image: "/ortopedia-geral.jpeg",
    href: "/especialidades/ortopedia-geral",
  },
  {
    name: "Cirurgia do Quadril",
    description:
      "Procedimentos cirúrgicos avançados para tratamento de artrose, fraturas e outras condições do quadril.",
    icon: Bone,
    image: "/hip-replacement-surgery.png",
    href: "/especialidades/cirurgia-quadril",
  },
  {
    name: "Cirurgia do Joelho",
    description:
      "Tratamentos minimamente invasivos e cirurgias para lesões ligamentares, meniscais e artrose do joelho.",
    icon: Bone,
    image: "/cirurgia-joelho.png",
    href: "/especialidades/cirurgia-joelho",
  },
  {
    name: "Cirurgia da Coluna",
    description:
      "Abordagens modernas para tratamento de hérnias de disco, estenose e outras patologias da coluna vertebral.",
    icon: Scan,
    image: "/cirurgia-coluna.jpeg",
    href: "/especialidades/cirurgia-coluna",
  },
  {
    name: "Medicina Esportiva",
    description:
      "Prevenção, diagnóstico e tratamento de lesões relacionadas à prática esportiva, com foco na recuperação rápida.",
    icon: Activity,
    image: "/placeholder-odfej.png",
    href: "/especialidades/medicina-esportiva",
  },
]

export default function ServiceCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {specialties.map((specialty, index) => (
        <Card
          key={index}
          className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
        >
          <div className="relative h-48 overflow-hidden">
            <ResponsiveImage
              src={specialty.image || "/placeholder.svg"}
              alt={specialty.name}
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <CardContent className="p-6 relative">
            <div className="absolute -top-8 left-6 bg-primary text-white p-3 rounded-xl shadow-lg">
              <specialty.icon className="h-6 w-6" />
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{specialty.name}</h3>
              <p className="text-muted-foreground mb-4">{specialty.description}</p>
              <Link
                href={specialty.href}
                className="inline-flex items-center text-primary font-medium group-hover:underline"
              >
                Saiba mais
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
