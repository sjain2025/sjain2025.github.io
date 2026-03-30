import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { NAV_ITEMS, paths } from '@/lib/siteRoutes';

const SiteLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === paths.home;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-background ${isHome ? 'h-screen overflow-hidden' : ''}`}>
      {!isHome && (
        <Link
          to={paths.home}
          aria-label="Back to home"
          className="fixed top-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/30 text-slate-300 shadow-lg transition-all duration-200 hover:border-slate-600/50 hover:bg-slate-700/40 hover:text-slate-100"
        >
          <ArrowLeft className="h-6 w-6" />
        </Link>
      )}

      <div className="fixed right-6 top-6 z-50">
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`h-11 w-11 rounded-xl border transition-all duration-200 aria-expanded:bg-slate-700/50 ${
                menuOpen
                  ? 'border-slate-500/60 bg-slate-700/50 text-slate-100'
                  : 'border-slate-700/50 bg-slate-800/30 text-slate-300 hover:border-slate-600/50 hover:bg-slate-700/40 hover:text-slate-100'
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <X className="h-5 w-5 transition-transform duration-200" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-200" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="end"
            sideOffset={8}
            className="w-[180px] border-0 bg-transparent p-2 shadow-none"
          >
            <div
              className="animate-nav-item-in animate-nav-item-breathe pointer-events-none absolute opacity-0"
              aria-hidden
            />
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map(({ to, label }, index) => (
                <DropdownMenuItem key={to} asChild>
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="w-full cursor-pointer rounded-xl border border-slate-700/50 bg-[#0d0d0f] px-4 py-2.5 text-[15px] font-medium text-slate-200 shadow-sm transition-colors duration-200 [animation:nav-item-in_0.35s_ease-out_backwards,nav-item-breathe_2.5s_ease-in-out_0.4s_infinite] hover:border-slate-600/50 hover:bg-slate-700/40 hover:text-slate-100 focus:bg-slate-700/40 focus:text-slate-100 focus:outline-none data-[highlighted]:border-slate-600/50 data-[highlighted]:bg-slate-700/40 data-[highlighted]:text-slate-100"
                    style={{ animationDelay: `${80 + index * 40}ms, 400ms` }}
                  >
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Outlet />
    </div>
  );
};

export default SiteLayout;
