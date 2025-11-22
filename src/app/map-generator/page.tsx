"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Map, 
  Plus,
  Save,
  Layers,
  Mountain,
  Trees,
  Home,
  Compass,
  ZoomIn,
  ZoomOut
} from "lucide-react";

const terrainTypes = [
  { id: "mountain", name: "Montanha", icon: Mountain, color: "bg-gray-600" },
  { id: "forest", name: "Floresta", icon: Trees, color: "bg-green-700" },
  { id: "village", name: "Vila", icon: Home, color: "bg-amber-700" },
  { id: "water", name: "Água", icon: Compass, color: "bg-blue-600" },
];

const mockMaps = [
  {
    id: 1,
    name: "Mapa de Eldoria Central",
    size: "Grande (100x100)",
    terrain: "Misto",
    pois: 24,
    lastEdited: "Há 1 hora",
  },
  {
    id: 2,
    name: "Calabouço das Sombras",
    size: "Médio (50x50)",
    terrain: "Subterrâneo",
    pois: 12,
    lastEdited: "Há 5 horas",
  },
  {
    id: 3,
    name: "Arquipélago do Norte",
    size: "Enorme (200x200)",
    terrain: "Aquático",
    pois: 45,
    lastEdited: "Ontem",
  },
];

export default function MapGenerator() {
  const [zoom, setZoom] = useState(100);

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
                  <Map className="w-5 h-5 text-[#00FF7F]" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">
                    Gerador de Mapas
                  </h1>
                  <p className="text-xs text-white/60 hidden sm:block">
                    Crie mapas interativos e detalhados
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
                <span className="hidden sm:inline">Novo Mapa</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar - Tools */}
          <div className="lg:col-span-1 space-y-6">
            {/* Terrain Types */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-[#00FF7F]" />
                <h3 className="font-bold">Tipos de Terreno</h3>
              </div>
              <div className="space-y-2">
                {terrainTypes.map((terrain) => {
                  const Icon = terrain.icon;
                  return (
                    <button
                      key={terrain.id}
                      className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-8 h-8 rounded-lg ${terrain.color} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{terrain.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="font-bold mb-4">Controles</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Zoom</span>
                    <span className="text-[#00FF7F] font-semibold">{zoom}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setZoom(Math.max(50, zoom - 10))}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <input
                      type="range"
                      min="50"
                      max="200"
                      value={zoom}
                      onChange={(e) => setZoom(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/5 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00FF7F]"
                    />
                    <button
                      onClick={() => setZoom(Math.min(200, zoom + 10))}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Saved Maps */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="font-bold mb-4">Mapas Salvos</h3>
              <div className="space-y-2">
                {mockMaps.slice(0, 3).map((map) => (
                  <button
                    key={map.id}
                    className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="font-medium text-sm mb-1">{map.name}</div>
                    <div className="text-xs text-white/60">{map.size}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Canvas Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Canvas */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 min-h-[500px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#00FF7F]/10 flex items-center justify-center">
                  <Map className="w-10 h-10 text-[#00FF7F]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Canvas de Mapa</h3>
                  <p className="text-sm text-white/60 max-w-md mx-auto">
                    Selecione um terreno na barra lateral e clique aqui para começar a desenhar seu mapa
                  </p>
                </div>
                <button className="px-6 py-3 bg-[#00FF7F] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105">
                  Começar Novo Mapa
                </button>
              </div>
            </div>

            {/* Map Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Tamanho", value: "100x100" },
                { label: "Terrenos", value: "8" },
                { label: "POIs", value: "24" },
                { label: "Camadas", value: "3" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 text-center"
                >
                  <div className="text-2xl font-bold text-[#00FF7F] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
