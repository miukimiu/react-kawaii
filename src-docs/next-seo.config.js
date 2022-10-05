/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextarter-chakra",
  titleTemplate: "%s | nextarter-chakra",
  defaultTitle: "nextarter-chakra",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://nextarter-chakra.sznm.dev",
  openGraph: {
    url: "https://nextarter-chakra.sznm.dev",
    title: "nextarter-chakra",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-chakra",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
