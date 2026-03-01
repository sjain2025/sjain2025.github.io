import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [state, handleSubmit] = useForm('mjgedlad');

  if (state.succeeded) {
    return (
      <section id="contact" className="min-h-screen relative py-24 flex flex-col items-center justify-center">
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
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Contact Me
          </h2>
          <div
            className="rounded-2xl border border-slate-600/50 bg-[#1e1e24] p-12 sm:p-16 shadow-xl shadow-black/30 flex flex-col items-center justify-center text-center"
            style={{
              boxShadow: '0 0 0 1px rgba(148, 163, 184, 0.08), 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px -10px rgba(34, 197, 94, 0.2)',
            }}
          >
            <div className="rounded-full bg-emerald-500/10 p-4 mb-6">
              <CheckCircle2 className="h-14 w-14 text-emerald-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              Message sent
            </h3>
            <p className="text-white text-base sm:text-lg whitespace-nowrap">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen relative py-24 flex flex-col items-center justify-center">
      {/* Same background as hero */}
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

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Contact Me
        </h2>

        <div className="rounded-2xl border border-slate-600/50 bg-[#1e1e24] p-10 shadow-xl shadow-black/30">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="h-10 bg-[#1a1a1f] border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="h-10 bg-[#1a1a1f] border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-white">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="e.g. Project inquiry, collaboration, or opportunity"
                className="h-10 bg-[#1a1a1f] border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-400 text-sm" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Type your message here..."
                rows={5}
                className="min-h-[128px] bg-[#1a1a1f] border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none rounded-xl py-3"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm" />
            </div>

            <Button
              type="submit"
              size="default"
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold border-0 hover:opacity-90 hover:scale-[1.01] transition-all duration-200 rounded-xl"
            >
              {state.submitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
