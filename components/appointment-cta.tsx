import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export default function AppointmentCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-primary/5 p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Agende Sua Consulta</h2>
            <p className="text-muted-foreground">
              Entre em contato conosco para agendar sua consulta com nossos especialistas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-1">Telefone</h3>
              <p>(61) 3771-4040</p>
              <p>(61) 99665-0414</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-1">E-mail</h3>
              <p>institutoferrer@institutoferrer.com.br</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-1">Endereço</h3>
              <p>SGAS 616 - Asa Sul, Brasília - DF</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/agendar">Agendar Consulta</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
