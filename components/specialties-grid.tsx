import Link from "next/link"
import { Activity, Bone, Footprints, Hand, Scan } from "lucide-react"

const specialties = [
  {
    name: "Ortopedia Geral",
    description: "Tratamento de problemas musculoesqueléticos em geral",
    icon: Bone,
    href: "/especialidades/ortopedia-geral",
  },
  {
    name: "Cirurgia do Quadril",
    description: "Tratamentos cirúrgicos para problemas no quadril",
    icon: Bone,
    href: "/especialidades/cirurgia-quadril",
  },
  {
    name: "Cirurgia do Joelho",
    description: "Procedimentos cirúrgicos para lesões e doenças do joelho",
    icon: Bone,
    href: "/especialidades/cirurgia-joelho",
  },
  {
    name: "Cirurgia da Coluna",
    description: "Tratamentos para problemas na coluna vertebral",
    icon: Scan,
    href: "/especialidades/cirurgia-coluna",
  },
  {
    name: "Medicina Esportiva",
    description: "Tratamento de lesões relacionadas à prática esportiva",
    icon: Activity,
    href: "/especialidades/medicina-esportiva",
  },
  {
    name: "Cirurgia da Mão",
    description: "Procedimentos especializados para problemas nas mãos",
    icon: Hand,
    href: "/especialidades/cirurgia-mao",
  },
  {
    name: "Cirurgia do Pé",
    description: "Tratamentos para problemas nos pés e tornozelos",
    icon: Footprints,
    href: "/especialidades/cirurgia-pe",
  },
]

export default function SpecialtiesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {specialties.map((specialty, index) => (
        <Link
          key={index}
          href={specialty.href}
          className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border transition-all hover:shadow-md hover:border-primary"
        >
          <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
            <specialty.icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{specialty.name}</h3>
          <p className="text-sm text-muted-foreground">{specialty.description}</p>
        </Link>
      ))}
    </div>
  )
}
