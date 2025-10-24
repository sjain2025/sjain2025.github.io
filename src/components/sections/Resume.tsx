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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          {/* Resume PDF and sidebar */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Embedded resume PDF */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-hard border border-border overflow-hidden">
                <div className="bg-muted/50 px-6 py-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Soham_Jain_Resume</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleDownload}
                      className="text-primary hover:text-primary/80"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="relative" style={{ height: '1030px' }}>
                  <iframe
                    src={resumePdf}
                    className="w-full h-full border-0"
                    title="Soham Jain Resume"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Download and contact options */}
            <div className="space-y-6">
              {/* Download resume button */}
              <div className="bg-card rounded-2xl p-6 shadow-medium border border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Download Resume
                </h3>
                <Button
                  onClick={handleDownload}
                  className="w-full primary-gradient hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-hard"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>


              {/* Get in touch section */}
              <div className="bg-card rounded-2xl p-6 shadow-medium border border-border">
                <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in my background? Let's connect!
                </p>
                <Button
                  variant="outline"
                  className="w-full hover:text-white hover:border-white hover:bg-transparent"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
