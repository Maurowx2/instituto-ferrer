import Image from "next/image"

const insurances = [
  {
    name: "Unimed",
    logo: "/placeholder.svg?height=60&width=120&query=unimed logo",
  },
  {
    name: "Amil",
    logo: "/placeholder.svg?height=60&width=120&query=amil logo",
  },
  {
    name: "Bradesco Saúde",
    logo: "/placeholder.svg?height=60&width=120&query=bradesco saude logo",
  },
  {
    name: "SulAmérica",
    logo: "/placeholder.svg?height=60&width=120&query=sulamerica logo",
  },
  {
    name: "CASSI",
    logo: "/placeholder.svg?height=60&width=120&query=cassi logo",
  },
  {
    name: "Golden Cross",
    logo: "/placeholder.svg?height=60&width=120&query=golden cross logo",
  },
  {
    name: "Saúde Caixa",
    logo: "/placeholder.svg?height=60&width=120&query=saude caixa logo",
  },
  {
    name: "Geap",
    logo: "/placeholder.svg?height=60&width=120&query=geap logo",
  },
]

export default function InsuranceLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
      {insurances.map((insurance, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <Image
            src={insurance.logo || "/placeholder.svg"}
            alt={`Logo ${insurance.name}`}
            width={120}
            height={60}
            className="h-12 object-contain"
          />
        </div>
      ))}
    </div>
  )
}
