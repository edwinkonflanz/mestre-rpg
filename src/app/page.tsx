"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Map, 
  Scroll, 
  Users, 
  User, 
  Globe,
  Menu,
  X,
  Award,
  MessageSquare
} from "lucide-react";

const tools = [
  {
    id: "world-creator",
    title: "Criador de Mundo",
    description: "Desenvolva lore, mapas e criaturas únicas",
    icon: Globe,
    href: "/world-creator",
    color: "from-[#00FF7F]/20 to-[#00FF7F]/5",
  },
  {
    id: "quest-generator",
    title: "Gerador de Missões",
    description: "Crie quests dinâmicas e histórias personalizadas",
    icon: Scroll,
    href: "/quest-generator",
    color: "from-[#00FF7F]/20 to-[#00FF7F]/5",
  },
  {
    id: "map-generator",
    title: "Gerador de Mapas",
    description: "Mapas interativos com terrenos e pontos de interesse",
    icon: Map,
    href: "/map-generator",
    color: "from-[#00FF7F]/20 to-[#00FF7F]/5",
  },
  {
    id: "npc-manager",
    title: "Gestor de NPCs",
    description: "Personalize e gerencie personagens não jogáveis",
    icon: Users,
    href: "/npc-manager",
    color: "from-[#00FF7F]/20 to-[#00FF7F]/5",
  },
];

const features = [
  {
    icon: Award,
    title: "Gamificação",
    description: "Badges e conquistas por participação ativa",
  },
  {
    icon: MessageSquare,
    title: "Comunidade",
    description: "Fórum integrado para discussões e ideias",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-[#0D0D0D]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#00FF7F] to-[#00FF7F]/60 flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D0D0D]" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Mestre do RPG
                </h1>
                <p className="text-xs text-white/60 hidden sm:block">
                  Ferramentas Premium
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">Perfil</span>
              </Link>
              <button className="px-6 py-2.5 bg-[#00FF7F] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105">
                Começar
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0D0D0D]">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>Perfil</span>
              </Link>
              <button className="w-full px-4 py-3 bg-[#00FF7F] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00FF7F]/90 transition-colors">
                Começar
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF7F]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 text-sm">
              <Sparkles className="w-4 h-4 text-[#00FF7F]" />
              <span className="text-[#00FF7F]">Plataforma Premium</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Domine suas
              <span className="block text-[#00FF7F] mt-2">Campanhas de RPG</span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Ferramentas completas para criar mundos épicos, missões envolventes e personagens memoráveis. Tudo em uma plataforma moderna e intuitiva.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.id}
                href={tool.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8 hover:border-[#00FF7F]/50 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center group-hover:bg-[#00FF7F]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00FF7F]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-[#00FF7F] transition-colors duration-300">
                      {tool.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[#00FF7F] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explorar</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8 hover:border-[#00FF7F]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00FF7F]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#00FF7F]/5 to-transparent p-6 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { label: "Mundos Criados", value: "1.2K+" },
              { label: "Missões Geradas", value: "5.8K+" },
              { label: "NPCs Ativos", value: "12K+" },
              { label: "Mestres Ativos", value: "850+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-[#00FF7F]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00FF7F] to-[#00FF7F]/60 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#0D0D0D]" />
              </div>
              <span className="text-sm text-white/60">
                © 2024 Mestre do RPG
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-[#00FF7F] transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-[#00FF7F] transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-[#00FF7F] transition-colors">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
