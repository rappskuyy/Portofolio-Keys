import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Brain,
  Target,
  Crown,
  Timer,
  Sparkles,
  Trophy,
  Medal,
  Waves,
  Award,
  Users,
  GraduationCap,
  Flame,
  Dumbbell,
  Heart,
  TrendingUp,
  ShieldCheck,
  Star,
  Activity,
  CheckCircle2,
  Check
} from 'lucide-react';
import type { TechItem, TechLayer } from '../../types/portfolio';
import type { FlowDomainId } from './PipelineFlowPresets';

const iconMap: Record<string, React.FC<{ size?: number; color?: string; className?: string }>> = {
  messagesquare: MessageSquare,
  brain: Brain,
  target: Target,
  crown: Crown,
  timer: Timer,
  sparkles: Sparkles,
  trophy: Trophy,
  medal: Medal,
  waves: Waves,
  award: Award,
  users: Users,
  graduationcap: GraduationCap,
  flame: Flame,
  dumbbell: Dumbbell,
  heart: Heart,
  trendingup: TrendingUp,
  shieldcheck: ShieldCheck,
  star: Star,
  activity: Activity
};

interface PipelineInspectorProps {
  selectedTech: TechItem | null;
  selectedLayer: TechLayer;
  activeDomain: FlowDomainId;
  onClearTechSelection: () => void;
  onSelectProject?: (projectId: string) => void;
}

const layerDetailsMap: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    guarantees: string[];
    role: string;
  }
> = {
  arsenal: {
    title: 'Personal Arsenal',
    subtitle: 'Skill & Keunggulan Diri',
    description:
      'Kumpulan keahlian utama, kemampuan kepemimpinan tim, komunikasi publik kelas, serta daya analisis fenomena sosial dan ekonomi pelajar SMA jurusan IPS.',
    guarantees: [
      'Komunikasi presentasi kelas artikulatif & percaya diri',
      'Visi bermain & pengatur serangan taktis tim basket',
      'Manajemen waktu seimbang antara atlet & tugas akademik'
    ],
    role: 'Skill & Keunggulan Diri'
  },
  awards: {
    title: 'Activities & Awards',
    subtitle: 'Organisasi & Penghargaan',
    description:
      'Rekam jejak kejuaraan turnamen basket antar-pelajar, perolehan medali kompetisi renang, dan keterlibatan aktif dalam kepanitiaan olahraga sekolah.',
    guarantees: [
      'Juara 1 Turnamen Basket Pelajar Antar-SMA',
      'Starting Five tim basket utama SMA Negeri 1 Cicurug',
      'Medali kompetisi renang nomor gaya bebas & dada'
    ],
    role: 'Organisasi & Prestasi Lomba'
  },
  beyond: {
    title: 'Beyond the Classroom',
    subtitle: 'Aktivitas di Luar Kelas',
    description:
      'Aktivitas pembinaan fisik, klub basket regional, sesi renang kebugaran rutin, latihan ketahanan fisik, serta keterlibatan aktif dalam aksi sosial komunitas muda.',
    guarantees: [
      'Latihan intensif klub basket 3-4 sesi per minggu',
      'Rutinitas renang kebugaran ketahanan kardiovaskular',
      'Partisipasi bakti sosial & kepedulian lingkungan warga'
    ],
    role: 'Aktivitas di Luar Kelas'
  },
  bring: {
    title: 'What I Bring',
    subtitle: 'Karakter & Nilai Diri',
    description:
      'Prinsip karakter kuat yang selalu dibawa ke dalam setiap tim: mentalitas juara pantang menyerah, sportivitas fair play, energi positif, dan semangat solidaritas tinggi.',
    guarantees: [
      'Mentalitas juara & tangguh saat situasi genting',
      'Prinsip sportivitas, kejujuran, dan respect tinggi',
      'Solidaritas & kolaborasi mengutamakan tim'
    ],
    role: 'Karakter & Nilai Diri'
  },
  // fallbacks for backward compatibility
  client: {
    title: 'Personal Arsenal',
    subtitle: 'Skill & Keunggulan Diri',
    description:
      'Kumpulan keahlian utama, kemampuan kepemimpinan tim, komunikasi publik kelas, serta daya analisis sosial IPS.',
    guarantees: [
      'Komunikasi presentasi kelas artikulatif',
      'Visi bermain & pengatur serangan tim basket',
      'Manajemen waktu seimbang antara atlet & sekolah'
    ],
    role: 'Skill & Keunggulan Diri'
  },
  backend: {
    title: 'Activities & Awards',
    subtitle: 'Organisasi & Penghargaan',
    description:
      'Rekam jejak kejuaraan turnamen basket antar-pelajar, kompetisi renang, dan kepanitiaan sekolah.',
    guarantees: [
      'Juara 1 Turnamen Basket Antar-SMA',
      'Starting Five tim basket sekolah',
      'Medali lomba renang nomor gaya bebas & dada'
    ],
    role: 'Organisasi & Prestasi Lomba'
  },
  database: {
    title: 'Beyond the Classroom',
    subtitle: 'Aktivitas di Luar Kelas',
    description:
      'Klub basket regional, sesi renang kebugaran, dan keterlibatan sosial komunitas muda.',
    guarantees: [
      'Latihan intensif klub basket 3-4x seminggu',
      'Rutinitas renang kebugaran aerobik',
      'Partisipasi bakti sosial kepemudaan'
    ],
    role: 'Aktivitas di Luar Kelas'
  },
  devops: {
    title: 'What I Bring',
    subtitle: 'Karakter & Nilai Diri',
    description:
      'Mentalitas juara pantang menyerah, sportivitas fair play, dan solidaritas tim.',
    guarantees: [
      'Mentalitas juara saat situasi genting',
      'Sportivitas dan respect tinggi',
      'Solidaritas mengutamakan tim'
    ],
    role: 'Karakter & Nilai Diri'
  }
};

