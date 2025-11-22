"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Globe, 
  Mountain, 
  Trees, 
  Castle,
  Sparkles,
  Plus,
  Save,
  Download
} from "lucide-react";

const categories = [
  { id: "lore", name: "Lore & História", icon: Globe },
  { id: "geography", name: "Geografia", icon: Mountain },
  { id: "creatures", name: "Criaturas", icon: Trees },
  { id: "locations", name: "Localizações", icon: Castle },
];

const mockWorlds = [
  {
    id: 1,
    name: "Reino de Eldoria",
    description: "Um reino medieval com magia ancestral",
    progress: 75,
    lastEdited: "Há 2 horas",
  },
  {
    id: 2,
    name: "Terras Sombrias",
    description: "Mundo pós-apocalíptico com ruínas antigas",
    progress: 45,
    lastEdited: "Ontem",
  },
  {
    id: 3,
    name: "Arquipélago Celestial",
    description: "Ilhas flutuantes conectadas por pontes de luz",
    progress: 30,
    lastEdited: "Há 3 dias",
  },
];

export default function WorldCreator() {
  const [activeCategory, setActiveCategory] = useState("lore");

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-[#0D0D0D]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#00FF7F]" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">
                    Criador de Mundo
                  </h1>
                  <p className="text-xs text-white/60 hidden sm:block">
                    Desenvolva seu universo épico
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button className="p-2 sm:px-4 sm:py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Salvar</span>
              </button>
              <button className="px-4 py-2 bg-[#00FF7F] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Novo Mundo</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#00FF7F] text-[#0D0D0D]"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Worlds Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {mockWorlds.map((world) => (
            <div
              key={world.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-[#00FF7F]/50 transition-all duration-500 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold group-hover:text-[#00FF7F] transition-colors">
                      {world.name}
                    </h3>
                    <p className="text-sm text-white/60">
                      {world.description}
                    </p>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-white/5 transition-colors opacity-0 group-hover:opacity-100">
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Progresso</span>
                    <span className="text-[#00FF7F] font-semibold">
                      {world.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00FF7F] to-[#00FF7F]/60 transition-all duration-500"
                      style={{ width: `${world.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/40">
                  <span>Editado {world.lastEdited}</span>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>IA Ativa</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#00FF7F]/5 to-transparent p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-6">Ações Rápidas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Gerar Lore com IA", icon: Sparkles },
              { label: "Importar Mapa", icon: Mountain },
              { label: "Criar Criatura", icon: Trees },
            ].map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#00FF7F]" />
                  </div>
                  <span className="text-sm font-medium">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
