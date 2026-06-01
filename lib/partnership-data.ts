export const PARTNER_PLANS = [
  {
    id: "plan-a",
    name: "Plan A",
    title: "Starter Partner Plan",
    investment: "₹1,00,000 + GST",
    duration: "12 Months",
    description:
      "Perfect for beginners looking to launch their first trading education business.",
    highlight: false,
    website: "Template Based Website",
    courseSplit: { partner: 70, company: 30 },
    productSplit: { partner: 30, company: 70 },
    extras: [] as string[],
    lifetimeRevenue: false,
    included: [
      "Template Based Website",
      "Landing Page Setup",
      "Branding Guidance",
      "Marketing Assistance",
      "Ad Strategy Guidance",
      "Sales Support",
      "Course Curriculum",
      "Live Market Training Support",
      "Professional Trainers",
      "Backend Operational Support",
    ],
  },
  {
    id: "plan-b",
    name: "Plan B",
    title: "Growth Partner Plan",
    investment: "₹2,00,000 + GST",
    duration: "12 Months",
    description:
      "Ideal for marketers and entrepreneurs who already have an audience, network, or lead generation experience.",
    highlight: true,
    website: "Premium Website · Optimized Landing Pages · Better Conversion Funnel",
    courseSplit: { partner: 70, company: 30 },
    productSplit: { partner: 40, company: 60 },
    extras: [
      "Priority Onboarding",
      "Faster Support",
      "Advanced Marketing Guidance",
      "Priority Trainer Support",
      "Better Revenue Structure",
    ],
    lifetimeRevenue: false,
    included: ["Everything in Plan A", "Plus all Growth benefits above"],
  },
  {
    id: "plan-c",
    name: "Plan C",
    title: "Elite Partner Plan",
    investment: "₹3,00,000 + GST",
    duration: "18 Months",
    description:
      "Designed for entrepreneurs who want to aggressively scale and build a serious business.",
    highlight: false,
    website:
      "Fully Custom Website · Custom Landing Pages · Personalized Branding · Business Specific Design",
    courseSplit: { partner: 70, company: 30 },
    productSplit: { partner: 50, company: 50 },
    extras: [
      "Dedicated Relationship Manager",
      "One-on-One Business Guidance",
      "Direct Founder Support",
      "Business Scaling Consultation",
      "Advanced Sales Assistance",
      "High Priority Backend Support",
    ],
    lifetimeRevenue: true,
    included: ["Everything in Plan B", "Plus all Elite benefits above"],
  },
] as const;

export const PROVIDE_SECTIONS = [
  {
    title: "Business Infrastructure",
    items: [
      "Website Setup",
      "Landing Pages",
      "Lead Collection System",
      "CRM Support",
      "Sales Process Guidance",
    ],
  },
  {
    title: "Education Infrastructure",
    items: [
      "Stock Market Curriculum",
      "Options Trading Curriculum",
      "Live Market Training Sessions",
      "Professional Trainers",
      "Student Management Support",
    ],
  },
  {
    title: "Growth Support",
    items: [
      "Marketing Guidance",
      "Ad Strategy Support",
      "Sales Assistance",
      "Product Upselling Support",
      "Recurring Revenue Opportunities",
    ],
  },
] as const;

export const SUITABLE_FOR = [
  "Business Owners",
  "Digital Marketers",
  "Influencers",
  "Trainers",
  "Financial Content Creators",
  "Sales Professionals",
  "Aspiring Entrepreneurs",
] as const;

export const HOW_IT_WORKS = [
  { step: 1, title: "Choose Your Partner Plan" },
  { step: 2, title: "Get Your Website & Infrastructure Setup" },
  { step: 3, title: "Launch Marketing Campaigns" },
  { step: 4, title: "Generate Leads" },
  { step: 5, title: "Enroll Students" },
  { step: 6, title: "Earn Revenue from Courses & Platform Products" },
] as const;

export const REVENUE_STREAMS = [
  "Trading Education Programs",
  "Options Trading Courses",
  "Premium Workshops",
  "Simulation Platform Subscriptions",
  "Algo Trading Products",
  "Future TradingSmart.ai Premium Products",
] as const;

export const COMPANY_PRODUCTS = [
  "Algo Systems",
  "Simulation Platform",
  "Future Premium Tools",
] as const;

export const CONDITIONS = [
  {
    title: "No False Promises",
    body: "Partners must never promise guaranteed profits, fixed returns, or 100% winning strategies.",
  },
  {
    title: "Brand Reputation",
    body: "Professional communication and ethical marketing practices are mandatory. TradingSmart.ai reserves the right to terminate partnerships involving misuse, misrepresentation, or fraudulent activity.",
  },
  {
    title: "Revenue Payout",
    body: "Revenue sharing will be processed only after successful payment collection.",
  },
  {
    title: "Ad Spend",
    body: "Partners are responsible for their own advertising budgets. TradingSmart.ai provides strategy and guidance only.",
  },
  {
    title: "Trainer Availability",
    body: "Trainer allocation is subject to scheduling and batch planning.",
  },
  {
    title: "Curriculum Protection",
    body: "Partners may not copy, duplicate, distribute, or resell course material outside the TradingSmart.ai ecosystem.",
  },
  {
    title: "Minimum Activity Requirement",
    body: "Partners are expected to actively participate in marketing, lead generation, and sales activities. Inactive partnerships may receive lower operational priority.",
  },
  {
    title: "Lifetime Revenue Validity",
    body: "Lifetime recurring revenue remains applicable only when client subscriptions remain active, payments continue successfully, and the partnership remains valid.",
  },
] as const;

export const PARTNER_PAIN_POINTS = [
  "Building a website",
  "Creating a course curriculum",
  "Hiring trainers",
  "Managing operations",
  "Generating leads",
  "Converting sales",
  "Providing support",
] as const;
