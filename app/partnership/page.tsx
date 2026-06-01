import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnershipPageContent from "@/components/partnership/PartnershipPageContent";
import { ROUTES, SITE_NAME, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Partner Program — Launch Your Trading Academy",
  description:
    "Join the TradingSmart.ai Partner Program. Launch your own trading education business with website setup, curriculum, trainers, CRM, marketing support, and revenue sharing on Plans A, B, and C.",
  alternates: {
    canonical: ROUTES.partnership,
  },
  openGraph: {
    type: "website",
    url: ROUTES.partnership,
    title: `Partner Program | ${SITE_NAME}`,
    description:
      "Build your own trading education brand with complete infrastructure, trainers, and recurring revenue opportunities.",
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
    "trading education partner",
    "stock market franchise India",
    "trading academy partnership",
    "TradingSmart.ai partner program",
  ],
};

const partnershipJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "TradingSmart.ai Partner Program",
  description:
    "Launch your own trading education business with TradingSmart.ai infrastructure and revenue sharing.",
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
        name: "Partner Program",
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
