import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, Award, ChevronDown, CheckCircle2 } from 'lucide-react';
import { courseInfoData } from '../data/courseData';

interface HeroProps {
  onExploreClick: () => void;
  onPrereqClick: () => void;
}

export default function Hero({ onExploreClick, onPrereqClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-[#F8F9FA] text-[#212529] overflow-hidden pt-36 pb-20 border-b-8 border-hau-maroon"
    >
      {/* Decorative Grid Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] aspect-square rounded-full bg-hau-maroon blur-[150px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] aspect-square rounded-full bg-hau-gold blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80000015_2px,transparent_2px),linear-gradient(to_bottom,#80000015_2px,transparent_2px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Institutional Label */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 bg-white border-3 border-hau-maroon shadow-[3px_3px_0px_0px_#FFD700]">
            <span className="w-3 h-3 bg-hau-maroon" />
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-stone-800">
              {courseInfoData.university} • {courseInfoData.school}
            </span>
          </motion.div>

          {/* Main Course Title */}
          <motion.div variants={itemVariants} className="space-y-4 max-w-5xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-hau-maroon text-hau-gold font-mono text-sm font-black uppercase tracking-widest border-2 border-stone-900">
              COURSE CODE: {courseInfoData.code}
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-stone-900 uppercase">
              Application & <br/>
              <span className="underline decoration-[#FFD700] decoration-8 underline-offset-8">System Integration</span>
            </h1>
            <p className="text-xl sm:text-3xl font-black text-hau-maroon tracking-tight uppercase">
              ReactJS Architecture & Enterprise Ecosystems
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-stone-700 text-base sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A rigorous, engineering-focused curriculum designed to build high-performance, single-page systems. Master state hydration, asynchronous pipeline triggers, and real-time enterprise system interfaces.
          </motion.p>

          {/* Meta Info Badges with Heavy Border & Shadow */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-4"
          >
            {[
              { icon: BookOpen, label: 'Course Credits', val: `${courseInfoData.credits} Academic Units`, accent: '#800000' },
              { icon: Clock, label: 'Contact Hours', val: `${courseInfoData.lectureHours}h Lec / ${courseInfoData.labHours}h Lab`, accent: '#FFD700' },
              { icon: Calendar, label: 'Current Term', val: `${courseInfoData.semester} ${courseInfoData.academicYear}`, accent: '#800000' },
              { icon: Award, label: 'Department', val: 'Computer Science', accent: '#FFD700' },
            ].map((meta, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-5 bg-white border-4 border-stone-900 shadow-[6px_6px_0px_0px_#800000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#800000] transition-all duration-200"
              >
                <div className="p-2 bg-stone-100 border-2 border-stone-900 mb-3">
                  <meta.icon className="h-6 w-6 text-hau-maroon" />
                </div>
                <span className="text-[11px] font-mono font-black text-stone-500 uppercase tracking-widest">{meta.label}</span>
                <span className="text-sm sm:text-base font-black text-stone-900 mt-2 text-center">{meta.val}</span>
              </div>
            ))}
          </motion.div>

          {/* Action CTAs (Brutalist Blocks with Chunky Shadows) */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button
              id="hero-explore-syllabus"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 bg-hau-maroon text-white font-black uppercase tracking-wider text-sm border-4 border-stone-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              Explore Syllabus Modules
            </button>
            <button
              id="hero-check-prereq"
              onClick={onPrereqClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#FFD700] text-stone-900 font-black uppercase tracking-wider text-sm border-4 border-stone-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              Check Prerequisites
            </button>
          </motion.div>

          {/* Key Outlay */}
          <motion.div variants={itemVariants} className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-stone-800 font-black tracking-wider uppercase">
            <span className="flex items-center gap-2 px-3 py-1 bg-white border-2 border-stone-900"><CheckCircle2 className="h-4 w-4 text-hau-maroon" /> Hands-on Laboratory Labs</span>
            <span className="flex items-center gap-2 px-3 py-1 bg-white border-2 border-stone-900"><CheckCircle2 className="h-4 w-4 text-hau-maroon" /> HAU Standard Certification</span>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="pt-10 flex flex-col items-center gap-1.5 text-stone-600 cursor-pointer hover:text-hau-maroon"
            onClick={onExploreClick}
          >
            <span className="text-[10px] font-black tracking-widest uppercase">Scroll to Explore</span>
            <ChevronDown className="h-5 w-5 stroke-[3px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
