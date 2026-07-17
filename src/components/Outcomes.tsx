import { motion } from 'motion/react';
import { Cpu, Share2, Shield, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';
import { outcomesData } from '../data/courseData';

export default function Outcomes() {
  const icons = [Cpu, Share2, Shield, RefreshCw, Terminal];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <section id="outcomes" className="py-24 bg-[#F8F9FA] border-b-8 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono font-black tracking-widest text-white bg-hau-maroon px-4 py-2 uppercase border-2 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]">
            Graduate Competencies
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase mt-4">
            Expected Course Learning Outcomes
          </h2>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto mt-4 border-2 border-stone-900" />
          <p className="text-stone-700 mt-4 font-semibold text-lg">
            Upon successful completion of the {outcomesData.length} course outcomes, students will possess the practical and architectural expertise to work as full-fledged React system engineers.
          </p>
        </div>

        {/* Outcomes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {outcomesData.map((outcome, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={outcome.code}
                id={`outcome-card-${outcome.code}`}
                variants={itemVariants}
                className="group relative flex flex-col p-6 bg-white border-4 border-stone-900 shadow-[5px_5px_0px_0px_#800000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_#800000] transition-all duration-200"
              >
                {/* Header Icon Row */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-stone-100">
                  <div className="p-2.5 bg-[#F8F9FA] border-2 border-stone-900 text-hau-maroon group-hover:bg-[#FFD700] transition-colors duration-200">
                    <IconComponent className="h-6 w-6 stroke-[2.5px]" />
                  </div>
                  <span className="text-xs font-mono font-black text-stone-800 bg-[#FFD700] px-2.5 py-1 border-2 border-stone-900">
                    {outcome.code}
                  </span>
                </div>

                {/* Outcome Info */}
                <h3 className="text-lg font-black text-stone-900 uppercase tracking-tight group-hover:text-hau-maroon transition-colors duration-150">
                  {outcome.competency}
                </h3>
                <p className="text-sm text-stone-600 mt-3 font-semibold leading-relaxed flex-grow">
                  {outcome.description}
                </p>

                {/* Competency Badge Check */}
                <div className="mt-5 pt-4 border-t-2 border-stone-900 flex items-center gap-2 text-xs font-mono text-stone-800 font-black uppercase">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-hau-maroon stroke-[3px]" />
                  <span>Verified Competency Metric</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Competency Banner (Bold Brutalist) */}
        <div className="mt-16 bg-[#800000] border-4 border-stone-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-black text-[#FFD700] uppercase tracking-wide">
              Aligned with Washington Accord CS Standards
            </h4>
            <p className="text-sm text-stone-100 max-w-xl font-medium">
              Course outcomes are continuously monitored and mapped against computing industry demands and CHED CMO series to maintain peak educational excellence at Holy Angel University.
            </p>
          </div>
          <div className="shrink-0 bg-white text-stone-900 font-black px-4 py-2 border-2 border-stone-900 text-xs font-mono tracking-wider uppercase shadow-[3px_3px_0px_0px_#FFD700]">
            CHED Compliant
          </div>
        </div>

      </div>
    </section>
  );
}