export const PipelineInspector: React.FC<PipelineInspectorProps> = ({
  selectedTech,
  selectedLayer,
  onClearTechSelection
}) => {
  const layerInfo = layerDetailsMap[selectedLayer] || layerDetailsMap.arsenal;

  // specific technology / capability inspection view
  if (selectedTech) {
    const Icon = iconMap[selectedTech.iconKey] || Star;
    const currentLayerInfo = layerDetailsMap[selectedTech.layer] || layerInfo;

    return (
      <motion.div
        id="pipeline-inspector"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="p-7 sm:p-9 rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] space-y-6 select-none"
      >
        {/* inspector header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#0f172a]/10">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl border-2 border-[#0f172a] flex items-center justify-center shadow-[3px_3px_0px_#0f172a] bg-[#fff9d4]"
              style={{ color: selectedTech.color }}
            >
              <Icon size={28} color={selectedTech.color} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                  {selectedTech.name}
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-[#fde047] text-[#0f172a] border border-[#0f172a]">
                  {selectedTech.roleTag || selectedTech.category}
                </span>
              </div>

              <div className="text-xs font-mono text-[#0284c7] font-bold mt-0.5">
                Pilar: {currentLayerInfo.title} ({currentLayerInfo.subtitle})
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClearTechSelection}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-[#faeed1] hover:bg-[#fde047] text-xs font-mono font-bold text-[#0f172a] border border-[#0f172a] transition-colors cursor-pointer"
          >
            &larr; Lihat Detail Kategori
          </button>
        </div>

        {/* proof metric badge if present */}
        {selectedTech.proofMetric && (
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#fef08a]/60 border border-[#eab308] w-fit text-xs font-mono font-bold text-[#0f172a]">
            <Trophy className="w-4 h-4 text-[#ca8a04]" />
            <span>Bukti / Status: {selectedTech.proofMetric}</span>
          </div>
        )}

        {/* usage context */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748b]">
            Penerapan &amp; Pengalaman
          </div>
          <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed bg-[#fff9d4]/60 p-4 rounded-2xl border border-[#0f172a]/20">
            {selectedTech.usageContext}
          </p>
        </div>

        {/* key highlights */}
        {selectedTech.highlights && selectedTech.highlights.length > 0 && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0369a1]">
                Sorotan Utama &amp; Nilai Tambah
              </span>
              <span className="text-[11px] font-mono text-[#64748b]">
                {selectedTech.highlights.length} Poin Unggulan
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedTech.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] flex items-start gap-2.5 text-xs font-bold text-[#0f172a]"
                >
                  <Check className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                  <span className="leading-tight">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  // default layer view
  return (
    <motion.div
      id="pipeline-inspector"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="p-7 sm:p-9 rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] space-y-6 select-none"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-[#0f172a]/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xl bg-[#0284c7] text-white text-xs font-mono font-black border border-[#0f172a]">
              DETAIL KATEGORI
            </span>
            <span className="text-xs font-mono font-bold text-[#64748b] uppercase">
              {layerInfo.role}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight mt-1.5">
            {layerInfo.title}
          </h3>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-[#fff9d4] border border-[#0f172a] text-xs font-mono font-bold text-[#0f172a] self-start sm:self-auto">
          {layerInfo.subtitle}
        </div>
      </div>

      <p className="text-sm sm:text-base text-[#334155] font-medium leading-relaxed">
        {layerInfo.description}
      </p>

      {/* engineering / capability focus */}
      <div className="space-y-2.5 pt-1">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0369a1]">
          Fokus Utama
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {layerInfo.guarantees.map((guarantee, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] flex items-center gap-2.5 text-xs font-mono font-bold text-[#0f172a]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
              <span>{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
