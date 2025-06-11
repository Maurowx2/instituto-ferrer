import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const doctors = [
  {
    id: 1,
    name: "Dr. Marcelo de Almeida Ferrer",
    specialty: "Ortopedia Geral",
    subSpecialty: "Cirurgia do Joelho",
    image: "/dr-marcelo-ferrer.png",
    education: "CRM-DF 12345",
  },
  {
    id: 2,
    name: "Dra. Ana Luiza Costa",
    specialty: "Ortopedia Pediátrica",
    subSpecialty: "Deformidades Congênitas",
    image: "/doctor-female.png",
    education: "CRM-DF 23456",
  },
]

export default function DoctorShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {doctors.map((doctor) => (
        <Card
          key={doctor.id}
          className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300"
        >
          <CardContent className="p-0">
            <div className="flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <Badge className="bg-primary mb-2">{doctor.specialty}</Badge>
                  <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-white/90">{doctor.subSpecialty}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-4">{doctor.education}</p>
                  <p className="mb-4">
                    Especialista com vasta experiência em diagnóstico e tratamento de problemas ortopédicos, utilizando
                    técnicas modernas e minimamente invasivas.
                  </p>
                </div>
                <Button asChild variant="outline" className="w-full mt-2">
                  <Link href={`/corpo-clinico/${doctor.id}`}>Ver Perfil Completo</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
