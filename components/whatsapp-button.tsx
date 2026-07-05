"use client"

import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_NUMBER = "5585998020016"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20ERP%20Webgex.`

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group fixed bottom-6 right-6 z-50 flex h-14 w-14",
        "items-center justify-center rounded-full",
        "bg-[#25D366] text-white shadow-lg",
        "transition-all duration-300 ease-out",
        "hover:h-48 hover:w-48 hover:rounded-2xl hover:shadow-2xl",
        "max-sm:hover:h-36 max-sm:hover:w-36",
        "hover:bg-gradient-to-br hover:from-[#25D366] hover:to-[#128C7E]",
      )}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />

      <span
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center",
          "p-4 text-center text-sm font-semibold leading-tight text-white",
          "opacity-0 transition-opacity duration-300",
          "group-hover:pointer-events-auto group-hover:opacity-100",
        )}
      >
        Fale com a
        <br />
        Webgex no
        <br />
        WhatsApp
      </span>
    </a>
  )
}
