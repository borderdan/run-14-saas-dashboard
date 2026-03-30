import React from 'react';
import {
  Home,
  BarChart2,
  Users,
  DollarSign,
  Settings,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export function Sidebar({ isCollapsed, toggleCollapse, isMobileOpen, setIsMobileOpen }: SidebarProps) {
  const navLinks = [
    { name: 'Overview', icon: Home, href: '#' },
    { name: 'Analytics', icon: BarChart2, href: '#' },
    { name: 'Users', icon: Users, href: '#' },
    { name: 'Revenue', icon: DollarSign, href: '#' },
    { name: 'Settings', icon: Settings, href: '#' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 transition-all duration-200 ease-in-out
          flex flex-col border-r border-zinc-200 dark:border-zinc-800 overflow-hidden
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isCollapsed ? 'md:w-[64px]' : 'md:w-[240px]'}
          w-[240px]
        `}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white whitespace-nowrap overflow-hidden">
          {!isCollapsed && <span className="font-semibold text-lg hidden md:block">MyApp</span>}
          {isCollapsed && <span className="font-semibold text-lg hidden md:block mx-auto">M</span>}
          <span className="font-semibold text-lg md:hidden">MyApp</span>

          <button
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`
                      flex items-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors
                      ${isCollapsed ? 'md:justify-center md:px-0 px-3' : 'px-3'}
                      py-2
                    `}
                    title={isCollapsed ? link.name : undefined}
                  >
                    <Icon size={20} className="shrink-0" />
                    <span className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'md:opacity-0 md:w-0 md:overflow-hidden' : 'opacity-100'}`}>
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 hidden md:flex justify-center">
          <button
            onClick={toggleCollapse}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white w-full flex justify-center"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </aside>
    </>
  );
}
