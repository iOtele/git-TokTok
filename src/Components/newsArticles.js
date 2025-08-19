import React from "react";

const newsArticles = [
  {
    id: 1,
    title: "Nigeria's Economy Shows Strong Growth in Q4 2025",
    excerpt:
      "The Nigerian Bureau of Statistics reports a significant uptick in GDP growth, driven by improved oil revenues and tech sector expansion. This growth marks a turning point for the Nigerian economy after years of volatility and uncertainty in global markets.",
    category: "Business",
    author: "Adebayo Johnson",
    publishedAt: "2 hours ago",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    // views: "15.2K",
    // comments: 48,
    isBreaking: true,
    tags: ["Economy", "GDP", "Nigeria"],
  },
  {
    id: 2,
    title: "Lagos Traffic: New Smart Solutions Deployed Across Major Routes",
    excerpt:
      "The Lagos State Government unveils AI-powered traffic management systems aimed at reducing congestion by up to 40% in major corridors. The new system uses advanced sensors and machine learning algorithms to optimize traffic flow during peak hours.",
    category: "Technology",
    author: "Funmi Adeola",
    publishedAt: "4 hours ago",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    // views: "8.7K",
    // comments: 23,
    isBreaking: true,
    tags: ["Lagos", "Technology", "Traffic"],
  },
  {
    id: 3,
    title: "Super Eagles Secure Victory in AFCON Qualifiers",
    excerpt:
      "Nigeria's national football team delivers a stunning 3-1 victory against Ghana in yesterday's crucial qualifier match. The team showed exceptional teamwork and strategic play that impressed fans and critics alike.",
    category: "Sports",
    author: "Emeka Okafor",
    publishedAt: "6 hours ago",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
    // views: "22.1K",
    // comments: 156,
    isBreaking: false,
    tags: ["Football", "AFCON", "Super Eagles"],
  },
  {
    id: 4,
    title: "Nollywood Stars Shine at International Film Festival",
    excerpt:
      "Nigerian actors and filmmakers receive multiple awards at the prestigious Cannes Film Festival, highlighting Africa's growing cinema influence. The recognition marks a significant milestone for the Nigerian film industry on the global stage.",
    category: "Entertainment",
    author: "Kemi Adetayo",
    publishedAt: "8 hours ago",
    readTime: "6 min read",
    image:
      "https://cdn.prod.website-files.com/6705f4b15aee7ca914fff083/685e47a2b2ab5e3998c98aac_Table%20Usage%20Template%20Image.png",
    // views: "12.5K",
    // comments: 87,
    isBreaking: false,
    tags: ["Nollywood", "Cinema", "Awards"],
  },
  {
    id: 5,
    title: "Presidential Address on National Security Measures",
    excerpt:
      "President announces comprehensive security reforms and increased funding for defense infrastructure across all six geopolitical zones. The new measures are designed to address rising security concerns and strengthen national defense capabilities.",
    category: "Politics",
    author: "Ibrahim Musa",
    publishedAt: "10 hours ago",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    // views: "45.3K",
    // comments: 234,
    isBreaking: true,
    tags: ["Politics", "Security", "Presidential"],
  },
  {
    id: 6,
    title: "Renewable Energy: Nigeria's Solar Power Initiative Expands",
    excerpt:
      "The government unveils plans to install solar panels across 10,000 rural communities, aiming for 30% renewable energy by 2030. This ambitious project represents Nigeria's commitment to sustainable energy solutions and environmental protection.",
    category: "Environment",
    author: "Grace Okwu",
    publishedAt: "12 hours ago",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    // views: "9.8K",
    // comments: 42,
    isBreaking: true,
    tags: ["Solar", "Energy", "Environment"],
  },
  {
    id: 7,
    title: "Renewable Energy: Nigeria's Solar Power Initiative Expands",
    excerpt:
      "The government unveils plans to install solar panels across 10,000 rural communities, aiming for 30% renewable energy by 2030. This ambitious project represents Nigeria's commitment to sustainable energy solutions and environmental protection.",
    category: "Environment",
    author: "Grace Okwu",
    publishedAt: "12 hours ago",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    // views: "9.8K",
    // comments: 42,
    isBreaking: false,
    tags: ["Solar", "Energy", "Environment"],
  },
  {
    id: 8,
    title: "Presidential Address on National Security Measures",
    excerpt:
      "President announces comprehensive security reforms and increased funding for defense infrastructure across all six geopolitical zones. The new measures are designed to address rising security concerns and strengthen national defense capabilities.",
    category: "Politics",
    author: "Ibrahim Musa",
    publishedAt: "10 hours ago",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    // views: "45.3K",
    // comments: 234,
    isBreaking: true,
    tags: ["Politics", "Security", "Presidential"],
  },
  {
    id: 9,
    title: "Presidential Address on National Security Measures",
    excerpt:
      "President announces comprehensive security reforms and increased funding for defense infrastructure across all six geopolitical zones. The new measures are designed to address rising security concerns and strengthen national defense capabilities.",
    category: "Politics",
    author: "Ibrahim Musa",
    publishedAt: "10 hours ago",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    // views: "45.3K",
    // comments: 234,
    isBreaking: false,
    tags: ["Politics", "Security", "Presidential"],
  },
];

export default newsArticles;
