import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const specialties = [
  {
    name: "Ortopedia Geral",
    image: "/orthopedic-exam.png",
    href: "/especialidades/ortopedia-geral",
  },
  {
    name: "Cirurgia do Joelho",
    image: "/placeholder.svg?key=fkhn4",
    href: "/especialidades/cirurgia-joelho",
  },
  {
    name: "Cirurgia da Coluna",
    image: "/placeholder.svg?key=qg9jr",
    href: "/especialidades/cirurgia-coluna",
  },
]

export default function SpecialtyCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {specialties.map((specialty, index) => (
        <Card
          key={index}
          className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={specialty.image || "/placeholder.svg"}
              alt={specialty.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">{specialty.name}</h3>
            </div>
          </div>
          <CardContent className="p-4">
            <Link
              href={specialty.href}
              className="inline-flex items-center text-primary font-medium group-hover:underline"
            >
              Saiba mais
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
