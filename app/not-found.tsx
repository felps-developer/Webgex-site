import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-[10rem] font-bold leading-none text-primary/15 select-none">404</span>
      <h1 className="-mt-10 text-balance text-3xl font-extrabold tracking-tight text-secondary lg:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-pretty text-muted-foreground">
        O conteúdo que você procura pode ter sido movido ou removido. Verifique o link ou volte para a página inicial.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao início
        </Link>
      </Button>
    </div>
  )
}
