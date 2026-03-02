import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resumePdf from '@/assets/resume.pdf';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Soham_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background to match Hero */}
      <div className="absolute inset-0 z-0 bg-[#0b0c0f]" />
      <div
        className="absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Page title */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-100">
            Resume
          </h2>
        </div>

        {/* Resume PDF and sidebar */}
        <div className="grid lg:grid-cols-[minmax(0,2.2fr)_minmax(0,0.8fr)] gap-6 lg:gap-8 items-start">
          {/* Embedded resume PDF */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl overflow-hidden border border-slate-600/50 bg-[#1e1e24]"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(148, 163, 184, 0.08), 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px -10px rgba(59, 130, 246, 0.35), 0 0 100px -20px rgba(59, 130, 246, 0.2)',
              }}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700/60 bg-[#2d2d2d]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-300">
                    <FileText className="h-4 w-4 text-blue-400" />
                    <span>Soham_Jain_Resume.pdf</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDownload}
                  className="text-slate-200 hover:text-emerald-400 hover:bg-slate-800/40"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="relative bg-[#111118]" style={{ height: '1075px' }}>
                <iframe
                  src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-0"
                  title="Soham Jain Resume"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Download options */}
          <div className="space-y-6 lg:space-y-7">
            {/* Download resume card */}
            <div
              className="rounded-2xl p-6 sm:p-7 border border-slate-600/50 bg-[#1e1e24]"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(148, 163, 184, 0.08), 0 20px 40px -18px rgba(0, 0, 0, 0.75)',
              }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 text-slate-100">
                <Download className="h-5 w-5 text-blue-400" />
                Download Resume
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Save a high-resolution PDF version of my resume.
              </p>
              <Button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-red-500 via-red-400 to-blue-500 text-white font-medium hover:from-red-400 hover:via-red-300 hover:to-blue-400 hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
