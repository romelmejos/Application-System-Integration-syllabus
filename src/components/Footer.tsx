import { GraduationCap, Mail, ShieldAlert, Heart } from 'lucide-react';
import { courseInfoData } from '../data/courseData';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-stone-950 text-stone-300 py-16 relative overflow-hidden border-t-8 border-stone-900">
      {/* Accent Color Band */}
      <div className="absolute top-0 left-0 w-full h-[8px] flex">
        <div className="w-2/3 bg-hau-maroon" />
        <div className="w-1/3 bg-[#FFD700]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Slogan Column (5 Columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <span className="p-2.5 border-2 border-stone-800 bg-stone-900 text-[#FFD700]">
                <GraduationCap className="h-6 w-6 stroke-[2.5px]" />
              </span>
              <div>
                <h4 className="font-black text-lg tracking-tight uppercase text-white leading-none">
                  {courseInfoData.university}
                </h4>
                <span className="text-[10px] font-mono font-black text-stone-400 block mt-1 uppercase tracking-wider">
                  {courseInfoData.school} • Dept. of Computer Science
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-semibold">
              Dedicated to nurturing professional competencies, technical depth, and ethical foundations in the field of systems integration and software engineering.
            </p>
            <div className="text-xs font-mono italic text-[#FFD700] font-black uppercase tracking-wider">
              Laus Deo Semper! (Praise be to God Always!)
            </div>
          </div>

          {/* Course Spec Column (3 Columns) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono font-black text-white uppercase tracking-widest border-b-2 border-stone-800 pb-2">
              Syllabus Specs
            </h5>
            <ul className="space-y-2 text-xs text-stone-300 font-mono font-black uppercase tracking-tight">
              <li>• Course: {courseInfoData.code}</li>
              <li>• Lec Hours: {courseInfoData.lectureHours} per week</li>
              <li>• Lab Hours: {courseInfoData.labHours} per week</li>
              <li>• Level: 3rd Year BSCS / BSIT</li>
            </ul>
          </div>

          {/* Academic Integrity & Disclaimer Column (4 Columns) */}
          <div className="md:col-span-4 space-y-3 bg-stone-900 p-5 border-3 border-stone-850 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-1.5 text-xs font-mono font-black text-white uppercase tracking-wider">
              <ShieldAlert className="h-5 w-5 text-[#FFD700] shrink-0 stroke-[2.5px]" />
              <span>Academic Notice</span>
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed font-semibold">
              This course platform is strictly an academic syllabus resource for students of the School of Computing. All rights reserved. It does not sell courses, process fees, or operate commercial services.
            </p>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-8 border-t-2 border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono font-black text-stone-500 uppercase tracking-tight">
          <div>
            &copy; {new Date().getFullYear()} Holy Angel University. All Student work must adhere to HAU Academic Integrity Code.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed for Learning React</span>
            <Heart className="h-3.5 w-3.5 text-[#FFD700] fill-[#FFD700]" />
            <span>@ School of Computing</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
