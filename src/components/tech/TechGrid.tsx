import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import type { Project, TechItem, TechLayer } from '../../types/portfolio';
import { capabilitiesData, projectsData } from '../../data/portfolioData';
import { PipelineFlowPresets, type FlowDomainId } from './PipelineFlowPresets';
import { PipelineNodeLayer } from './PipelineNodeLayer';
import { PipelineInspector } from './PipelineInspector';
import { TechBeachDecorations } from './TechBeachDecorations';

interface TechGridProps {
  onOpenProject?: (project: Project) => void;
}

export const TechGrid: React.FC<TechGridProps> = ({ onOpenProject }) => {
  const [activeDomain, setActiveDomain] = useState<FlowDomainId>('all');
  const [selectedLayer, setSelectedLayer] = useState<TechLayer>('arsenal');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  // partition capabilities by layer
  const arsenalItems = capabilitiesData.filter((t) => t.layer === 'arsenal');
  const awardsItems = capabilitiesData.filter((t) => t.layer === 'awards');
  const beyondItems = capabilitiesData.filter((t) => t.layer === 'beyond');
  const bringItems = capabilitiesData.filter((t) => t.layer === 'bring');

  const handleSelectDomain = (domain: FlowDomainId) => {
    setActiveDomain(domain);
    setSelectedTech(null);

    // automatically shift inspection layer to the primary active layer for that domain
    if (domain === 'arsenal' || domain === 'academic') {
      setSelectedLayer('arsenal');
    } else if (domain === 'sports') {
      setSelectedLayer('awards');
    } else if (domain === 'beyond') {
      setSelectedLayer('beyond');
    } else if (domain === 'bring') {
      setSelectedLayer('bring');
    }
  };

  const handleSelectTech = (tech: TechItem) => {
    setSelectedTech(tech);
    setSelectedLayer(tech.layer);
  };

  const handleSelectLayer = (layer: TechLayer) => {
    setSelectedLayer(layer);
    setSelectedTech(null);
  };

  const handleSelectProject = (projectId: string) => {
    const targetProject = projectsData.find((p) => p.id === projectId);
    if (targetProject && onOpenProject) {
      onOpenProject(targetProject);
    }
  };

  return (
    <section id="stack" className="relative z-20 -mt-1 w-full bg-[#fff9d4] select-none">
      {/* background decorations */}
      <TechBeachDecorations />

      {/* content wrapper */}
      <div className="relative z-10 pt-28 pb-24 max-w-7xl mx-auto px-6 sm:px-12">
        {/* header */}
        <div className="space-y-4 pb-8 border-b-2 border-[#0f172a]/15">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] w-fit">
            <span>03 // MY CAPABILITIES</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.08]">
                Personal Arsenal &amp; Capabilities
              </h2>
              <p className="text-sm sm:text-base font-medium text-[#475569] mt-2 max-w-2xl leading-relaxed">
                Kumpulan keahlian diri, pencapaian kejuaraan basket &amp; renang, keaktifan belajar IPS di kelas, serta karakter unggul M Keysha Alfaro.
              </p>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] shrink-0 self-start lg:self-auto">
              <Trophy className="w-4 h-4 text-[#eab308]" />
              <span className="text-xs font-mono font-bold text-[#0f172a]">
                {capabilitiesData.length} Keahlian, Prestasi &amp; Karakter
              </span>
            </div>
          </div>
        </div>

        {/* category filter selector */}
        <div className="mt-8">
          <PipelineFlowPresets
            activeDomain={activeDomain}
            onSelectDomain={handleSelectDomain}
          />
        </div>

        {/* architecture layer cards */}
        <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono font-bold text-[#64748b] uppercase tracking-wider pb-1 sm:pb-0">
            <span>Daftar Kategori &amp; Layer</span>
            <span className="text-[10px] sm:text-xs text-[#64748b]">
              <span className="sm:hidden">Tap kartu atau icon untuk detail</span>
              <span className="hidden sm:inline">Klik kartu atau icon untuk melihat detail</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* 01: Personal Arsenal */}
            <PipelineNodeLayer
              layerId="arsenal"
              stepNumber="01"
              title="Personal Arsenal"
              subtitle="Skill & Keunggulan Diri"
              roleDescription="Kumpulan kemampuan strategis, kepemimpinan tim, komunikasi kelas, serta daya analisis sosial IPS."
              techItems={arsenalItems}
              activeDomain={activeDomain}
              selectedTech={selectedTech}
              onSelectTech={handleSelectTech}
              onSelectLayer={handleSelectLayer}
              isLayerSelected={selectedLayer === 'arsenal'}
            />

            {/* 02: Activities & Awards */}
            <PipelineNodeLayer
              layerId="awards"
              stepNumber="02"
              title="Activities & Awards"
              subtitle="Organisasi & Lomba"
              roleDescription="Pencapaian medali kejuaraan basket pelajar, kompetisi renang, dan rekam jejak kepanitiaan sekolah."
              techItems={awardsItems}
              activeDomain={activeDomain}
              selectedTech={selectedTech}
              onSelectTech={handleSelectTech}
              onSelectLayer={handleSelectLayer}
              isLayerSelected={selectedLayer === 'awards'}
            />

            {/* 03: Beyond the Classroom */}
            <PipelineNodeLayer
              layerId="beyond"
              stepNumber="03"
              title="Beyond the Classroom"
              subtitle="Aktivitas di Luar Kelas"
              roleDescription="Klub basket regional, sesi latihan renang ketahanan aerobik, dan kepedulian bakti sosial muda."
              techItems={beyondItems}
              activeDomain={activeDomain}
              selectedTech={selectedTech}
              onSelectTech={handleSelectTech}
              onSelectLayer={handleSelectLayer}
              isLayerSelected={selectedLayer === 'beyond'}
            />

            {/* 04: What I Bring */}
            <PipelineNodeLayer
              layerId="bring"
              stepNumber="04"
              title="What I Bring"
              subtitle="Karakter & Nilai Diri"
              roleDescription="Prinsip mentalitas juara pantang menyerah, sportivitas fair play, energi positif, dan kerja sama tim."
              techItems={bringItems}
              activeDomain={activeDomain}
              selectedTech={selectedTech}
              onSelectTech={handleSelectTech}
              onSelectLayer={handleSelectLayer}
              isLayerSelected={selectedLayer === 'bring'}
            />
          </div>
        </div>

        {/* inspector deep dive panel */}
        <div className="mt-10">
          <PipelineInspector
            selectedTech={selectedTech}
            selectedLayer={selectedLayer}
            activeDomain={activeDomain}
            onClearTechSelection={() => setSelectedTech(null)}
            onSelectProject={handleSelectProject}
          />
        </div>
      </div>
    </section>
  );
};
