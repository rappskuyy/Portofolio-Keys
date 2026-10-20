import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import type { Project } from '../../types/portfolio';
import { projectsData } from '../../data/portfolioData';
import { FlagshipSlideCard } from './FlagshipProjectParallax';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

interface ProjectShowcaseProps {
  onOpenProject?: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenProject }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [localActiveProject, setLocalActiveProject] = useState<Project | null>(null);

  const handleSelect = onOpenProject || setLocalActiveProject;
  const activeProject = onOpenProject ? null : localActiveProject;

  // featured flagship projects (the 3 basketball achievements)
  const flagshipProjects = projectsData.filter((p) => p.featured);

  // pinning scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // smooth inertial spring for tactile deceleration
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    mass: 0.3,
    restDelta: 0.0005
  });

  // gradual overlapping curtain wipe ranges for the 3 achievements
  const ySlide2 = useTransform(smoothProgress, [0.30, 0.48], ['100%', '0%'], { clamp: true });
  const ySlide3 = useTransform(smoothProgress, [0.65, 0.83], ['100%', '0%'], { clamp: true });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative h-[420vh] bg-[#fff9d4] select-none"
    >
      {/* pinned viewport stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* progress indicators (3 achievements) */}
        <div className="absolute top-[76px] sm:top-24 right-4 sm:right-12 z-50 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] sm:shadow-[4px_4px_0px_#0f172a]">
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              className="h-2 sm:h-2.5 rounded-full bg-[#faeed1] border border-[#0f172a] overflow-hidden w-6 sm:w-12"
            >
              <motion.div
                className="h-full bg-[#0284c7]"
                style={{
                  scaleX: useTransform(
                    smoothProgress,
                    [idx * 0.33, (idx + 1) * 0.33],
                    [0, 1],
                    { clamp: true }
                  )
                }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          ))}
        </div>

        {/* 3 flagship achievement presentation slides */}
        {flagshipProjects[0] && (
          <FlagshipSlideCard
            project={flagshipProjects[0]}
            index={0}
            yMotion="0%"
            depthLevel={1}
            onSelectProject={handleSelect}
          />
        )}

        {flagshipProjects[1] && (
          <FlagshipSlideCard
            project={flagshipProjects[1]}
            index={1}
            yMotion={ySlide2}
            depthLevel={2}
            onSelectProject={handleSelect}
          />
        )}

        {flagshipProjects[2] && (
          <FlagshipSlideCard
            project={flagshipProjects[2]}
            index={2}
            yMotion={ySlide3}
            depthLevel={3}
            onSelectProject={handleSelect}
          />
        )}
      </div>

      {/* local fallback case study modal */}
      {!onOpenProject && activeProject && (
        <ProjectCaseStudyModal
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setLocalActiveProject(null)}
        />
      )}
    </section>
  );
};
