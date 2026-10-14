import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harsh Rana | AI Engineer @ PwC India | Multi-Agent Systems & Enterprise Cloud',
  description: 'Portfolio of Harsh Rana - Associate Artificial Intelligence Engineer at PwC India, ex-TCS. Specializing in autonomous multi-agent developer companions (LangGraph, CrewAI), event-driven cloud architectures (KEDA, Azure Container Apps), and enterprise RAG systems.',
  keywords: [
    'Harsh Rana',
    'AI Engineer',
    'Artificial Intelligence Engineer',
    'PwC India',
    'Tata Consultancy Services',
    'Generative AI',
    'LangGraph',
    'CrewAI',
    'RAG',
    'Azure Container Apps',
    'KEDA',
    'Python',
    'Vector Search',
    'Machine Learning'
  ],
  authors: [{ name: 'Harsh Rana', url: 'https://linkedin.com/in/harshrana02' }],
  icons: {
    icon: [
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Harsh Rana | AI Engineer @ PwC India',
    description: 'Enterprise AI & ML Engineer specializing in autonomous multi-agent systems, event-driven cloud architectures, and production LLMs.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#f8fafc] text-[#0f172a]">
        {children}
      </body>
    </html>
  );
}
