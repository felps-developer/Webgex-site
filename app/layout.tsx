import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { OrganizationSchema, WebSiteSchema } from '@/lib/json-ld'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Webgex | ERP, CRM e PDV completo para gestão empresarial",
    template: "%s | Webgex — ERP, CRM e PDV",
  },
  description:
    "ERP completo com CRM integrado e PDV online. Gestão empresarial para varejo, atacado, distribuição e centros automotivos. 30 anos de mercado, +2.500 usuários ativos. Módulos de Financeiro, Controladoria, Estoque, Fiscal e Vendas.",
  keywords: [
    "ERP", "CRM", "PDV", "sistema de gestão empresarial", "ERP webgex",
    "software de gestão", "PDV online", "gestão de vendas", "controle de estoque",
    "gestão financeira", "CRM integrado", "sistema para varejo",
    "sistema para atacado", "sistema para oficina", "ERP automotivo",
    "ERP nuvem", "sistema empresarial", "UNIGEX", "gestão empresarial",
    "nota fiscal eletrônica", "NF-e", "NFC-e", "controle de caixa",
  ],
  metadataBase: new URL("https://www.webgex.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Webgex — ERP, CRM e PDV",
    title: "Webgex | ERP, CRM e PDV completo para gestão empresarial",
    description:
      "ERP completo com CRM integrado e PDV online. Gestão empresarial para varejo, atacado, distribuição e centros automotivos. 30 anos de mercado.",
    url: "https://www.webgex.com.br/",
    images: [
      {
        url: "/erp-dashboard.jpg",
        width: 900,
        height: 680,
        alt: "Painel do ERP Webgex com indicadores financeiros e de vendas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webgex | ERP, CRM e PDV",
    description:
      "ERP completo com CRM integrado e PDV online. 30 anos de mercado.",
    images: ["/erp-dashboard.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="bg-background">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://*.googleadservices.com https://*.doubleclick.net https://connect.facebook.net https://*.facebook.com;
          img-src 'self' data: https://www.google.com https://*.googleadservices.com https://*.doubleclick.net https://*.googletagmanager.com https://connect.facebook.net https://*.facebook.com;
          style-src 'self' 'unsafe-inline';
          font-src 'self';
          connect-src 'self' https://www.google.com https://*.googleadservices.com https://*.doubleclick.net https://*.googletagmanager.com https://*.google-analytics.com https://webgex-crm-proxy-241464300074.southamerica-east1.run.app https://unigex-email-241464300074.southamerica-east1.run.app https://api.whatsapp.com;
          frame-src https://www.googletagmanager.com https://*.doubleclick.net;
        " />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WPX79XFX');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(OrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(WebSiteSchema()),
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} ${geistMono.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPX79XFX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg focus:outline-2 focus:outline-ring"
        >
          Pular para o conteúdo principal
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
