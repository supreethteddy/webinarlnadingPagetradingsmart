export const SITE_IMAGES = {
  galleryBanner:
    'https://res.cloudinary.com/dij4v6vtx/image/upload/v1778846245/ExtraMile_Play_Raises_USD_500K_Seed_Round_to_Scale_Its_Gamified_Employee_Engagement_Platform_l5kszu.jpg',
  traderAtHome:
    'https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844719/trading_rqwchw.jpg',
  tradingLounge:
    'https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844746/Trading_Lounge_Scenes_bimalinstitute_mh3pks.jpg',
  tradingEvent:
    'https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844762/Trading_event_nyyzus.jpg',
  networking:
    'https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844772/TERPERCAYA_0852-5877-3400_Pelatihan_Digital_Marketing_Organik_di_Surakarta_bzeu6x.jpg',
  institute:
    'https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844786/Stock_Market_Institute_in_Delhi_Build_Your_Career_in_Trading_zslf4i.jpg',
  forexDemo:
    'https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844811/Start_Your_Forex_Journey_Risk-Free_with_a_Demo_Account_jpiwyn.jpg',
  classroom:
    'https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844830/In_many_top_universities_abroad_design_is_intentionally_simple__taggwn.jpg',
} as const;

export const GALLERY_ITEMS = [
  {
    src: SITE_IMAGES.tradingEvent,
    alt: 'Large-scale trading seminar with live market charts',
    title: 'Live Trading Events',
    span: 'md:col-span-2 md:row-span-2',
    aspect: 'aspect-[4/3] md:aspect-auto md:min-h-[420px]',
  },
  {
    src: SITE_IMAGES.tradingLounge,
    alt: 'Hands-on trading lounge with students at laptops',
    title: 'Trading Lounge',
    span: 'md:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: SITE_IMAGES.institute,
    alt: 'Expert instructor teaching stock market analysis',
    title: 'Expert Mentorship',
    span: 'md:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: SITE_IMAGES.forexDemo,
    alt: 'Risk-free demo account trading session',
    title: 'Practice Risk-Free',
    span: 'md:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: SITE_IMAGES.networking,
    alt: 'Traders networking at professional event',
    title: 'Trader Community',
    span: 'md:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: SITE_IMAGES.classroom,
    alt: 'Interactive classroom workshop session',
    title: 'Structured Learning',
    span: 'md:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    src: SITE_IMAGES.traderAtHome,
    alt: 'Trader analyzing charts on laptop at home',
    title: 'Trade From Anywhere',
    span: 'md:col-span-2',
    aspect: 'aspect-[21/9]',
  },
] as const;

export const EXPERIENCE_STORIES = [
  {
    image: SITE_IMAGES.tradingLounge,
    alt: 'Students learning live trading in a professional lounge',
    badge: 'Hands-On Training',
    title: 'Learn Like a Pro Trader — Not From YouTube',
    description:
      'Sit with real charts, real mentors, and real market context. Our lounge-style sessions mirror how professional desks operate — focused screens, guided analysis, and instant feedback.',
    highlights: ['Live chart breakdowns', 'Peer learning groups', 'Mentor-led reviews'],
  },
  {
    image: SITE_IMAGES.institute,
    alt: 'Instructor presenting stock trading strategies to students',
    badge: 'Expert-Led Curriculum',
    title: 'Structured Sessions That Build Real Skill',
    description:
      'Every module is designed to take you from confusion to clarity — market structure, risk rules, and AI workflows taught step-by-step by practitioners who trade the same way they teach.',
    highlights: ['Beginner to advanced path', 'AI workflow templates', 'Q&A every session'],
    reverse: true as const,
  },
  {
    image: SITE_IMAGES.tradingEvent,
    alt: 'Packed trading event with large screen market charts',
    badge: 'Community & Events',
    title: 'Join a Movement of 2,400+ AI-Curious Traders',
    description:
      'Workshops, seminars, and community meetups keep you accountable and inspired. You are not learning alone — you are joining traders who show up, execute, and grow together.',
    highlights: ['Exclusive Telegram access', 'Event replays', 'Networking circles'],
  },
] as const;
