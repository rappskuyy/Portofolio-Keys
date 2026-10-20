import React, { useState } from 'react';
import { Trophy, Medal, Award, MapPin, Calendar, Sparkles } from 'lucide-react';
import type { Project } from '../../types/portfolio';

interface ProjectPreviewPlaceholderProps {
  project: Project;
  className?: string;
  isMobileFrame?: boolean;
}

export const ProjectPreviewPlaceholder: React.FC<ProjectPreviewPlaceholderProps> = ({
  project,
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative w-full flex flex-col overflow-hidden rounded-[24px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[6px_6px_0px_#0f172a] group/preview ${className}`}
    >
      {/* tournament window navigation bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#faeed1] border-b-2 border-[#0f172a] shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#f87171] border border-[#0f172a]" />
          <span className="w-3 h-3 rounded-full bg-[#fde047] border border-[#0f172a]" />
          <span className="w-3 h-3 rounded-full bg-[#4ade80] border border-[#0f172a]" />
          <div className="ml-2 px-3 py-0.5 rounded-md bg-[#fffdf5] border border-[#0f172a]/50 text-[11px] font-mono font-bold text-[#0f172a] truncate max-w-[160px] sm:max-w-[240px]">
            {`championship://${project.id}.id`}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono font-black px-2.5 py-0.5 rounded-md bg-[#fde047] text-[#0f172a] border border-[#0f172a]">
          <Trophy className="w-3 h-3 text-[#ca8a04]" />
          <span>{project.category === 'sma' ? 'KEJUARAAN SMA' : 'TURNAMEN SMP'}</span>
        </div>
      </div>

      {/* content viewport */}
      <div className="relative w-full flex-1 min-h-0 bg-[#fff9d4]/60 flex items-center justify-center overflow-hidden p-4 sm:p-6">
        {!imageError && project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/preview:scale-[1.02]"
          />
        ) : (
          // dedicated sports championship placeholder banner
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#fef08a] via-[#fde047] to-[#fed7aa] border-2 border-[#0f172a] p-4 sm:p-6 flex flex-col justify-between items-center text-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-lg bg-[#0f172a] text-[#fde047] border border-[#0f172a]">
                {project.awardBadge || 'Official Achievement'}
              </span>

              {project.eventDate && (
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#0f172a] bg-[#fffdf5] px-2 py-0.5 rounded-lg border border-[#0f172a]/40">
                  <Calendar className="w-3 h-3 text-[#0284c7]" />
                  <span>{project.eventDate}</span>
                </div>
              )}
            </div>

            <div className="my-auto space-y-2 max-w-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] flex items-center justify-center text-[#ca8a04] shadow-[3px_3px_0px_#0f172a] group-hover/preview:scale-110 group-hover/preview:rotate-6 transition-all duration-300">
                {project.id === 'isl-2026' ? (
                  <Medal className="w-8 h-8 text-[#0284c7]" />
                ) : project.id === 'nesacup' ? (
                  <Trophy className="w-8 h-8 text-[#ca8a04]" />
                ) : (
                  <Award className="w-8 h-8 text-[#ea580c]" />
                )}
              </div>

              <h4 className="text-base sm:text-xl font-black text-[#0f172a] tracking-tight leading-tight">
                {project.title}
              </h4>

              {project.eventVenue && (
                <div className="flex items-center justify-center gap-1 text-[11px] font-mono font-bold text-[#475569]">
                  <MapPin className="w-3.5 h-3.5 text-[#e11d48]" />
                  <span>{project.eventVenue}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full pt-2 border-t border-[#0f172a]/20">
              <span className="text-[10px] font-mono text-[#0f172a] font-bold bg-[#fffdf5] px-2.5 py-0.5 rounded-md border border-[#0f172a]/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#eab308]" />
                <span>Dokumentasi Prestasi Resmi • Foto Menyusul</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
