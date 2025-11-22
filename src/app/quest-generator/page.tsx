"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Scroll, 
  Sparkles,
  Plus,
  Save,
  Wand2,
  Target,
  Trophy,
  Clock
} from "lucide-react";

const questTypes = [
  { id: "main", name: "Principal", color: "text-[#00FF7F]" },
  { id: "side", name: "Secundária", color: "text-blue-400" },
  { id: "daily", name: "Diária", color: "text-purple-400" },
  { id: "epic", name: "Épica", color: "text-orange-400" },
];

const mockQuests = [
  {
    id: 1,
    title: "O Cristal Perdido de Eldoria",
    type: "main",
    difficulty: "Difícil",
    rewards: "5000 XP, Espada Lendária",
    status: "Em progresso",
    completion: 60,
  },
  {
    id: 2,
    title: "Caçada ao Dragão das Sombras",
    type: "epic",
    difficulty: "Extremo",
    rewards: "10000 XP, Armadura Mítica",
    status: "Não iniciada",
    completion: 0,
  },
  {
    id: 3,
    title: "Entrega de Suprimentos",
    type: "side",
    difficulty: "Fácil",
    rewards: "500 XP, 100 Moedas",
    status: "Completa",
    completion: 100,
  },
];

export default function QuestGenerator() {
  const [activeType, setActiveType] = useState("main");

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
                  <Scroll className="w-5 h-5 text-[#00FF7F]" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">
                    Gerador de Missões
                  </h1>
                  <p className="text-xs text-white/60 hidden sm:block">
                    Crie quests épicas e envolventes
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button className="p-2 sm:px-4 sm:py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
                <Wand2 className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Gerar com IA</span>
              </button>
              <button className="px-4 py-2 bg-[#00FF7F] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Nova Missão</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Quest Types */}
        <div className="mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {questTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                  activeType === type.id
                    ? "bg-[#00FF7F] text-[#0D0D0D]"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <span className="text-sm">{type.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quests List */}
        <div className="space-y-4 mb-8">
          {mockQuests.map((quest) => {
            const typeInfo = questTypes.find((t) => t.id === quest.type);
            return (
              <div
                key={quest.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-[#00FF7F]/50 transition-all duration-500 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold group-hover:text-[#00FF7F] transition-colors">
                          {quest.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${typeInfo?.color} bg-white/5`}
                        >
                          {typeInfo?.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/60 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          <span>{quest.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="w-4 h-4" />
                          <span>{quest.rewards}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-white/5 transition-colors opacity-0 group-hover:opacity-100">
                      <Save className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Status: {quest.status}</span>
                      <span className="text-[#00FF7F] font-semibold">
                        {quest.completion}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00FF7F] to-[#00FF7F]/60 transition-all duration-500"
                        style={{ width: `${quest.completion}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quest Generator Tool */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#00FF7F]/5 to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#00FF7F]" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Gerador Inteligente</h3>
              <p className="text-sm text-white/60">
                Use IA para criar missões personalizadas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-white/60">Tipo de Missão</label>
              <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00FF7F]/50 focus:outline-none transition-colors">
                <option>Principal</option>
                <option>Secundária</option>
                <option>Diária</option>
                <option>Épica</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/60">Dificuldade</label>
              <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00FF7F]/50 focus:outline-none transition-colors">
                <option>Fácil</option>
                <option>Médio</option>
                <option>Difícil</option>
                <option>Extremo</option>
              </select>
            </div>
          </div>

          <button className="w-full mt-6 px-6 py-3 bg-[#00FF7F] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            <Wand2 className="w-5 h-5" />
            <span>Gerar Missão com IA</span>
          </button>
        </div>
      </div>
    </div>
  );
}
