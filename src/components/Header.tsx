import React from 'react';
import { Menu, User, Bell } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  isCollapsed: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export function Header({ isCollapsed, setIsMobileOpen }: HeaderProps) {
  return (
    <header
      className={`
        fixed top-0 right-0 z-30 flex h-16 items-center justify-between border-b bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 px-4 transition-all duration-200 ease-in-out text-zinc-600 dark:text-zinc-300
        ${isCollapsed ? 'md:left-[64px]' : 'md:left-[240px]'}
        left-0
      `}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white -ml-2"
        >
          <Menu size={24} />
        </button>
        <div className="font-semibold text-lg text-zinc-900 dark:text-white">Acme Corp</div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-sm text-right">
            <div className="font-medium text-zinc-900 dark:text-white leading-none mb-1">Jane Doe</div>
            <div className="text-zinc-500 leading-none">Admin</div>
          </div>
          <button className="h-9 w-9 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-500 transition-colors">
            <User size={18} className="text-zinc-500 dark:text-zinc-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
