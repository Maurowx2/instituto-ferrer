import { Badge } from "@/components/ui/badge"
import FacilityGallery from "@/components/facility-gallery"

export default function FacilitySection() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-6">
          <div className="space-y-1">
            <Badge className="bg-primary/10 text-primary mb-1">Conheça Nossa Estrutura</Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Nosso Espaço</h2>
            <p className="text-sm text-muted-foreground">Estrutura moderna para o melhor atendimento</p>
          </div>
        </div>

        <FacilityGallery />
      </div>
    </section>
  )
}
