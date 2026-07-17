import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare } from 'lucide-react';
import { faqData } from '../data/courseData';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'academics', label: 'Academics & Grading' },
    { id: 'policies', label: 'University Policies' },
    { id: 'software', label: 'Software Setup' },
    { id: 'labs', label: 'Laboratory Work' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqData
    : faqData.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white border-b-8 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-mono font-black tracking-widest text-white bg-hau-maroon px-4 py-2 uppercase border-2 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]">
            Student Inquiries
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase mt-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto mt-4 border-2 border-stone-900" />
          <p className="text-stone-700 mt-4 font-semibold text-lg">
            Clarifications on academic requirements, computer hardware constraints, and Holy Angel University computing laboratory protocols.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`faq-cat-btn-${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null); // Reset expansions on filter change
              }}
              className={`px-4 py-2 text-xs font-mono font-black rounded-none uppercase tracking-wider transition-all duration-150 border-3 border-stone-900 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-hau-maroon text-white shadow-[3px_3px_0px_0px_#FFD700]'
                  : 'bg-white text-stone-800 hover:bg-[#F8F9FA] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`border-4 border-stone-900 transition-all duration-150 overflow-hidden ${
                    isExpanded
                      ? 'bg-[#FFD700] text-stone-950 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-white text-stone-900 hover:bg-stone-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  <button
                    id={`faq-header-btn-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-start gap-4 p-5 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="p-2 border-2 border-stone-900 bg-stone-100 text-hau-maroon shrink-0 mt-0.5">
                      <HelpCircle className="h-5 w-5 stroke-[2.5px]" />
                    </span>
                    <div className="flex-grow pr-4">
                      <span className="text-[9px] font-mono font-black text-stone-850 uppercase tracking-widest block mb-1">
                        {faq.category} Core
                      </span>
                      <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-stone-900 leading-tight">
                        {faq.question}
                      </h4>
                    </div>
                    <div className="text-stone-900 shrink-0 self-center">
                      {isExpanded ? <ChevronUp className="h-5 w-5 stroke-[3px]" /> : <ChevronDown className="h-5 w-5 stroke-[3px]" />}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ${
                      isExpanded ? 'border-t-3 border-stone-900 max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-5 pl-14 sm:pl-16 bg-white text-stone-850 text-sm font-semibold leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-12 border-4 border-dashed border-stone-400 bg-white text-center text-stone-500">
              <MessageSquare className="h-10 w-10 mx-auto mb-2 text-stone-900 stroke-[2.5px]" />
              <p className="text-sm font-black uppercase">No FAQs match this category filter.</p>
            </div>
          )}
        </div>

        {/* Contact Advisory */}
        <div className="mt-16 text-center max-w-xl mx-auto p-6 bg-white border-4 border-stone-900 shadow-[5px_5px_0px_0px_#800000]">
          <p className="text-sm font-bold text-stone-750 leading-relaxed">
            Have an academic concern not answered here? Speak with the course adviser or email the computing administration office at{' '}
            <a href="mailto:support-computing@hau.edu.ph" className="text-hau-maroon font-black underline hover:text-[#900000] tracking-wide">
              support-computing@hau.edu.ph
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}
