"use client"

import { HelmetProvider } from 'react-helmet-async';

export default function ClientHelmet({ children }: { children: React.ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}