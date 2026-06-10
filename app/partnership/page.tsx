import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnershipPageContent from "@/components/partnership/PartnershipPageContent";
import { ROUTES, SITE_NAME, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Start Your AI-Powered Stock Market Education Company",
  description:
    "Launch your own branded stock market education business with TradingSmart.ai. Complete ecosystem: website, CRM, curriculum, live training, AI tools, marketing, branding, and sales mentorship.",
  alternates: {
    canonical: ROUTES.partnership,
  },
  openGraph: {
    type: "website",
    url: ROUTES.partnership,
    title: `AI Stock Market Education Company | ${SITE_NAME}`,
    description:
      "Start your own AI-powered stock market education company. Powered by TradingSmart.ai — infrastructure, trainers, curriculum, and growth support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "AI stock market education company",
    "trading education business India",
    "stock market education franchise",
    "TradingSmart.ai partner ecosystem",
  ],
};

const partnershipJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Start Your AI-Powered Stock Market Education Company",
  description:
    "Launch your own branded stock market education business with the TradingSmart.ai partner ecosystem.",
  url: `${SITE_URL}${ROUTES.partnership}`,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Partner Ecosystem",
        item: `${SITE_URL}${ROUTES.partnership}`,
      },
    ],
  },
};

export default function PartnershipPage() {
  return (
    <main
      className="min-h-screen bg-[#040816] text-white overflow-x-hidden"
      style={{ backgroundColor: "#040816" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipJsonLd) }}
      />
      <Header />
      <PartnershipPageContent />
      <Footer />
    </main>
  );
}
