import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const pop = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:['100','200','300','400','500','600','700','800','900']
});

 

export const metadata: Metadata = {
  title: {
    default: "Baraa Malaika | Humanitarian Storyteller, Photographer & Media Professional",
    template: "%s | Baraa Malaika",
  },
  description:
    "Baraa Malaika is a humanitarian storyteller, photographer, video editor, and media professional from Aleppo creating impactful awareness content, humanitarian campaigns, and visual storytelling across Egypt and the MENA region.",
  keywords: [
    "Baraa Malaika",
    "humanitarian storyteller",
    "humanitarian content creator",
    "photographer in Aleppo",
    "video editor Syria",
    "MENA content creator",
    "Egypt collaboration",
    "NGO media production",
    "awareness campaign content",
    "social impact storytelling",
    "humanitarian media",
    "visual storytelling",
    "reels production",
    "media professional",
  ],
  authors: [{ name: "Baraa Malaika" }],
  creator: "Baraa Malaika",
  publisher: "Baraa Malaika",
  category: "Media",
  applicationName: "Baraa Malaika Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Baraa Malaika | Humanitarian Storyteller, Photographer & Media Professional",
    description:
      "Portfolio of Baraa Malaika featuring humanitarian storytelling, awareness campaigns, social impact media, and visual content for NGOs, organizations, and media platforms across Egypt and the MENA region.",
    siteName: "Baraa Malaika Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Baraa Malaika humanitarian storytelling portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraa Malaika | Humanitarian Storyteller, Photographer & Media Professional",
    description:
      "Humanitarian storytelling, awareness content, NGO campaigns, and impactful visual media across Egypt and the MENA region.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pop.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
