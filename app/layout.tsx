import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'QAPI | Luxusní Garážová Vrata a Servis',
  description: 'Špičková garážová vrata, stínící technika a profesionální servis oken. Rezervujte si termín online.',
  keywords: 'garážová vrata, servis oken, stínící technika, rolovací vrata, sekční vrata, QAPI',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
