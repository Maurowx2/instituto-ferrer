import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const doctors = [
  {
    id: 1,
    name: "Dr. Marcos Ferrer",
    specialty: "Ortopedia Geral",
    image: "/professional-male-doctor.png",
    education: "CRM-DF 12345",
  },
  {
    id: 2,
    name: "Dra. Ana Luiza Costa",
    specialty: "Ortopedia Pediátrica",
    image: "/professional-female-doctor.png",
    education: "CRM-DF 23456",
  },
]

export default function DoctorHighlights() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      {doctors.map((doctor) => (
        <Card key={doctor.id} className="overflow-hidden border-0 shadow-md">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-1/2">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                <p className="text-sm text-muted-foreground mb-4">{doctor.education}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/corpo-clinico/${doctor.id}`}>Ver Perfil</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
