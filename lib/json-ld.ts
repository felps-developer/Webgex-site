export function OrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.webgex.com.br/#organization",
    name: "Webgex — UNIGEX Tecnologia",
    legalName: "UNIGEX Tecnologia Ltda",
    url: "https://www.webgex.com.br/",
    logo: "https://www.webgex.com.br/webgex-logo.png",
    description:
      "ERP, CRM e PDV completo para gestão empresarial. Há 30 anos simplificando a gestão de varejo, atacado e centros automotivos.",
    foundingDate: "1996",
    areaServed: { "@type": "Country", name: "BR" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.facebook.com/webgexsolucoes/",
      "https://www.instagram.com/webgexsolucoes/",
      "https://www.linkedin.com/company/unigex-solucoes-integradas-de-gestao/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-85-99802-0016",
      email: "helpdesk@unigex.com.br",
      contactType: "sales",
      areaServed: "BR",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sistemas de Gestão Webgex",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "ERP Webgex — Gestão Empresarial" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "CRM Webgex — Gestão de Clientes" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "PDV Webgex — Frente de Caixa" } },
      ],
    },
  }
}

export function WebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.webgex.com.br/#website",
    url: "https://www.webgex.com.br/",
    name: "Webgex — ERP, CRM e PDV para sua empresa",
    description:
      "ERP completo com CRM integrado e PDV. Soluções de gestão para varejo, atacado, distribuição e centros automotivos. 30 anos de mercado.",
    inLanguage: "pt-BR",
    publisher: { "@id": "https://www.webgex.com.br/#organization" },
  }
}

export function BreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://www.webgex.com.br${item.url}`,
    })),
  }
}

export function ArticleSchema(post: { title: string; excerpt: string; date: string; slug: string; author: string; category: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.webgex.com.br/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": "https://www.webgex.com.br/#organization" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.webgex.com.br/blog/${post.slug}/` },
    articleSection: post.category,
    inLanguage: "pt-BR",
  }
}

export function FAQSchema(faqs: { q: string; a: string }[], pageId = "planos") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.webgex.com.br/${pageId}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function WebPageSchema(title: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.webgex.com.br${slug}/#webpage`,
    url: `https://www.webgex.com.br${slug}/`,
    name: title,
    description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": "https://www.webgex.com.br/#website" },
    about: { "@id": "https://www.webgex.com.br/#organization" },
  }
}

export function ProductSchema(campaign: { segment: string; headline: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `ERP Webgex para ${campaign.segment}`,
    description: campaign.description,
    category: `Sistema de Gestão - ${campaign.segment}`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `https://www.webgex.com.br/campanha/${campaign.slug}/`,
    },
  }
}
