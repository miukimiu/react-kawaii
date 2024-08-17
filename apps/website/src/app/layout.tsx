import { GoogleAnalytics } from '@next/third-parties/google';
import { Box, Flex, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Baloo_2, Inter } from 'next/font/google';
import 'reset-css';
import { Footer } from '~/components/footer/Footer'; // Import the Footer component
import { Header } from '~/components/header/Header';
import '../global.css';

const baloo = Baloo_2({
  weight: ['800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baloo'
});

export const metadata: Metadata = {
  title: 'React Kawaii',
  description:
    'React Kawaii is an open source library of cute SVG illustrations. Perfect if you want to give some cuteness to your React App.',
  twitter: {
    card: 'summary_large_image',
    creator: '@miuki_miu'
  },
  openGraph: {
    type: 'website',
    title: 'React Kawaii',
    description:
      'React Kawaii is an open source library of cute SVG illustrations. Perfect if you want to give some cuteness to your React App.',
    images: [
      {
        url: '/images/react-kawaii-open-graph.png',
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${baloo.variable}`}>
      <body className="body">
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Theme accentColor="violet" grayColor="gray">
            <Flex className="wrapper" direction="column" minHeight="100vh" width="full">
              <Box className="top-gradient" />
              <Header />
              <Box px="4">{children}</Box>
              <Footer />
            </Flex>
          </Theme>
        </NextThemesProvider>
      </body>
      <GoogleAnalytics gaId="G-M8VMBQE25E" />
    </html>
  );
}
