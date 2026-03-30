'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

// Need to handle cookies. In a real Next.js app, we'd probably use next/headers in a server component
// to pass initial state, but since we are writing a client component wrapper (due to React state),
// we will manage the cookie on the client.

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read cookie on mount
    const match = document.cookie.match(new RegExp('(^| )sidebarCollapsed=([^;]+)'));
    if (match) {
      setIsCollapsed(match[2] === 'true');
    }
    setMounted(true);
  }, []);

  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    document.cookie = `sidebarCollapsed=${newState}; path=/; max-age=31536000`; // 1 year
  };

  // Prevent hydration mismatch by not rendering the dynamic parts until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-zinc-950"></div>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <Sidebar
        isCollapsed={isCollapsed}
        toggleCollapse={toggleCollapse}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div
        className={`
          flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out
          ${isCollapsed ? 'md:pl-[64px]' : 'md:pl-[240px]'}
        `}
      >
        <Header
          isCollapsed={isCollapsed}
          setIsMobileOpen={setIsMobileOpen}
        />

        <main className="flex-1 mt-16 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
