import './globals.css';
import { Inter } from 'next/font/google';
import { GeistSans, GeistMono } from 'geist/font';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'itsjmendez',
  description: 'The itsjmendez site.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
