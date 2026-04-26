export type ProjectMedia =
  | { kind: "youtube"; videoId: string }
  | { kind: "image"; src: string; alt: string }
  | { kind: "placeholder"; initials: string; alt: string }
  | { kind: "itch"; src: string; alt: string };

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  url?: string;
  repo?: string;
  tech: string[];
  year?: string;
  role?: string;
  media: ProjectMedia;
};

export type Hackathon = {
  title: string;
  bullets: string[];
};

export type SkillGroup = {
  heading: string;
  items: string[];
};

export type Certification = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

export type FamilyMember = {
  name: string;
  image: string;
  alt: string;
  bullets: string[];
};

export type GeoPoint = {
  lat: number;
  lng: number;
  location: string;
};

export type JournalismArticle = {
  id: string;
  region: "canada" | "china";
  category: string;
  date: string;
  links: { label: string; href: string; subLabel?: string }[];
  image: { src: string; alt: string };
  bullets: string[];
  coords?: GeoPoint;
};

export type JournalismRecognition = {
  category: string;
  title?: string;
  titleHref?: string;
  image?: { src: string; alt: string };
  bullets: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};
