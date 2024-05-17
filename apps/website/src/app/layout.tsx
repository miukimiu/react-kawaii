import { Flex, Theme } from '@radix-ui/themes';
import { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '~/components/header/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://design.xata.io'),
  title: 'React Kawaii',
  description:
    'React Kawaii is a library of cute SVG illustrations (react components). Ideal if you want to give some cuteness and personality to your react application.',
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    type: 'website',
    title: 'React Kawaii',
    description:
      'React Kawaii is a library of cute SVG illustrations (react components). Ideal if you want to give some cuteness and personality to your react application.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Theme accentColor="indigo">
            <Flex direction="column" minHeight="100vh" width="full">
              <Header />
              <Flex direction="column">{children}</Flex>
            </Flex>
          </Theme>
        </NextThemesProvider>
      </body>
    </html>
  );
}
