import { Button } from "@/components/ui/button";
import { ArrowRight, Edit, Share2, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background text-foreground">
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                A Melhor Plataforma Para Seus Posts
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Crie, publique e compartilhe seus posts com facilidade. Alcance mais leitores e
                expresse suas ideias com a plataforma de blog mais intuitiva.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  Criar Meu Primeiro Post
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Ver Exemplos
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 rounded-xl">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Crie Posts Incríveis em Minutos
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Nosso editor intuitivo permite que você crie posts visualmente atraentes sem
                  conhecimento técnico. Adicione imagens, vídeos, e formatação avançada com apenas
                  alguns cliques.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Edit className="h-4 w-4 text-primary" />
                    </div>
                    <span>Editor rico e intuitivo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Share2 className="h-4 w-4 text-primary" />
                    </div>
                    <span>Compartilhamento fácil nas redes sociais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <span>Análises detalhadas de desempenho</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background shadow-sm">
                <Image
                  src="/images/create.png"
                  width={800}
                  height={600}
                  alt="Editor de posts"
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Por Que Escolher Nossa Plataforma?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Descubra por que milhares de criadores de conteúdo confiam em nós para compartilhar
                suas histórias.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 border p-6 rounded-xl">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <Edit className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Criação Simplificada</h3>
                <p className="text-center text-muted-foreground">
                  Crie posts profissionais em minutos com nosso editor intuitivo e modelos prontos
                  para uso.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Alcance Maior</h3>
                <p className="text-center text-muted-foreground">
                  Ferramentas de SEO integradas e compartilhamento fácil para ajudar seus posts a
                  alcançarem mais leitores.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Análises Detalhadas</h3>
                <p className="text-center text-muted-foreground">
                  Acompanhe o desempenho dos seus posts e entenda melhor seu público com
                  estatísticas avançadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-primary-foreground py-12 md:py-24 lg:py-32 rounded-xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto Para Começar a Postar?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Junte-se a milhares de criadores de conteúdo e comece a compartilhar suas ideias
                hoje mesmo.
              </p>
              <Button size="lg" className="mt-4">
                Criar Minha Conta Grátis
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Edit className="h-4 w-4" />
              <span>BlogPost © {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Termos
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Privacidade
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
