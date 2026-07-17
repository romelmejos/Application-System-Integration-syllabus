import { useState, useEffect, FormEvent } from 'react';
import { ExternalLink, BookOpen, Laptop, FileText, Plus, Trash2, Library, Sparkles } from 'lucide-react';
import { resourcesData } from '../data/courseData';

interface Bookmark {
  id: string;
  title: string;
  url: string;
  note: string;
}

export default function Resources() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newNote, setNewNote] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Load custom bookmarks on mount
  useEffect(() => {
    const saved = localStorage.getItem('hau_react_bookmarks');
    if (saved) {
      try {
        setBookmarks(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load bookmarks', e);
      }
    }
  }, []);

  // Save bookmarks
  const saveBookmarks = (items: Bookmark[]) => {
    setBookmarks(items);
    localStorage.setItem('hau_react_bookmarks', JSON.stringify(items));
  };

  const addBookmark = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    // Auto-prepend http if missing
    let formattedUrl = newUrl.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl;
    }

    const item: Bookmark = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      url: formattedUrl,
      note: newNote.trim(),
    };

    saveBookmarks([...bookmarks, item]);
    setNewTitle('');
    setNewUrl('');
    setNewNote('');
    setShowForm(false);
  };

  const deleteBookmark = (id: string) => {
    saveBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  // Helper to resolve standard icons for general categories
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'documentation':
        return { label: 'Documentation', color: 'bg-[#FFD700] text-stone-900 border-2 border-stone-900' };
      case 'installation':
        return { label: 'Installation & Tooling', color: 'bg-stone-900 text-white border-2 border-stone-900' };
      case 'utility':
        return { label: 'Coding Utility', color: 'bg-white text-stone-900 border-2 border-stone-900' };
      case 'university':
        return { label: 'University Portal', color: 'bg-[#800000] text-white border-2 border-stone-900' };
      default:
        return { label: 'General Resource', color: 'bg-stone-200 text-stone-900 border-2 border-stone-900' };
    }
  };

  return (
    <section id="resources" className="py-24 bg-[#F8F9FA] border-b-8 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono font-black tracking-widest text-white bg-hau-maroon px-4 py-2 uppercase border-2 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]">
            Resource Library
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase mt-4">
            Student Resource Hub & Sandbox Dashboard
          </h2>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto mt-4 border-2 border-stone-900" />
          <p className="text-stone-700 mt-4 font-semibold text-lg">
            Essential manuals, physical tools, official Holy Angel University databases, and a custom bookmark board to fuel your learning.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Side: Standard Course Resources (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-black text-stone-900 uppercase tracking-tight">
              Official Reference Directories
            </h3>
            <p className="text-sm font-bold text-stone-600 leading-normal">
              These verified links map to critical components of the course. Access your official Canvas course syllabi, verify pre-requisites, and review styling libraries.
            </p>

            <div className="grid grid-cols-1 gap-5">
              {resourcesData.map((res) => {
                const badge = getCategoryBadge(res.category);
                return (
                  <a
                    key={res.id}
                    id={`official-resource-link-${res.id}`}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row items-start gap-4 p-5 bg-white border-4 border-stone-900 hover:bg-stone-50 transition-all duration-150 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {/* Icon Column */}
                    <div className="p-3 border-2 border-stone-900 bg-stone-100 text-hau-maroon shrink-0 group-hover:bg-[#FFD700] group-hover:text-stone-900 transition-all duration-150">
                      {res.category === 'university' ? (
                        <Laptop className="h-5 w-5 stroke-[2.5px]" />
                      ) : res.category === 'documentation' ? (
                        <FileText className="h-5 w-5 stroke-[2.5px]" />
                      ) : (
                        <BookOpen className="h-5 w-5 stroke-[2.5px]" />
                      )}
                    </div>

                    {/* Meta Details Column */}
                    <div className="space-y-2 flex-grow">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest ${badge.color}`}>
                          {badge.label}
                        </span>
                      </div>
                      <h4 className="font-black text-lg text-stone-900 uppercase group-hover:text-hau-maroon transition-colors duration-150">
                        {res.title}
                      </h4>
                      <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                        {res.description}
                      </p>
                    </div>

                    {/* External Link arrow */}
                    <div className="self-start text-stone-850 group-hover:text-hau-maroon pt-1">
                      <ExternalLink className="h-5 w-5 stroke-[2.5px]" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side: Interactive Bookmark Dashboard (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-4 border-stone-900 p-6 shadow-[8px_8px_0px_0px_#800000]">
              
              {/* Box Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-stone-900">
                <div className="flex items-center gap-2">
                  <Library className="h-5 w-5 text-hau-maroon stroke-[2.5px]" />
                  <h3 className="font-black text-lg text-stone-900 uppercase tracking-tight">
                    My Study Bookmarks
                  </h3>
                </div>
                <button
                  id="resource-toggle-bookmark-form"
                  onClick={() => setShowForm(!showForm)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-black text-stone-900 bg-[#FFD700] hover:bg-amber-450 border-2 border-stone-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all"
                >
                  <Plus className="h-4 w-4 stroke-[3px]" />
                  <span>{showForm ? 'Cancel' : 'Add Link'}</span>
                </button>
              </div>

              {/* Toggleable Add form */}
              {showForm && (
                <form id="add-bookmark-form" onSubmit={addBookmark} className="mt-4 p-4 bg-stone-50 border-3 border-stone-900 space-y-3.5">
                  <span className="text-[10px] font-mono font-black text-stone-500 uppercase tracking-widest block">
                    Create Study Reference
                  </span>
                  <div>
                    <label htmlFor="bookmark-title" className="block text-[10px] font-mono font-black text-stone-850 mb-1">REFERENCE TITLE *</label>
                    <input
                      type="text"
                      id="bookmark-title"
                      placeholder="e.g. React Patterns Repo"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      required
                      className="w-full text-xs px-3 py-2.5 bg-white border-2 border-stone-900 font-bold focus:outline-none focus:bg-stone-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="bookmark-url" className="block text-[10px] font-mono font-black text-stone-850 mb-1">TARGET URL (HTTPS://...) *</label>
                    <input
                      type="text"
                      id="bookmark-url"
                      placeholder="e.g. github.com/react-patterns"
                      value={newUrl}
                      onChange={(e) => setNewUrl(e.target.value)}
                      required
                      className="w-full text-xs px-3 py-2.5 bg-white border-2 border-stone-900 font-bold focus:outline-none focus:bg-stone-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="bookmark-note" className="block text-[10px] font-mono font-black text-stone-850 mb-1">OPTIONAL MEMO / NOTES</label>
                    <textarea
                      id="bookmark-note"
                      placeholder="e.g. Good reference code for custom useEffect cleanup hooks."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      rows={2}
                      className="w-full text-xs px-3 py-2.5 bg-white border-2 border-stone-900 font-bold focus:outline-none focus:bg-stone-100"
                    />
                  </div>
                  <button
                    type="submit"
                    id="submit-bookmark-btn"
                    className="w-full py-2.5 bg-stone-900 text-white font-mono text-xs font-black uppercase border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700] hover:bg-stone-850 cursor-pointer transition-all"
                  >
                    Save Study Bookmark
                  </button>
                </form>
              )}

              {/* Bookmark Items List */}
              <div className="mt-4 space-y-4">
                {bookmarks.length > 0 ? (
                  bookmarks.map((b) => (
                    <div
                      key={b.id}
                      id={`bookmark-item-${b.id}`}
                      className="p-4 bg-[#F8F9FA] border-3 border-stone-900 flex items-start justify-between gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-white transition-all duration-150"
                    >
                      <div className="space-y-1.5 overflow-hidden flex-grow">
                        <a
                          href={b.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-black uppercase text-stone-900 hover:text-hau-maroon transition-colors"
                        >
                          <span className="truncate">{b.title}</span>
                          <ExternalLink className="h-3.5 w-3.5 shrink-0 stroke-[2.5px]" />
                        </a>
                        {b.note && <p className="text-xs text-stone-700 font-semibold leading-relaxed">{b.note}</p>}
                        <span className="inline-block text-[9px] font-mono font-black text-[#800000] bg-white px-2 py-0.5 border border-stone-900">
                          Personal Study Node
                        </span>
                      </div>
                      <button
                        id={`delete-bookmark-${b.id}`}
                        onClick={() => deleteBookmark(b.id)}
                        className="text-stone-800 hover:text-rose-600 p-1.5 bg-white border-2 border-stone-900 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:bg-rose-50 transition-all shrink-0 cursor-pointer"
                        title="Delete Bookmark"
                      >
                        <Trash2 className="h-4 w-4 stroke-[2.5px]" />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="py-10 border-4 border-dashed border-stone-400 bg-[#F8F9FA] text-center text-stone-500 p-4">
                    <Sparkles className="h-8 w-8 mx-auto mb-2 text-stone-900" />
                    <p className="text-xs font-bold text-stone-700 uppercase leading-relaxed">Add custom URLs, repository bookmarks, and custom notes that persist in your local browser storage!</p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
