import type { Metadata } from "next"
import ConveniosClientPage from "./ConveniosClientPage"

export const metadata: Metadata = {
  title: "Convênios | Instituto Ferrer",
  description: "Lista de convênios aceitos pelo Instituto Ferrer",
}

export default function ConveniosPage() {
  return <ConveniosClientPage />
}
