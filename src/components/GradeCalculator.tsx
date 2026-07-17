import { useState } from 'react';
import { Calculator, Award, Info, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';

export default function GradeCalculator() {
  const [assignmentScore, setAssignmentScore] = useState<number>(85);
  const [seatworkScore, setSeatworkScore] = useState<number>(80);
  const [quizScore, setQuizScore] = useState<number>(75);
  const [skillsBadgeScore, setSkillsBadgeScore] = useState<number>(90);
  const [majorExamScore, setMajorExamScore] = useState<number>(80);

  // Calculate Class Standing (60% of Final Grade)
  // Weights: Assignment 20%, Seatwork 30%, Quiz 30%, Skills Badge 20%
  const classStanding = parseFloat(
    ((assignmentScore * 0.2) + (seatworkScore * 0.3) + (quizScore * 0.3) + (skillsBadgeScore * 0.2)).toFixed(2)
  );

  // Calculate Final Computed Average
  // Weights: Class Standing 60%, Major Exam 40%
  const finalPercentage = parseFloat(
    ((classStanding * 0.6) + (majorExamScore * 0.4)).toFixed(2)
  );

  // Map computed average to HAU point system from Page 18 of syllabus
  const getHAUGrade = (avg: number) => {
    if (avg >= 94.0) return { grade: '1.00', transmuted: '97 - 100', desc: 'Outstanding', passed: true, color: 'text-stone-900 bg-white border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]' };
    if (avg >= 88.0) return { grade: '1.25', transmuted: '94 - 96', desc: 'Excellent', passed: true, color: 'text-stone-900 bg-white border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]' };
    if (avg >= 82.0) return { grade: '1.50', transmuted: '91 - 93', desc: 'Superior', passed: true, color: 'text-stone-900 bg-white border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]' };
    if (avg >= 76.0) return { grade: '1.75', transmuted: '88 - 90', desc: 'Very Good', passed: true, color: 'text-stone-900 bg-white border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]' };
    if (avg >= 70.0) return { grade: '2.00', transmuted: '85 - 87', desc: 'Good', passed: true, color: 'text-stone-900 bg-white border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]' };
    if (avg >= 64.0) return { grade: '2.25', transmuted: '82 - 84', desc: 'Satisfactory', passed: true, color: 'text-stone-900 bg-white border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]' };
    if (avg >= 58.0) return { grade: '2.50', transmuted: '79 - 81', desc: 'Fairly Satisfactory', passed: true, color: 'text-stone-900 bg-white border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]' };
    if (avg >= 52.0) return { grade: '2.75', transmuted: '76 - 78', desc: 'Fair', passed: true, color: 'text-stone-900 bg-white border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]' };
    if (avg >= 50.0) return { grade: '3.00', transmuted: '75', desc: 'Passed', passed: true, color: 'text-stone-900 bg-[#FFD700] border-3 border-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' };
    return { grade: '5.00', transmuted: 'Below 75', desc: 'Failed / No Credit', passed: false, color: 'text-white bg-[#800000] border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]' };
  };

  const gradeResult = getHAUGrade(finalPercentage);

  return (
    <section id="calculator" className="py-24 bg-[#F8F9FA] border-b-8 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono font-black tracking-widest text-white bg-hau-maroon px-4 py-2 uppercase border-2 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]">
            Grade Estimation
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase mt-4">
            HAU Grade Point Calculator
          </h2>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto mt-4 border-2 border-stone-900" />
          <p className="text-stone-700 mt-4 font-semibold text-lg">
            Estimate your Class Standing, Major Exam score, and corresponding official Holy Angel University point grade based on the School of Computing's 60/40 grading weight scheme.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Inputs (7 Columns) */}
          <div className="lg:col-span-7 bg-white border-4 border-stone-900 p-6 sm:p-8 shadow-[6px_6px_0px_0px_#800000] space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b-2 border-stone-900">
              <span className="p-2 bg-stone-100 border border-stone-900">
                <Calculator className="h-5 w-5 text-hau-maroon stroke-[2.5px]" />
              </span>
              <h3 className="text-xl font-black text-stone-900 uppercase tracking-tight">
                HAU Syllabus Weights (60% CS / 40% Exam)
              </h3>
            </div>

            <div className="bg-stone-50 p-4 border-2 border-stone-900 space-y-4">
              <h4 className="text-xs font-mono font-black text-stone-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-hau-maroon inline-block border border-stone-900" />
                Class Standing Components (60% of Final Grade)
              </h4>

              {/* Assignment Slider */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span className="text-stone-850 uppercase tracking-wide">Assignments (20% of CS)</span>
                  <span className="text-white bg-stone-900 px-2 py-0.5 border border-stone-900 text-[10px]">{assignmentScore}%</span>
                </div>
                <input
                  type="range"
                  id="grade-slider-assignment"
                  min="0"
                  max="100"
                  value={assignmentScore}
                  onChange={(e) => setAssignmentScore(parseInt(e.target.value))}
                  className="w-full h-3 bg-white border-2 border-stone-900 rounded appearance-none cursor-pointer accent-hau-maroon"
                />
              </div>

              {/* Seatwork Slider */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span className="text-stone-850 uppercase tracking-wide">Seatwork & Hands-on (30% of CS)</span>
                  <span className="text-white bg-stone-900 px-2 py-0.5 border border-stone-900 text-[10px]">{seatworkScore}%</span>
                </div>
                <input
                  type="range"
                  id="grade-slider-seatwork"
                  min="0"
                  max="100"
                  value={seatworkScore}
                  onChange={(e) => setSeatworkScore(parseInt(e.target.value))}
                  className="w-full h-3 bg-white border-2 border-stone-900 rounded appearance-none cursor-pointer accent-hau-maroon"
                />
              </div>

              {/* Quizzes Slider */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span className="text-stone-850 uppercase tracking-wide">Theoretical Quizzes (30% of CS)</span>
                  <span className="text-white bg-stone-900 px-2 py-0.5 border border-stone-900 text-[10px]">{quizScore}%</span>
                </div>
                <input
                  type="range"
                  id="grade-slider-quiz"
                  min="0"
                  max="100"
                  value={quizScore}
                  onChange={(e) => setQuizScore(parseInt(e.target.value))}
                  className="w-full h-3 bg-white border-2 border-stone-900 rounded appearance-none cursor-pointer accent-hau-maroon"
                />
              </div>

              {/* Skills Badge Slider */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span className="text-stone-850 uppercase tracking-wide">Skills Badges (20% of CS)</span>
                  <span className="text-white bg-stone-900 px-2 py-0.5 border border-stone-900 text-[10px]">{skillsBadgeScore}%</span>
                </div>
                <input
                  type="range"
                  id="grade-slider-skills"
                  min="0"
                  max="100"
                  value={skillsBadgeScore}
                  onChange={(e) => setSkillsBadgeScore(parseInt(e.target.value))}
                  className="w-full h-3 bg-white border-2 border-stone-900 rounded appearance-none cursor-pointer accent-hau-maroon"
                />
              </div>

              <div className="pt-2 border-t border-dashed border-stone-300 flex justify-between items-center text-xs font-mono font-black text-hau-maroon">
                <span>Calculated Class Standing Score:</span>
                <span className="bg-white px-2 py-0.5 border-2 border-stone-900 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">{classStanding}%</span>
              </div>
            </div>

            <div className="bg-stone-50 p-4 border-2 border-stone-900 space-y-4">
              <h4 className="text-xs font-mono font-black text-stone-800 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#FFD700] inline-block border border-stone-900" />
                Major Examination (40% of Final Grade)
              </h4>

              {/* Major Exam Slider */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span className="text-stone-850 uppercase tracking-wide">Summative Exam / Project (40% Total)</span>
                  <span className="text-white bg-stone-900 px-2 py-0.5 border border-stone-900 text-[10px]">{majorExamScore}%</span>
                </div>
                <input
                  type="range"
                  id="grade-slider-major"
                  min="0"
                  max="100"
                  value={majorExamScore}
                  onChange={(e) => setMajorExamScore(parseInt(e.target.value))}
                  className="w-full h-3 bg-white border-2 border-stone-900 rounded appearance-none cursor-pointer accent-[#FFD700]"
                />
              </div>
              <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wide">Includes major summative exams (Prelims/Midterms) and the Final Capstone project development.</p>
            </div>
          </div>

          {/* Right Results Pane (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* HAU Grade Display Box (Heavy Dark Brutalist) */}
            <div className="bg-[#800000] text-white p-6 sm:p-8 border-4 border-stone-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              
              <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#FFD700] font-black uppercase">
                <Award className="h-4 w-4 stroke-[2.5px]" />
                <span>Official HAU Point Grade</span>
              </div>

              {/* Big Grade Number */}
              <div className="mt-4 flex items-baseline gap-3">
                <span id="calculated-grade-number" className="text-6xl sm:text-7xl font-black text-[#FFD700] tracking-tight leading-none">
                  {gradeResult.grade}
                </span>
                <span className="text-xs font-mono text-stone-200 uppercase font-black tracking-widest bg-white/10 px-2 py-0.5 border border-white/15">Point Equivalent</span>
              </div>

              {/* Raw Percent bar */}
              <div className="mt-4 space-y-1">
                <div className="flex justify-between text-xs font-mono font-black text-stone-100 uppercase tracking-wider">
                  <span>Computed Syllabus Average</span>
                  <span className="text-white font-black bg-stone-950 px-2.5 py-0.5 border border-[#FFD700]">{finalPercentage}%</span>
                </div>
                <div className="w-full bg-stone-900 h-4 border-2 border-stone-900 overflow-hidden">
                  <div
                    className="bg-[#FFD700] h-full transition-all duration-300"
                    style={{ width: `${finalPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-stone-300 font-bold uppercase pt-1">
                  <span>Transmutation:</span>
                  <span className="text-[#FFD700]">Range {gradeResult.transmuted}</span>
                </div>
              </div>

              {/* Status Alert Badge */}
              <div className={`mt-6 p-4 border-2 text-xs leading-relaxed transition-all duration-150 ${gradeResult.color}`}>
                <div className="flex items-start gap-2.5">
                  {gradeResult.passed ? (
                    <Sparkles className="h-5 w-5 shrink-0 text-stone-900 mt-0.5 stroke-[2.5px]" />
                  ) : (
                    <ShieldAlert className="h-5 w-5 shrink-0 text-[#FFD700] mt-0.5 stroke-[2.5px]" />
                  )}
                  <div>
                    <span className="font-black uppercase tracking-wider block mb-1 text-stone-900">
                      {gradeResult.desc} • {gradeResult.passed ? 'PASSED COURSE' : 'ACADEMIC ALERT'}
                    </span>
                    <span className="font-semibold text-stone-850">
                      {gradeResult.passed
                        ? 'Congratulations! This score meets and exceeds the passing academic standard (50% average / 3.00 point grade).'
                        : 'Academic Alert: Passing mark is 50% Computed Average (3.00). Consult with Mr. Ulysses Raymond Monsale for remediation.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* HAU Grading Scale Reference Table (Exact Page 18 Ranges) */}
            <div className="bg-white border-4 border-stone-900 p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b-2 border-stone-900">
                <Info className="h-4 w-4 text-stone-800 stroke-[2.5px]" />
                <h4 className="text-xs font-mono font-black text-stone-800 uppercase tracking-wider">
                  HAU Syllabus Transmutation Scale
                </h4>
              </div>
              <div className="max-h-[220px] overflow-y-auto space-y-1.5 pr-1 font-mono text-[11px] font-bold uppercase text-stone-800">
                <div className="grid grid-cols-4 py-1 border-b border-stone-200 font-black text-[10px] text-stone-500">
                  <span>COMP. AVG</span>
                  <span>TRANSMUT.</span>
                  <span>POINT</span>
                  <span>CLASS.</span>
                </div>
                <div className="grid grid-cols-4 text-stone-950 bg-[#FFD700]/10 border border-stone-900/10 px-1">
                  <span>94.0 - 100</span>
                  <span>97 - 100</span>
                  <span className="font-black">1.00</span>
                  <span className="text-[10px]">OUTST.</span>
                </div>
                <div className="grid grid-cols-4">
                  <span>88.0 - 93.9</span>
                  <span>94 - 96</span>
                  <span className="font-black">1.25</span>
                  <span className="text-[10px]">EXCELL.</span>
                </div>
                <div className="grid grid-cols-4">
                  <span>82.0 - 87.9</span>
                  <span>91 - 93</span>
                  <span className="font-black">1.50</span>
                  <span className="text-[10px]">SUPER.</span>
                </div>
                <div className="grid grid-cols-4">
                  <span>76.0 - 81.9</span>
                  <span>88 - 90</span>
                  <span className="font-black">1.75</span>
                  <span className="text-[10px]">V. GOOD</span>
                </div>
                <div className="grid grid-cols-4">
                  <span>70.0 - 75.9</span>
                  <span>85 - 87</span>
                  <span className="font-black">2.00</span>
                  <span className="text-[10px]">GOOD</span>
                </div>
                <div className="grid grid-cols-4">
                  <span>64.0 - 69.9</span>
                  <span>82 - 84</span>
                  <span className="font-black">2.25</span>
                  <span className="text-[10px]">SATISF.</span>
                </div>
                <div className="grid grid-cols-4">
                  <span>58.0 - 63.9</span>
                  <span>79 - 81</span>
                  <span className="font-black">2.50</span>
                  <span className="text-[10px]">F. SAT.</span>
                </div>
                <div className="grid grid-cols-4">
                  <span>52.0 - 57.9</span>
                  <span>76 - 78</span>
                  <span className="font-black">2.75</span>
                  <span className="text-[10px]">FAIR</span>
                </div>
                <div className="grid grid-cols-4 text-stone-950 bg-[#FFD700]/25 border border-[#FFD700] px-1 font-black">
                  <span>50.0 - 51.9</span>
                  <span>75</span>
                  <span>3.00</span>
                  <span className="text-[10px]">PASSED</span>
                </div>
                <div className="grid grid-cols-4 text-white bg-[#800000] px-1">
                  <span>BELOW 50.0</span>
                  <span>&lt; 75</span>
                  <span className="font-black">5.00</span>
                  <span className="text-[10px]">FAILED</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

