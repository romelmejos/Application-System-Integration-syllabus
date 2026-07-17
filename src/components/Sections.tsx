import { useState } from 'react';
import { Calendar, User, MapPin, Search, Users, AlertCircle } from 'lucide-react';
import { sectionsData } from '../data/courseData';

export default function Sections() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState<string>('SEC1');

  const filteredSections = sectionsData.filter(
    (sec) =>
      sec.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedSec = sectionsData.find((s) => s.id === selectedSectionId) || sectionsData[0];

  return (
    <section id="sections" className="py-24 bg-white border-b-8 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono font-black tracking-widest text-white bg-hau-maroon px-4 py-2 uppercase border-2 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]">
            Class Finder
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase mt-4">
            Available Class Sections & Schedules
          </h2>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto mt-4 border-2 border-stone-900" />
          <p className="text-stone-700 mt-4 font-semibold text-lg">
            Review the list of active lecture and laboratory schedule sections for 6APSI, managed by the School of Computing.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Side: Filter and Cards (6 Columns) */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Search Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-stone-850">
                <Search className="h-5 w-5 stroke-[2.5px]" />
              </span>
              <input
                type="text"
                id="section-search-input"
                placeholder="Search by section, course, or adviser..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 text-sm bg-white text-stone-900 border-3 border-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black focus:outline-none placeholder-stone-500"
              />
            </div>

            {/* List */}
            <div className="space-y-4">
              {filteredSections.length > 0 ? (
                filteredSections.map((sec) => {
                  const percentFilled = Math.round((sec.enrolled / sec.capacity) * 100);
                  const isSelected = sec.id === selectedSectionId;

                  return (
                    <button
                      key={sec.id}
                      id={`section-btn-${sec.id}`}
                      onClick={() => setSelectedSectionId(sec.id)}
                      className={`w-full text-left p-5 border-4 border-stone-900 transition-all duration-150 flex items-start justify-between cursor-pointer focus:outline-none ${
                        isSelected
                          ? 'bg-[#FFD700] text-stone-950 shadow-[4px_4px_0px_0px_#800000]'
                          : 'bg-white text-stone-900 hover:bg-[#F8F9FA] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                    >
                      <div className="space-y-2 flex-grow pr-4">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-base uppercase tracking-tight text-stone-900">
                            {sec.name}
                          </span>
                          <span className="text-[10px] font-mono font-black bg-stone-950 text-white px-2 py-0.5 border border-stone-900">
                            {sec.id}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-850">
                          <User className="h-4 w-4 text-stone-800 shrink-0 stroke-[2.5px]" />
                          <span>{sec.instructor}</span>
                        </div>
                      </div>

                      {/* Seat Progress Gauge */}
                      <div className="flex flex-col items-end justify-center min-w-[110px] text-right shrink-0">
                        <span className="text-xs font-mono font-black text-stone-900 uppercase">
                          {sec.enrolled} / {sec.capacity} Seats
                        </span>
                        <div className="w-20 bg-stone-250 h-3 border-2 border-stone-900 mt-1.5 overflow-hidden">
                          <div
                            className={`h-full ${percentFilled >= 90 ? 'bg-stone-900' : 'bg-hau-maroon'}`}
                            style={{ width: `${percentFilled}%` }}
                          />
                        </div>
                        <span className="text-[9px] font-mono font-black text-stone-850 uppercase mt-1">
                          {percentFilled}% Capacity
                        </span>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-10 border-4 border-dashed border-stone-400 bg-white text-center text-stone-500">
                  <AlertCircle className="h-8 w-8 mx-auto mb-2 text-stone-800" />
                  <p className="text-sm font-black uppercase">No sections found matching "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Visual Section Schedule Detail Sheet (6 Columns) */}
          <div className="lg:col-span-6">
            <div className="bg-white border-4 border-stone-900 p-6 sm:p-8 space-y-6 shadow-[8px_8px_0px_0px_#800000]">
              
              {/* Card Header Title */}
              <div>
                <span className="text-[10px] font-mono font-black text-stone-500 uppercase tracking-widest block mb-1">
                  DETAILED ACADEMIC SCHEDULING
                </span>
                <h3 className="text-2xl font-black text-stone-900 uppercase tracking-tight">
                  Schedule Card: {selectedSec.name}
                </h3>
              </div>

              {/* Grid with timeline layout */}
              <div className="space-y-4">
                
                {/* Lecture Info Row */}
                <div className="p-4 bg-[#F8F9FA] border-3 border-stone-900 space-y-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 text-xs font-mono font-black text-hau-maroon uppercase tracking-wider">
                    <Calendar className="h-4 w-4 shrink-0 text-hau-maroon stroke-[2.5px]" />
                    <span>Lecture Schedule</span>
                  </div>
                  <p className="text-sm font-black text-stone-900 uppercase pl-6">
                    {selectedSec.lectureSchedule}
                  </p>
                  <p className="text-xs font-bold text-stone-600 pl-6 leading-relaxed">
                    Weekly academic code briefing, syntax design analysis, and state paradigms lectures.
                  </p>
                </div>

                {/* Lab Info Row */}
                <div className="p-4 bg-white border-3 border-stone-900 space-y-2 shadow-[3px_3px_0px_0px_#FFD700]">
                  <div className="flex items-center gap-2 text-xs font-mono font-black text-stone-900 uppercase tracking-wider">
                    <Calendar className="h-4 w-4 shrink-0 text-stone-900 stroke-[2.5px]" />
                    <span>Laboratory Schedule</span>
                  </div>
                  <p className="text-sm font-black text-stone-900 uppercase pl-6">
                    {selectedSec.labSchedule}
                  </p>
                  <p className="text-xs font-bold text-stone-600 pl-6 leading-relaxed">
                    Supervised programming, client system setups, test runs, and custom hook sandboxes.
                  </p>
                </div>

                {/* Venue and Instructor Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border-3 border-stone-900 space-y-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-black text-stone-500 uppercase">
                      <MapPin className="h-3.5 w-3.5 shrink-0 stroke-[2.5px]" />
                      <span>Physical Lab</span>
                    </div>
                    <p className="text-xs font-black text-stone-900 uppercase">{selectedSec.venue}</p>
                  </div>

                  <div className="p-4 bg-white border-3 border-stone-900 space-y-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-black text-stone-500 uppercase">
                      <User className="h-3.5 w-3.5 shrink-0 stroke-[2.5px]" />
                      <span>Course Instructor</span>
                    </div>
                    <p className="text-xs font-black text-stone-900 uppercase">{selectedSec.instructor}</p>
                  </div>
                </div>

              </div>

              {/* Consultation Info Footer */}
              <div className="p-4 bg-stone-900 text-white border-3 border-stone-900 flex gap-4 shadow-[4px_4px_0px_0px_#800000]">
                <Users className="h-6 w-6 text-[#FFD700] shrink-0 mt-0.5 stroke-[2.5px]" />
                <div>
                  <h4 className="text-xs font-mono font-black text-[#FFD700] uppercase tracking-widest block mb-1">
                    Adviser Consultation Hours
                  </h4>
                  <p className="text-xs text-stone-200 leading-relaxed font-semibold">
                    Need additional support for system integrations or React? Schedule consulting with{' '}
                    <strong className="text-white font-black">{selectedSec.instructor}</strong> during official department consulting blocks (Mondays/Wednesdays 1:30 PM - 3:00 PM).
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
