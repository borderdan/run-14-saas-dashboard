import React from 'react';
import { Menu, User, Bell } from 'lucide-react';

interface HeaderProps {
  isCollapsed: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export function Header({ isCollapsed, setIsMobileOpen }: HeaderProps) {
  return (
    <header
      className={`
        fixed top-0 right-0 z-30 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 transition-all duration-300 ease-in-out text-zinc-300
        ${isCollapsed ? 'md:left-[64px]' : 'md:left-[240px]'}
        left-0
      `}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden p-2 hover:bg-zinc-800 rounded-md transition-colors text-zinc-400 hover:text-white -ml-2"
        >
          <Menu size={24} />
        </button>
        <div className="font-semibold text-lg text-white">Acme Corp</div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-sm text-right">
            <div className="font-medium text-white leading-none mb-1">Jane Doe</div>
            <div className="text-zinc-500 leading-none">Admin</div>
          </div>
          <button className="h-9 w-9 bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden border border-zinc-700 hover:border-zinc-500 transition-colors">
            <User size={18} className="text-zinc-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
