"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  User, 
  Save,
  Award,
  BookOpen,
  Settings,
  Crown,
  Star,
  Trophy,
  Target
} from "lucide-react";

const campaigns = [
  {
    id: 1,
    name: "A Queda de Eldoria",
    sessions: 24,
    players: 5,
    status: "Ativa",
    progress: 65,
  },
  {
    id: 2,
    name: "Crônicas das Terras Sombrias",
    sessions: 12,
    players: 4,
    status: "Pausada",
    progress: 40,
  },
  {
    id: 3,
    name: "O Despertar dos Dragões",
    sessions: 8,
    players: 6,
    status: "Ativa",
    progress: 25,
  },
];

const achievements = [
  { id: 1, name: "Primeiro Mundo", icon: Crown, unlocked: true },
  { id: 2, name: "10 Missões Criadas", icon: Target, unlocked: true },
  { id: 3, name: "Mestre Veterano", icon: Star, unlocked: true },
  { id: 4, name: "100 NPCs", icon: Trophy, unlocked: false },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("campaigns");

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
                  <User className="w-5 h-5 text-[#00FF7F]" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">
                    Perfil do Mestre
                  </h1>
                  <p className="text-xs text-white/60 hidden sm:block">
                    Suas campanhas e conquistas
                  </p>
                </div>
              </div>
            </div>

            <button className="p-2 sm:px-4 sm:py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Configurações</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Profile Header */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#00FF7F] to-[#00FF7F]/60 flex items-center justify-center text-4xl">
              🎲
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Mestre Arcano
              </h2>
              <p className="text-white/60 mb-4">
                Criando mundos épicos desde 2024
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-lg bg-[#00FF7F]/10 border border-[#00FF7F]/20">
                  <span className="text-sm font-semibold text-[#00FF7F]">
                    Nível 12
                  </span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white/5">
                  <span className="text-sm text-white/60">
                    3.450 XP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Campanhas", value: "3", icon: BookOpen },
            { label: "Sessões", value: "44", icon: Target },
            { label: "Conquistas", value: "12", icon: Trophy },
            { label: "Rank", value: "#247", icon: Crown },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#00FF7F]" />
                </div>
                <div className="text-2xl font-bold text-[#00FF7F] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { id: "campaigns", name: "Campanhas" },
              { id: "achievements", name: "Conquistas" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#00FF7F] text-[#0D0D0D]"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <span className="text-sm">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === "campaigns" && (
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-[#00FF7F]/50 transition-all duration-500 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold group-hover:text-[#00FF7F] transition-colors">
                          {campaign.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            campaign.status === "Ativa"
                              ? "bg-green-500/10 text-green-400"
                              : "bg-yellow-500/10 text-yellow-400"
                          }`}
                        >
                          {campaign.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/60 flex-wrap">
                        <span>{campaign.sessions} sessões</span>
                        <span>•</span>
                        <span>{campaign.players} jogadores</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Progresso</span>
                      <span className="text-[#00FF7F] font-semibold">
                        {campaign.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00FF7F] to-[#00FF7F]/60 transition-all duration-500"
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className={`rounded-2xl border p-6 text-center transition-all duration-300 ${
                    achievement.unlocked
                      ? "border-[#00FF7F]/30 bg-gradient-to-br from-[#00FF7F]/10 to-transparent hover:scale-105"
                      : "border-white/10 bg-gradient-to-br from-white/5 to-transparent opacity-50"
                  }`}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                      achievement.unlocked
                        ? "bg-[#00FF7F]/20"
                        : "bg-white/5"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        achievement.unlocked
                          ? "text-[#00FF7F]"
                          : "text-white/40"
                      }`}
                    />
                  </div>
                  <h3 className="font-bold mb-1">{achievement.name}</h3>
                  {achievement.unlocked && (
                    <p className="text-xs text-[#00FF7F]">Desbloqueado</p>
                  )}
                  {!achievement.unlocked && (
                    <p className="text-xs text-white/40">Bloqueado</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
