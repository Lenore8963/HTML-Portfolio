import type { SocialLink } from "@/types/content";

export const site = {
  name: "Chen Zhou",
  title: "Chen Zhou — Portfolio",
  description:
    "Chen Zhou — software engineer, machine-learning practitioner, and award-winning environmental journalist. Projects, hackathon wins, certifications, and writing.",
  url: "https://chenzhou.dev",
  email: "zhou.chen1@northeastern.edu",
  address: {
    line1: "Northeastern University in Vancouver",
    line2: "410 W Georgia St #1400",
    line3: "Vancouver, BC V6B 1Z3",
    line4: "Canada",
  },
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chen-zhou-4333b047/" },
  { label: "Medium", href: "https://tangchuanc.medium.com/" },
  { label: "Twitter", href: "https://twitter.com/chenzhou63" },
  { label: "GitHub", href: "https://github.com/Lenore8963" },
];

export const navItems = [
  { label: "Work", href: "/work" },
  {
    label: "Projects",
    href: "#",
    children: [
      { label: "Personal", href: "/projects" },
      { label: "School & Hackathons", href: "/school" },
    ],
  },
  {
    label: "Journalism",
    href: "#",
    children: [
      { label: "Canada", href: "/journalism/canada" },
      { label: "China", href: "/journalism/china" },
    ],
  },
  { label: "Family", href: "/family" },
  { label: "Contact", href: "/contact" },
] as const;
