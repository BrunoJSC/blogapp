"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  BookOpen,
  Edit,
  Home,
  LogOut,
  Search,
  Settings,
  User,
  BookmarkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function BlogHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useKindeAuth();

  // Mock user data - in a real app, this would come from authentication
  const userMock = {
    name: "Maria Silva",
    username: "mariasilva",
    avatar: "/placeholder.svg?height=40&width=40",
    unreadNotifications: 3,
  };

  // Mock blog posts data
  const posts = [
    {
      id: 1,
      title: "Como melhorar sua produtividade em 5 passos simples",
      excerpt:
        "Descubra técnicas comprovadas para aumentar sua produtividade diária e alcançar mais em menos tempo.",
      author: "Carlos Mendes",
      authorAvatar: "/placeholder.svg?height=30&width=30",
      date: "12 Mar 2025",
      readTime: "5 min",
      category: "Produtividade",
      image: "/placeholder.svg?height=200&width=400",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      title: "Os melhores destinos para viajar em 2025",
      excerpt:
        "Uma lista completa dos lugares mais incríveis para conhecer este ano, com dicas de hospedagem e atrações.",
      author: "Ana Ferreira",
      authorAvatar: "/placeholder.svg?height=30&width=30",
      date: "8 Mar 2025",
      readTime: "7 min",
      category: "Viagens",
      image: "/placeholder.svg?height=200&width=400",
      likes: 42,
      comments: 15,
    },
    {
      id: 3,
      title: "Receitas saudáveis para o dia a dia",
      excerpt:
        "Aprenda a preparar refeições nutritivas e deliciosas que vão transformar sua alimentação e bem-estar.",
      author: "Paulo Souza",
      authorAvatar: "/placeholder.svg?height=30&width=30",
      date: "3 Mar 2025",
      readTime: "6 min",
      category: "Saúde",
      image: "/placeholder.svg?height=200&width=400",
      likes: 18,
      comments: 6,
    },
  ];

  // Mock categories
  const categories = [
    { name: "Tecnologia", count: 24 },
    { name: "Saúde", count: 18 },
    { name: "Viagens", count: 15 },
    { name: "Produtividade", count: 12 },
    { name: "Finanças", count: 9 },
  ];

  // Mock popular tags
  const tags = [
    "desenvolvimento",
    "javascript",
    "react",
    "nextjs",
    "produtividade",
    "saúde mental",
    "exercícios",
    "alimentação",
    "viagens",
    "europa",
    "ásia",
    "investimentos",
  ];

  return (
    <div className="min-h-screen container mx-auto bg-background">
      {/* Header */}

      {/* Main Content */}
      <main className="container px-4 py-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">
              Olá, {user?.given_name + " " + user?.family_name}
            </h1>
            <p className="text-muted-foreground text-lg">
              Descubra histórias, ideias e conhecimento de escritores sobre qualquer tema.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <Tabs defaultValue="para-voce" className="mb-10">
                <TabsList className="mb-6 bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="para-voce"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 h-auto"
                  >
                    Para você
                  </TabsTrigger>
                  <TabsTrigger
                    value="seguindo"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 h-auto"
                  >
                    Seguindo
                  </TabsTrigger>
                  <TabsTrigger
                    value="recentes"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 h-auto"
                  >
                    Recentes
                  </TabsTrigger>
                  <TabsTrigger
                    value="populares"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 h-auto"
                  >
                    Populares
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="para-voce" className="mt-0">
                  <div className="space-y-8">
                    {posts.map((post) => (
                      <article key={post.id} className="group">
                        <div className="grid md:grid-cols-12 gap-6">
                          <div className="md:col-span-4">
                            <Link
                              href={`/post/${post.id}`}
                              className="block overflow-hidden rounded-xl"
                            >
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                width={400}
                                height={225}
                                className="h-full w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                              />
                            </Link>
                          </div>
                          <div className="md:col-span-8">
                            <div className="flex items-center gap-3 mb-3">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={post.authorAvatar} alt={post.author} />
                                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">{post.author}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{post.date}</span>
                            </div>

                            <Link href={`/post/${post.id}`} className="block group">
                              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {post.title}
                              </h2>
                            </Link>

                            <p className="text-muted-foreground mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-3">
                                <Badge
                                  variant="secondary"
                                  className="rounded-full px-3 bg-muted/50 hover:bg-muted"
                                >
                                  {post.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {post.readTime} de leitura
                                </span>
                              </div>

                              <div className="flex items-center gap-4">
                                <button className="text-muted-foreground hover:text-primary transition-colors">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                  </svg>
                                </button>
                                <button className="text-muted-foreground hover:text-primary transition-colors">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </button>
                                <button className="text-muted-foreground hover:text-primary transition-colors">
                                  <BookmarkIcon size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="seguindo" className="mt-0">
                  <div className="flex items-center justify-center h-40 text-muted-foreground">
                    Conteúdo dos autores que você segue aparecerá aqui.
                  </div>
                </TabsContent>

                <TabsContent value="recentes" className="mt-0">
                  <div className="flex items-center justify-center h-40 text-muted-foreground">
                    Os artigos mais recentes aparecerão aqui.
                  </div>
                </TabsContent>

                <TabsContent value="populares" className="mt-0">
                  <div className="flex items-center justify-center h-40 text-muted-foreground">
                    Os artigos mais populares aparecerão aqui.
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex items-center justify-center mt-10">
                <Button variant="outline" className="rounded-full px-6">
                  Carregar mais
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Tópicos */}
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="font-medium mb-4">Tópicos para seguir</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Tecnologia",
                    "Produtividade",
                    "Saúde",
                    "Finanças",
                    "Viagens",
                    "Desenvolvimento",
                    "Design",
                  ].map((topic, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-background hover:bg-muted"
                    >
                      {topic}
                    </Button>
                  ))}
                  <Button variant="ghost" size="sm" className="text-primary">
                    Ver mais
                  </Button>
                </div>
              </div>

              {/* Autores Sugeridos */}
              <div className="bg-background p-6 rounded-xl border">
                <h3 className="font-medium mb-4">Autores para seguir</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Marcos Oliveira",
                      bio: "Especialista em tecnologia",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      name: "Juliana Costa",
                      bio: "Finanças pessoais",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      name: "Ricardo Almeida",
                      bio: "Desenvolvimento web",
                      avatar: "/placeholder.svg?height=40&width=40",
                    },
                  ].map((author, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{author.name}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{author.bio}</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 rounded-full">
                        Seguir
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leitura Recomendada */}
              <div className="bg-background p-6 rounded-xl border">
                <h3 className="font-medium mb-4">Recomendados para você</h3>
                <div className="space-y-4">
                  <div className="group">
                    <Link href="/post/4" className="block">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                        10 ferramentas essenciais para desenvolvedores em 2025
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Tecnologia</span>
                        <span>•</span>
                        <span>4 min de leitura</span>
                      </div>
                    </Link>
                  </div>
                  <Separator className="bg-muted/50" />
                  <div className="group">
                    <Link href="/post/5" className="block">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                        Como criar um orçamento pessoal que realmente funciona
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Finanças</span>
                        <span>•</span>
                        <span>6 min de leitura</span>
                      </div>
                    </Link>
                  </div>
                  <Separator className="bg-muted/50" />
                  <div className="group">
                    <Link href="/post/6" className="block">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                        Meditação para iniciantes: um guia passo a passo
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Bem-estar</span>
                        <span>•</span>
                        <span>5 min de leitura</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
