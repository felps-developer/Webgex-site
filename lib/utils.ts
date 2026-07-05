import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const baseUrl = "https://www.webgex.com.br"

export const OG_IMAGE_DEFAULT = {
  url: `${baseUrl}/erp-dashboard.jpg`,
  width: 900,
  height: 680,
  alt: "Painel do ERP Webgex com indicadores financeiros e de vendas",
}

export const OG_IMAGE_DEFAULT_ARRAY = [OG_IMAGE_DEFAULT]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
