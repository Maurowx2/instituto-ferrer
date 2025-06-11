"use client"

import type React from "react"

import { useState } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "",
    description: "",
    time: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date) {
      toast({
        title: "Data obrigatória",
        description: "Por favor, selecione uma data para o agendamento.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Format the data for WhatsApp
      const formattedDate = date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : ""

      // Create a professional message for WhatsApp
      const message = `Olá! Gostaria de agendar uma consulta:

📋 *DADOS DO AGENDAMENTO*
👤 Nome: ${formData.name}
📱 Telefone: ${formData.phone}
📧 Email: ${formData.email}
🏥 Especialidade: ${formData.specialty}
📅 Data pretendida: ${formattedDate}
⏰ Horário pretendido: ${formData.time}
💬 Motivo da consulta: ${formData.description}

Aguardo contato para confirmação da consulta.`

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message)

      // Open WhatsApp in a new window with the pre-filled message
      window.open(`https://wa.me/5561996650414?text=${encodedMessage}`, "_blank")

      // Show success message
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Em breve entraremos em contato para confirmar seu agendamento.",
      })

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        specialty: "",
        description: "",
        time: "",
      })
      setDate(undefined)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Erro ao enviar solicitação",
        description: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm md:text-base font-medium">
          Nome Completo *
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu nome completo"
          className="h-10 md:h-12 text-sm"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm md:text-base font-medium">
            Telefone/WhatsApp *
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            className="h-10 md:h-12 text-sm"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm md:text-base font-medium">
            E-mail *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="h-10 md:h-12 text-sm"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialty" className="text-sm md:text-base font-medium">
          Especialidade *
        </Label>
        <Select value={formData.specialty} onValueChange={(value) => handleSelectChange("specialty", value)} required>
          <SelectTrigger id="specialty" className="h-10 md:h-12 text-sm">
            <SelectValue placeholder="Selecione a especialidade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ortopedia-geral">Ortopedia Geral</SelectItem>
            <SelectItem value="cirurgia-quadril">Cirurgia do Quadril</SelectItem>
            <SelectItem value="cirurgia-joelho">Cirurgia do Joelho</SelectItem>
            <SelectItem value="cirurgia-coluna">Cirurgia da Coluna</SelectItem>
            <SelectItem value="medicina-esportiva">Medicina Esportiva</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label className="text-sm md:text-base font-medium">Data Pretendida *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "h-10 md:h-12 w-full justify-start text-left font-normal text-sm",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : <span>Selecione uma data</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                locale={ptBR}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time" className="text-sm md:text-base font-medium">
            Horário Pretendido *
          </Label>
          <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)} required>
            <SelectTrigger id="time" className="h-10 md:h-12 text-sm">
              <SelectValue placeholder="Selecione o horário" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manha-cedo">Manhã (8h - 10h)</SelectItem>
              <SelectItem value="manha-tarde">Manhã (10h - 12h)</SelectItem>
              <SelectItem value="tarde-cedo">Tarde (14h - 16h)</SelectItem>
              <SelectItem value="tarde-tarde">Tarde (16h - 18h)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm md:text-base font-medium">
          Motivo da Consulta *
        </Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descreva brevemente o motivo da sua consulta"
          className="min-h-[80px] md:min-h-[100px] text-sm"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full h-10 md:h-12 text-sm md:text-base rounded-full bg-primary hover:bg-primary/90 transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processando...
          </>
        ) : (
          <>Solicitar Agendamento via WhatsApp</>
        )}
      </Button>
    </form>
  )
}