"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CalendarIcon,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import { useEffect } from "react"

import AppointmentForm from "@/components/appointment-form"
import SpecialtyShowcase from "@/components/specialty-showcase"
import MainNav from "@/components/main-nav"
import MobileNav from "@/components/mobile-nav"
import FacilitySection from "@/components/facility-section"

// Função para garantir que o scroll para seções sempre funcione
function useScrollToSection() {
  useEffect(() => {
    const handleScrollToSection = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash && target.hash.startsWith("#")) {
        e.preventDefault()
        const sectionId = target.hash.substring(1)
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    // Adicionar event listener para todos os links com hash
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScrollToSection)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScrollToSection)
      })
    }
  }, [])
}

export default function Home() {
  useScrollToSection()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation - Clean, Elegant Design */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-90">
              <Image
                src="/images/novo-logo.png"
                alt="Instituto Ferrer Logo"
                width={220}
                height={100}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <MainNav />

            {/* Contact & CTA */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <a
                  href="tel:+556137714040"
                  className="text-lg font-bold text-primary hover:text-primary/90 transition-colors"
                >
                  (61) 3771-4040
                </a>
              </div>

              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#EAB308] hover:bg-[#ca9a07] text-[#003580] shadow-sm"
                onClick={() => {
                  const section = document.getElementById("contato")
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
              >
                <Link href="#contato" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Agendar Consulta</span>
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <MobileNav />
          </div>
        </div>

        {/* Progress indicator for scrolling */}
        <div className="h-0.5 w-full bg-gray-100 overflow-hidden">
          <div
            className="h-full bg-primary origin-left"
            style={{
              width: "var(--scroll-width, 0%)",
              transition: "width 0.2s ease-out",
            }}
          ></div>
        </div>
      </header>

      {/* Scroll Progress Indicator - Client Component */}
      <ClientScrollProgress />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/90 overflow-hidden">
          <div className="container mx-auto relative z-10">
            {/* Layout Mobile */}
            <div className="lg:hidden py-12 md:py-16">
              <div className="text-center space-y-6 text-white max-w-4xl mx-auto">
                <Badge className="bg-yellow-500 hover:bg-yellow-600 text-primary px-4 py-1 text-sm rounded-full">
                  Clínica de Excelência em Brasília
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Excelência em Ortopedia para sua Saúde e Bem-estar
                </h1>

                {/* Imagem posicionada aqui apenas no mobile */}
                <div className="relative max-w-md mx-auto my-8">
                  <div className="absolute -top-3 -left-3 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                    <div className="relative rounded-xl overflow-hidden">
                      <Image
                        src="/doctor-team.png"
                        alt="Equipe médica do Instituto Ferrer"
                        width={400}
                        height={300}
                        className="object-cover w-full h-[250px]"
                        priority
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
                </div>

                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Tratamentos ortopédicos avançados com uma equipe médica especializada e tecnologia de ponta para
                  cuidar da sua saúde.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="bg-[#EAB308] hover:bg-[#ca9a07] text-white rounded-full font-bold shadow-lg px-8 py-6 text-lg relative animate-pulse hover:animate-none"
                  onClick={() => {
                    const section = document.getElementById("contato")
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  }}
                >
                  <Link href="#contato" className="flex items-center">
                    <span className="mr-2 text-[#003580] font-normal">Agendar Consulta</span>
                    <Calendar className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-white/20 text-white border-white hover:bg-white/40 rounded-full font-semibold px-8 py-6 text-lg shadow-md backdrop-blur-sm"
                >
                  <Link href="#especialidades" className="flex items-center">
                    <span className="mr-2">Ver Especialidades</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Layout Desktop */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-16 lg:py-24">
                <div className="space-y-4 lg:space-y-6 text-white">
                  <Badge className="bg-yellow-500 hover:bg-yellow-600 text-primary px-4 py-1 text-sm rounded-full">
                    Clínica de Excelência em Brasília
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Excelência em Ortopedia para sua Saúde e Bem-estar
                  </h1>
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4 lg:pt-6">
                    <Button
                      size="lg"
                      asChild
                      className="bg-[#EAB308] hover:bg-[#ca9a07] text-white rounded-full font-bold shadow-lg px-8 py-6 text-lg relative animate-pulse hover:animate-none"
                      onClick={() => {
                        const section = document.getElementById("contato")
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                      }}
                    >
                      <Link href="#contato" className="flex items-center">
                        <span className="mr-2 text-[#003580] font-normal">Agendar Consulta</span>
                        <Calendar className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="bg-white/20 text-white border-white hover:bg-white/40 rounded-full font-semibold px-8 py-6 text-lg shadow-md backdrop-blur-sm"
                    >
                      <Link href="#especialidades" className="flex items-center">
                        <span className="mr-2">Ver Especialidades</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-3 -left-3 lg:-top-6 lg:-left-6 w-32 h-32 lg:w-72 lg:h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-2 lg:p-3 shadow-2xl">
                    <div className="relative rounded-xl lg:rounded-2xl overflow-hidden">
                      <Image
                        src="/doctor-team.png"
                        alt="Equipe médica do Instituto Ferrer"
                        width={500}
                        height={600}
                        className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
                        priority
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 lg:-bottom-10 lg:-right-10 w-32 h-32 lg:w-64 lg:h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="quem-somos" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    {/* Carrossel de imagens */}
                    <div className="relative h-[500px]">
                      {/* Imagem principal */}
                      <Image
                        src="/facility/consultorio-1.jpeg"
                        alt="Consultório do Instituto Ferrer"
                        width={500}
                        height={600}
                        className="object-cover h-[500px] w-full"
                      />

                      {/* Imagens adicionais que aparecem com fade-in/fade-out */}
                      <div className="absolute inset-0 opacity-0 animate-[fadeIn_15s_ease-in-out_3s_infinite]">
                        <Image
                          src="/facility/sala-procedimento.jpeg"
                          alt="Sala de procedimentos do Instituto Ferrer"
                          width={500}
                          height={600}
                          className="object-cover h-[500px] w-full"
                        />
                      </div>

                      <div className="absolute inset-0 opacity-0 animate-[fadeIn_15s_ease-in-out_6s_infinite]">
                        <Image
                          src="/facility/sala-ultrassom.jpeg"
                          alt="Sala de ultrassom do Instituto Ferrer"
                          width={500}
                          height={600}
                          className="object-cover h-[500px] w-full"
                        />
                      </div>

                      <div className="absolute inset-0 opacity-0 animate-[fadeIn_15s_ease-in-out_9s_infinite]">
                        <Image
                          src="/facility/recepcao.jpeg"
                          alt="Recepção do Instituto Ferrer"
                          width={500}
                          height={600}
                          className="object-cover h-[500px] w-full"
                        />
                      </div>

                      <div className="absolute inset-0 opacity-0 animate-[fadeIn_15s_ease-in-out_12s_infinite]">
                        <Image
                          src="/facility/fachada.jpeg"
                          alt="Fachada do Instituto Ferrer"
                          width={500}
                          height={600}
                          className="object-cover h-[500px] w-full"
                        />
                      </div>

                      <div className="absolute inset-0 opacity-0 animate-[fadeIn_15s_ease-in-out_15s_infinite]">
                        <Image
                          src="/facility/consultorio-2.jpeg"
                          alt="Consultório 2 do Instituto Ferrer"
                          width={500}
                          height={600}
                          className="object-cover h-[500px] w-full"
                        />
                      </div>

                      <div className="absolute inset-0 opacity-0 animate-[fadeIn_15s_ease-in-out_18s_infinite]">
                        <Image
                          src="/facility/consultorio-3.jpeg"
                          alt="Consultório 3 do Instituto Ferrer"
                          width={500}
                          height={600}
                          className="object-cover h-[500px] w-full"
                        />
                      </div>

                      <div className="absolute inset-0 opacity-0 animate-[fadeIn_15s_ease-in-out_21s_infinite]">
                        <Image
                          src="/facility/area-administrativa.jpeg"
                          alt="Área administrativa do Instituto Ferrer"
                          width={500}
                          height={600}
                          className="object-cover h-[500px] w-full"
                        />
                      </div>

                      <div className="absolute inset-0 opacity-0 animate-[fadeIn_15s_ease-in-out_24s_infinite]">
                        <Image
                          src="/facility/espaco-infantil.jpeg"
                          alt="Espaço infantil do Instituto Ferrer"
                          width={500}
                          height={600}
                          className="object-cover h-[500px] w-full"
                        />
                      </div>

                      <div className="absolute inset-0 opacity-0 animate-[fadeIn_15s_ease-in-out_27s_infinite]">
                        <Image
                          src="/facility/sala-espera.jpeg"
                          alt="Sala de espera do Instituto Ferrer"
                          width={500}
                          height={600}
                          className="object-cover h-[500px] w-full"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <Badge className="bg-yellow-500 text-primary mb-2">Instituto Ferrer</Badge>
                      <h3 className="text-2xl font-bold text-white mb-2">Tecnologia e Inovação</h3>
                      <p className="text-white/90">Equipamentos de última geração para diagnósticos precisos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <Badge className="bg-primary/10 text-primary mb-4">Por que nos escolher</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Excelência em Ortopedia e Traumatologia</h2>
                  <p className="text-lg text-muted-foreground">
                    O Instituto Ferrer é referência em Brasília, combinando experiência clínica, tecnologia avançada e
                    atendimento humanizado.
                  </p>
                </div>

                <div className="grid gap-6">
                  {[
                    {
                      title: "Equipe Médica Especializada",
                      description:
                        "Profissionais com formação nas melhores instituições e constante atualização científica.",
                    },
                    {
                      title: "Tecnologia de Ponta",
                      description:
                        "Equipamentos modernos para diagnósticos precisos e tratamentos minimamente invasivos.",
                    },
                    {
                      title: "Atendimento Humanizado",
                      description: "Cuidado centrado no paciente, com atenção às necessidades individuais.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section
          id="especialidades"
          className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden scroll-mt-20"
        >
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/10 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 border border-yellow-500/10 rounded-full opacity-20"></div>

          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-primary/10 text-primary mb-4">Nossas Especialidades</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Tratamentos Ortopédicos Especializados
              </h2>
              <p className="text-lg text-muted-foreground">
                Oferecemos uma ampla gama de serviços ortopédicos com profissionais altamente qualificados.
              </p>
            </div>

            <SpecialtyShowcase />

            <div className="flex justify-center mt-12">
              <Button
                asChild
                size="lg"
                className="rounded-full hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group bg-[rgba(234,179,8,1)]"
                onClick={() => {
                  const section = document.getElementById("contato")
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
              >
                <Link href="#contato" className="flex items-center">
                  <span className="mr-2 text-[rgba(24,66,116,1)]">Agendar Consulta</span>
                  <CalendarIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform text-[rgba(28,68,114,1)]" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Facility Section - NOVA SEÇÃO */}
        <FacilitySection />

        {/* Doctors Section */}
        <section
          id="corpo-clinico"
          className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden scroll-mt-20"
        >
          {/* Elementos decorativos de fundo */}
          <div className="absolute top-0 left-0 w-full h-64 bg-primary/5 -skew-y-3 transform origin-top-right"></div>
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-yellow-500/5 blur-3xl"></div>

          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-primary/10 text-primary mb-4">Corpo Clínico</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Nossa Equipe Médica</h2>
              <p className="text-lg text-muted-foreground">
                Profissionais altamente qualificados, dedicados a oferecer o melhor tratamento ortopédico.
              </p>
            </div>

            {/* Seção 1 - Todos os médicos em uma única fileira */}
            <div className="mb-12 overflow-x-auto pb-6">
              <div className="flex space-x-6 min-w-max">
                {/* Dr. Luciano Ferrer */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dr-luciano-de-almeida-ferrer.jpg"
                        alt="Dr. Luciano de Almeida Ferrer"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Ortopedia Geral</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Dr. Luciano de Almeida Ferrer
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 12345</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Dra. Luciana Ferrer */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dra-luciana-feitosa-ferrer.jpg"
                        alt="Dra. Luciana Feitosa Ferrer"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Cirurgia do Joelho</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Dra. Luciana Feitosa Ferrer
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 23456</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Dr. Marcelo de Almeida Ferrer */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dr-marcelo-de-almeida-ferrer.jpg"
                        alt="Dr. Marcelo de Almeida Ferrer"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Cirurgia do Quadril</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Dr. Marcelo de Almeida Ferrer
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 56789</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Dr. Fabricio */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dr-fabricio-lenza-chaves.jpeg"
                        alt="Dr. Fabricio Lenza Chaves"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Cirurgia da Coluna</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Dr. Fabricio Lenza Chaves
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 67890</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Dr. Itamar */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dr-itamar.jpeg"
                        alt="Dr. Itamar"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Ortopedia Geral</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Dr. Itamar</h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 78901</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Dr. Guilherme */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dr-guilherme-carvalho.jpeg"
                        alt="Dr. Guilherme Carvalho"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Cirurgia do Pé e Tornozelo</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Dr. Guilherme Carvalho
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 89012</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Dra. Ana Carolina */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dra-ana-carolina.jpeg"
                        alt="Dra. Ana Carolina"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Cirurgia da Mão</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Dra. Ana Carolina
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 90123</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Dr. Leonardo Paiva */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dr-leonardo-paiva.jpeg"
                        alt="Dr. Leonardo Paiva"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Ortopedia Geral</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Dr. Leonardo Paiva
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 12345</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Dr. Kaleu Nery */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dr-kaleu-nery.jpeg"
                        alt="Dr. Kaleu Nery"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Medicina Esportiva</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Dr. Kaleu Nery
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 23456</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Dr. André Kim */}
                <div className="group w-72">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/dr-andre-kim.jpeg"
                        alt="Dr. André Kim"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-primary text-white mb-2">Cirurgia do Joelho</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Dr. André Kim
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">CRM-DF 34567</p>
                      <div className="mt-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#EAB308] hover:bg-[#ca9a07] shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => {
                  const section = document.getElementById("contato")
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
              >
                <Link href="#contato" className="flex items-center">
                  <span className="mr-2 text-[#003580] font-bold">Agendar Consulta</span>
                  <Calendar className="h-4 w-4 group-hover:translate-x-1 transition-transform text-[#003580]" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Appointment Section */}
        <section
          id="contato"
          className="py-12 md:py-16 lg:py-24 scroll-mt-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50"
        >
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-yellow-500/10 rounded-full opacity-20"></div>

          <div className="container mx-auto relative z-10 px-4">
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Agendamento</Badge>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Agende Sua Consulta
              </h2>
              <p className="text-base md:text-lg text-muted-foreground px-4">
                Preencha o formulário abaixo para solicitar seu agendamento. Nossa equipe entrará em contato para
                confirmar a disponibilidade.
              </p>
            </div>

            {/* Mobile Layout */}
            <div className="block lg:hidden space-y-6">
              {/* Contact Information - Mobile */}
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-100/50">
                <h3 className="text-lg font-bold mb-4 text-center">Informações de Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider">Telefone</p>
                      <p className="font-bold text-sm text-gray-800 truncate">(61) 3771-4040</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider">WhatsApp</p>
                      <p className="font-bold text-sm text-gray-800 truncate">(61) 99665-0414</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider">E-mail</p>
                      <p className="font-bold text-xs text-gray-800 break-all">
                        institutoferrer@institutoferrer.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mt-1">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider">Endereço</p>
                      <p className="text-xs text-gray-800 leading-relaxed">
                        Centro Clínico Linea Vitta, SGAS 616 - Conjunto A, Bloco B - Salas 1/9, Asa Sul, Brasília - DF
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-primary/70 uppercase tracking-wider">Horário</p>
                      <p className="font-bold text-xs text-gray-800">Seg-Sex: 8h-18h | Sáb: 8h-12h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Form - Mobile */}
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative">
                  <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">Preencha seus dados</h3>
                  <AppointmentForm />
                </div>
              </div>

              {/* Map - Mobile */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/map-location.png"
                  alt="Localização do Instituto Ferrer"
                  width={600}
                  height={200}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Nossa Localização</h3>
                    <p className="text-white/80 mb-3 text-sm">Visite-nos em nosso endereço</p>
                    <Button asChild variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                      <Link href="https://maps.google.com" target="_blank" className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span className="text-sm">Ver no Google Maps</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-shadow duration-300">
                <div className="grid gap-8">
                  <div className="flex items-center gap-5 group hover:bg-primary/5 p-3 rounded-xl transition-colors">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-md">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">Telefone</p>
                      <p className="font-bold text-xl text-gray-800">(61) 3771-4040</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group hover:bg-primary/5 p-3 rounded-xl transition-colors">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-md">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">WhatsApp</p>
                      <p className="font-bold text-xl text-gray-800">(61) 99665-0414</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group hover:bg-primary/5 p-3 rounded-xl transition-colors">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-md">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">E-mail</p>
                      <p className="font-bold text-gray-800">institutoferrer@institutoferrer.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group hover:bg-primary/5 p-3 rounded-xl transition-colors">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-md mt-1">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">Endereço</p>
                      <p className="text-gray-800">
                        Centro Clínico Linea Vitta, SGAS 616 - Conjunto A, Bloco B - Salas 1/9, Asa Sul, Brasília - DF
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group hover:bg-primary/5 p-3 rounded-xl transition-colors">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-md">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="font-bold text-gray-800">Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-8 rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src="/map-location.png"
                    alt="Localização do Instituto Ferrer"
                    width={600}
                    height={300}
                    className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-xl mb-2">Nossa Localização</h3>
                      <p className="text-white/80 mb-4">Visite-nos em nosso endereço</p>
                      <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                        <Link href="https://maps.google.com" target="_blank" className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Ver no Google Maps
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Preencha seus dados</h3>
                  <AppointmentForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="container mx-auto py-12">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <Image
                src="/images/novo-logo.png"
                alt="Instituto Ferrer Logo"
                width={200}
                height={90}
                className="h-20 w-auto brightness-0 invert"
              />
              <p className="text-white/80 mt-4">
                Excelência em ortopedia e traumatologia, oferecendo atendimento especializado com profissionais
                altamente qualificados.
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Links Rápidos</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Início
                </Link>
                <Link href="#quem-somos" className="text-white/80 hover:text-white transition-colors">
                  Quem Somos
                </Link>
                <Link href="#corpo-clinico" className="text-white/80 hover:text-white transition-colors">
                  Corpo Clínico
                </Link>
                <Link href="#especialidades" className="text-white/80 hover:text-white transition-colors">
                  Especialidades
                </Link>
                <Link href="#contato" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Especialidades</h3>
              <div className="grid grid-cols-1 gap-2">
                <Link
                  href="/especialidades/ortopedia-geral"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Ortopedia Geral
                </Link>
                <Link
                  href="/especialidades/cirurgia-joelho"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Cirurgia do Joelho
                </Link>
                <Link
                  href="/especialidades/cirurgia-quadril"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Cirurgia do Quadril
                </Link>
                <Link
                  href="/especialidades/cirurgia-coluna"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Cirurgia da Coluna
                </Link>
                <Link
                  href="/especialidades/medicina-esportiva"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Medicina Esportiva
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Instituto Ferrer. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/politica-privacidade" className="text-sm text-white/60 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-sm text-white/60 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
// Client component for scroll progress
;("use client")

function ClientScrollProgress() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      document.documentElement.style.setProperty("--scroll-width", `${scrollPercent}%`)

      // Add shadow based on scroll position
      const header = document.querySelector("header")
      if (header) {
        if (scrollTop > 10) {
          header.classList.add("shadow-md")
          header.classList.remove("shadow-sm")
        } else {
          header.classList.remove("shadow-md")
          header.classList.add("shadow-sm")
        }
      }
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return null
}
