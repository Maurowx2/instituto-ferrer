"use client"

import { Button } from "@/components/ui/button"

// Função para enviar dados para WhatsApp
const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const formData = new FormData(e.currentTarget);
  const nome = formData.get('nome') as string;
  const telefone = formData.get('telefone') as string;
  const email = formData.get('email') as string;
  const especialidade = formData.get('especialidade') as string;
  const mensagem = formData.get('mensagem') as string;
  
  // Formato da mensagem para WhatsApp
  const whatsappMessage = `Olá! Gostaria de agendar uma consulta:

📋 *DADOS DO AGENDAMENTO*
👤 Nome: ${nome}
📱 Telefone: ${telefone}
📧 Email: ${email}
🏥 Especialidade: ${especialidade}
💬 Observações: ${mensagem || 'Nenhuma observação'}

Aguardo contato para confirmação da consulta.`;

  // Número do WhatsApp (baseado no site: 61 99665-0414)
  const whatsappNumber = '5561996650414';
  
  // Criar URL do WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Abrir WhatsApp
  window.open(whatsappURL, '_blank');
};

export default function AppointmentForm() {
  return (
    <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
        />
      </div>
      
      <div>
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
        />
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
        />
      </div>
      
      <div>
        <select
          name="especialidade"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
        >
          <option value="">Selecione a especialidade</option>
          <option value="Ortopedia Geral">Ortopedia Geral</option>
          <option value="Cirurgia do Joelho">Cirurgia do Joelho</option>
          <option value="Cirurgia da Coluna">Cirurgia da Coluna</option>
          <option value="Cirurgia do Quadril">Cirurgia do Quadril</option>
          <option value="Cirurgia do Pé e Tornozelo">Cirurgia do Pé e Tornozelo</option>
          <option value="Cirurgia da Mão">Cirurgia da Mão</option>
          <option value="Medicina Esportiva">Medicina Esportiva</option>
        </select>
      </div>
      
      <div>
        <textarea
          name="mensagem"
          placeholder="Observações (opcional)"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
        ></textarea>
      </div>
      
      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#EAB308] hover:bg-[#ca9a07] text-[#003580] font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Solicitar Agendamento via WhatsApp
      </Button>
    </form>
  )
}