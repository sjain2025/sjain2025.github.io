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

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-10 w-full text-center lg:mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Resume
          </h2>
        </div>

        <div className="mx-auto w-[min(100%,57rem)]">
          <div
            className="rounded-2xl overflow-hidden border border-slate-600/50 bg-[#1e1e24]"
            style={{
              boxShadow:
                '0 0 0 1px rgba(148, 163, 184, 0.08), 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px -10px rgba(59, 130, 246, 0.35), 0 0 100px -20px rgba(59, 130, 246, 0.2)',
            }}
          >
            <div className="relative flex min-h-12 items-center border-b border-slate-700/60 bg-[#2d2d2d] px-4 py-3 sm:px-5">
              <div className="relative z-10 flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              {/* True horizontal center of the bar (ignores uneven left/right control widths) */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-24 sm:px-28">
                <div className="pointer-events-auto flex max-w-full min-w-0 items-center justify-center gap-2 text-sm font-medium text-slate-200">
                  <FileText className="h-4 w-4 shrink-0 text-slate-200" aria-hidden />
                  <span className="truncate">Soham_Jain_Resume.pdf</span>
                </div>
              </div>
              <div className="relative z-10 ml-auto shrink-0">
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
      </div>
    </section>
  );
};

export default Resume;
