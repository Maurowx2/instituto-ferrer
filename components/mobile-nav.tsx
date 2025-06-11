"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" onClick={() => setOpen(false)} className="px-4 py-2 text-lg hover:bg-primary/5 rounded-md">
            Início
          </Link>
          <Link
            href="#quem-somos"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-lg hover:bg-primary/5 rounded-md"
          >
            Quem Somos
          </Link>
          <Link
            href="#corpo-clinico"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-lg hover:bg-primary/5 rounded-md"
          >
            Corpo Clínico
          </Link>
          <Link
            href="#especialidades"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-lg hover:bg-primary/5 rounded-md"
          >
            Especialidades
          </Link>
          <Link
            href="/convenios"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-lg hover:bg-primary/5 rounded-md"
          >
            Convênios
          </Link>
          <Link
            href="#contato"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-lg hover:bg-primary/5 rounded-md"
          >
            Contato
          </Link>
          <div className="mt-4">
            <Button asChild className="w-full" onClick={() => setOpen(false)}>
              <Link href="#contato">Agendar Consulta</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
