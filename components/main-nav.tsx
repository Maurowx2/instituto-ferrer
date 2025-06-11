"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const specialties = [
  {
    title: "Ortopedia Geral",
    href: "/especialidades/ortopedia-geral",
    description: "Diagnóstico e tratamento de problemas musculoesqueléticos em geral.",
  },
  {
    title: "Cirurgia do Quadril",
    href: "/especialidades/cirurgia-quadril",
    description: "Procedimentos cirúrgicos avançados para tratamento de artrose e fraturas.",
  },
  {
    title: "Cirurgia do Joelho",
    href: "/especialidades/cirurgia-joelho",
    description: "Tratamentos para lesões ligamentares, meniscais e artrose do joelho.",
  },
]

export default function MainNav() {
  const pathname = usePathname()

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), pathname === "/" && "text-primary font-medium")}
            >
              Início
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#quem-somos" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), pathname === "/quem-somos" && "text-primary font-medium")}
            >
              Quem Somos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#corpo-clinico" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), pathname === "/corpo-clinico" && "text-primary font-medium")}
            >
              Corpo Clínico
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={pathname.startsWith("/especialidades") ? "text-primary font-medium" : ""}>
            Especialidades
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#especialidades"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Nossas Especialidades</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Conheça todas as especialidades oferecidas pelo Instituto Ferrer
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {specialties.map((specialty) => (
                <ListItem key={specialty.title} title={specialty.title} href={specialty.href}>
                  {specialty.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/convenios" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), pathname === "/convenios" && "text-primary font-medium")}
            >
              Convênios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contato" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), pathname === "/contato" && "text-primary font-medium")}
            >
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
