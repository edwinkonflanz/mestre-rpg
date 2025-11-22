"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Users, 
  Plus,
  Save,
  Search,
  Filter,
  User,
  Heart,
  Sword,
  Shield,
  Sparkles
} from "lucide-react";

const npcCategories = [
  { id: "all", name: "Todos" },
  { id: "friendly", name: "Aliados" },
  { id: "neutral", name: "Neutros" },
  { id: "hostile", name: "Hostis" },
];

const mockNPCs = [
  {
    id: 1,
    name: "Eldrin, o Sábio",
    role: "Mago Ancião",
    category: "friendly",
    level: 45,
    location: "Torre Arcana",
    stats: { health: 850, attack: 120, defense: 95 },
    avatar: "🧙‍♂️",
  },
  {
    id: 2,
    name: "Kara Shadowblade",
    role: "Assassina",
    category: "neutral",
    level: 38,
    location: "Distrito das Sombras",
    stats: { health: 650, attack: 180, defense: 70 },
    avatar: "🗡️",
  },
  {
    id: 3,
    name: "Gorak, o Destruidor",
    role: "Chefe de Guilda",
    category: "hostile",
    level: 52,
    location: "Fortaleza Negra",
    stats: { health: 1200, attack: 200, defense: 150 },
    avatar: "⚔️",
  },
  {
    id: 4,
    name: "Lyra Moonwhisper",
    role: "Curandeira",
    category: "friendly",
    level: 30,
    location: "Templo da Luz",
    stats: { health: 500, attack: 60, defense: 80 },
    avatar: "✨",
  },
];

export default function NPCManager() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNPCs = mockNPCs.filter((npc) => {
    const matchesCategory = activeCategory === "all" || npc.category === activeCategory;
    const matchesSearch = npc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         npc.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                  <Users className="w-5 h-5 text-[#00FF7F]" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">
                    Gestor de NPCs
                  </h1>
                  <p className="text-xs text-white/60 hidden sm:block">
                    Gerencie seus personagens não jogáveis
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button className="p-2 sm:px-4 sm:py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Gerar com IA</span>
              </button>
              <button className="px-4 py-2 bg-[#00FF7F] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Novo NPC</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Buscar NPCs por nome ou função..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00FF7F]/50 focus:outline-none transition-colors text-white placeholder:text-white/40"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {npcCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#00FF7F] text-[#0D0D0D]"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <span className="text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* NPCs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredNPCs.map((npc) => (
            <div
              key={npc.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-[#00FF7F]/50 transition-all duration-500 cursor-pointer"
            >
              <div className="space-y-4">
                {/* Avatar & Info */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center text-3xl flex-shrink-0">
                    {npc.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold group-hover:text-[#00FF7F] transition-colors truncate">
                      {npc.name}
                    </h3>
                    <p className="text-sm text-white/60">{npc.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-1 rounded-full bg-[#00FF7F]/10 text-[#00FF7F] font-semibold">
                        Nv. {npc.level}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          npc.category === "friendly"
                            ? "bg-green-500/10 text-green-400"
                            : npc.category === "neutral"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {npc.category === "friendly"
                          ? "Aliado"
                          : npc.category === "neutral"
                          ? "Neutro"
                          : "Hostil"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="text-sm text-white/60">
                  📍 {npc.location}
                </div>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-white/60">
                      <Heart className="w-4 h-4" />
                      <span>Vida</span>
                    </div>
                    <span className="font-semibold">{npc.stats.health}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-white/60">
                      <Sword className="w-4 h-4" />
                      <span>Ataque</span>
                    </div>
                    <span className="font-semibold">{npc.stats.attack}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-white/60">
                      <Shield className="w-4 h-4" />
                      <span>Defesa</span>
                    </div>
                    <span className="font-semibold">{npc.stats.defense}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex-1 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium">
                    Editar
                  </button>
                  <button className="flex-1 px-3 py-2 rounded-lg bg-[#00FF7F]/10 hover:bg-[#00FF7F]/20 text-[#00FF7F] transition-colors text-sm font-medium">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#00FF7F]/5 to-transparent p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-6">Estatísticas Rápidas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Total de NPCs", value: mockNPCs.length },
              { label: "Aliados", value: mockNPCs.filter((n) => n.category === "friendly").length },
              { label: "Neutros", value: mockNPCs.filter((n) => n.category === "neutral").length },
              { label: "Hostis", value: mockNPCs.filter((n) => n.category === "hostile").length },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#00FF7F] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
