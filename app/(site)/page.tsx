import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { WebPageSchema } from "@/lib/json-ld"
import { HomeHero } from "@/components/home/home-hero"
import { HomeModules } from "@/components/home/home-modules"
import { HomeSegments } from "@/components/home/home-segments"
import { HomeProof } from "@/components/home/home-proof"
import { HomeCta } from "@/components/home/home-cta"

export const metadata: Metadata = {
  title: "ERP, CRM e PDV completo | Webgex — 30 anos de gestão empresarial",
  description:
    "ERP completo com CRM integrado e PDV online. Sistema de gestão empresarial para varejo, atacado e centros automotivos. Módulos de Financeiro, Controladoria, Estoque, Fiscal e Vendas. 30 anos de mercado.",
  openGraph: {
    title: "ERP, CRM e PDV completo | Webgex",
    description:
      "ERP completo com CRM integrado e PDV online. Sistema de gestão empresarial para varejo, atacado e centros automotivos.",
    images: OG_IMAGE_DEFAULT_ARRAY,
  },
}

export default function HomePage() {
  const webPageSchema = WebPageSchema("Webgex | ERP, CRM e PDV", "ERP completo com CRM integrado e PDV online. Sistema de gestão empresarial para varejo, atacado e centros automotivos.", "")
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <HomeHero />
        <HomeModules />
        <HomeSegments />
        <HomeProof />
        <HomeCta />
    </>
  )
}
