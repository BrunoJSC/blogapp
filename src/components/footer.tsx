import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20 bg-muted/20">
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <BookOpen className="h-5 w-5" />
              <span>BlogFolio</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Uma plataforma para compartilhar conhecimento, histórias e ideias com o mundo.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-sm">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/explorar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Explorar
                </Link>
              </li>
              <li>
                <Link
                  href="/salvos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Salvos
                </Link>
              </li>
              <li>
                <Link
                  href="/escrever"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Escrever
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-sm">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/carreiras"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/termos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-muted/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BlogFolio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
