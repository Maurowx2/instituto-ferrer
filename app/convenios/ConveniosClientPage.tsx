"use client"

import { Card } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import { Search } from "lucide-react"
import MobileNav from "@/components/mobile-nav"
import Image from "next/image"
import { useState } from "react"

export default function ConveniosClientPage() {
  const convenios = [
    "AFEB BRASAL",
    "AFFEGO",
    "ASETE (ASTE)",
    "ASSEFAZ",
    "BACEN",
    "BRADESCO",
    "CAEME – GO",
    "CAESAN",
    "CAMED",
    "CARE PLUS",
    "CASEC (CODEVASF)",
    "CASEMBRAPA",
    "CNTI",
    "CASSI",
    "CONAB",
    "E-SAÚDE",
    "E-VIDA (ELETRONORTE)",
    "EMBRATEL – DEMAIS PLANOS",
    "FAPES (BNDES)",
    "FASCAL",
    "GDF SAÚDE - INAS",
    "GRAVIA",
    "LIFE EMPRESARIAL",
    "MEDISERVICE",
    "NOTRE DAME",
    "OMINT SAÚDE",
    "SAÚDE PETROBRAS",
    "PLAN ASSISTE (MPDFT – MPF – MPM – MPT)",
    "STM (PLAS/JMU)",
    "POSTAL SAÚDE",
    "PROASA",
    "PRÓ-SAÚDE (TJDFT)",
    "PRÓ-SER (STJ)",
    "PRÓ-SOCIAL (TRF)",
    "REAL GRANDEZA",
    "SAÚDE CAIXA",
    "SERPRO",
    "STF-MED",
    "T.R.E SAÚDE",
    "T.R.T SAÚDE",
    "T.S.T SAÚDE",
    "UNAFISCO",
  ]

  // Dividir os convênios em colunas para melhor organização
  const chunkSize = Math.ceil(convenios.length / 3)
  const conveniosChunks = Array(3)
    .fill(0)
    .map((_, i) => convenios.slice(i * chunkSize, (i + 1) * chunkSize))

  // Estado para o termo de pesquisa
  const [searchTerm, setSearchTerm] = useState("")

  // Filtrar convênios com base no termo de pesquisa
  const filteredConvenios = searchTerm
    ? convenios.filter((convenio) => convenio.toLowerCase().includes(searchTerm.toLowerCase()))
    : convenios

  // Reorganizar os convênios filtrados em colunas
  const filteredChunkSize = Math.ceil(filteredConvenios.length / 3)
  const filteredConveniosChunks = Array(3)
    .fill(0)
    .map((_, i) => filteredConvenios.slice(i * filteredChunkSize, (i + 1) * filteredChunkSize))

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/novo-logo.png" alt="Instituto Ferrer" width={40} height={40} className="h-8 w-auto" />
            <span className="text-lg font-bold text-primary">Instituto Ferrer</span>
          </div>
          <MainNav />
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Convênios Aceitos
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                O Instituto Ferrer trabalha com diversos convênios para proporcionar o melhor atendimento aos nossos
                pacientes.
              </p>
            </div>
          </div>
        </section>

        {/* Convênios Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary bg-white shadow-sm"
                    placeholder="Pesquisar convênio..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-8 mb-12">
                <h2 className="text-2xl font-bold mb-8 text-center">Lista de Convênios</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredConveniosChunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="space-y-3">
                      {chunk.map((convenio, index) => (
                        <Card
                          key={index}
                          className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200 hover:border-primary/20 hover:bg-primary/5"
                        >
                          <div className="py-3 px-4 text-center">
                            <p className="font-medium">{convenio}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ))}
                </div>
                {filteredConvenios.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Nenhum convênio encontrado para "{searchTerm}"</p>
                  </div>
                )}
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 text-center shadow-md relative mt-8 mb-4">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white px-4 py-1 rounded-full text-xs font-bold">
                  ATENÇÃO
                </div>
                <p className="text-sm font-medium text-gray-800 mt-2">
                  A Dra. Mariana Gonçalves Ferrer Oliveira atende consultas{" "}
                  <span className="italic font-bold">somente</span> na modalidade particular.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Instituto Ferrer. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
