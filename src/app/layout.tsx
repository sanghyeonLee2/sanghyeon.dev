import { CONFIG } from '@/constants/config';
import '@/styles/globals.css';
import { pretendard } from '@/fonts/fonts';
import Header from '@/components/ui/Header';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Footer from '@/components/ui/Footer';
import { defaultMetadata } from '@/constants/metaData';

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={CONFIG.DEFAULT_LANGUAGE} className={pretendard.variable} suppressHydrationWarning>
      <body className={`${pretendard.className} layout-wrapper`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
