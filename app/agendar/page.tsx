import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import AppointmentForm from "@/components/appointment-form"

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/novo-logo.png"
                alt="Instituto Ferrer Logo"
                width={150}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Agende Sua Consulta</h1>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo para solicitar seu agendamento. Nossa equipe entrará em contato para
                confirmar a disponibilidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Instituto Ferrer. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
