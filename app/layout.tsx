import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: '拼好图 - PINHAOTU.TOP',
  description: '拼好图，吃好饭',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh">
      <head />
      <body className="bg-muted flex min-h-screen flex-col items-center justify-center p-6 md:p-10">
        {children}
      </body>
    </html>
  );
}