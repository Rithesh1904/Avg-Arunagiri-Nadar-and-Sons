import React from 'react';
import { Navbar } from './ui/Navbar';
import { Footer } from './ui/Footer';
import { FloatingActions } from './ui/FloatingActions';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
