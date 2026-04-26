import type { JournalismArticle } from "@/types/content";

export const canadaSummary =
  "Covered climate justice, human rights, housing equity, Covid-19, and related topics across Canada.";

export const canadaArticles: JournalismArticle[] = [
  {
    id: "vancouver-airbnb",
    region: "canada",
    category: "Housing Equity",
    date: "2024-04-23",
    coords: { lat: 49.2827, lng: -123.1207, location: "Vancouver, BC" },
    links: [
      {
        label: "Over 1,000 Airbnb listings in Vancouver display expired licences",
        href: "https://openhousing.ca/2024/04/23/over-1000-airbnb-listings-in-vancouver-display-expired-licences/",
      },
    ],
    image: {
      src: "https://openhousing.ca/wp-content/uploads/2024/04/no_airbnb.png",
      alt: "Airbnb listings in Vancouver display expired licences",
    },
    bullets: [
      "Data analysis reveals that 33% of Vancouver's short-term Airbnb rentals are displaying expired business licenses.",
      "This finding comes just before new provincial regulations requiring valid license displays take effect on May 1, highlighting a significant compliance issue.",
    ],
  },
  {
    id: "vancouver-pyramid",
    region: "canada",
    category: "Chinese Community",
    date: "2022-04-29",
    coords: { lat: 49.2027, lng: -123.0207, location: "Vancouver, BC" },
    links: [
      {
        label:
          "Under the shadow of a Vancouver homicide, alleged pyramid scam expands globally during pandemic",
        href: "https://thinkpol.ca/2022/04/29/under-the-shadow-of-a-vancouver-homicide-alleged-pyramid-scam-expands-globally-under-different-names-during-pandemic/",
      },
    ],
    image: {
      src: "https://thinkpol.ca/wp-content/uploads/2022/04/elite-training-4.jpg",
      alt: "Photos show teenagers and children also took part in the military training",
    },
    bullets: [
      "An in-depth investigation into the pyramid scheme behind an unsolved murder case.",
      "Uncovered many details that have not been mentioned in mainstream Canadian media.",
    ],
  },
  {
    id: "bc-ndp",
    region: "canada",
    category: "Environmental Politics",
    date: "2021-12-23",
    coords: { lat: 48.4284, lng: -123.3656, location: "Victoria, BC" },
    links: [
      {
        label: "NDP fallout over B.C. government actions harms federal election chances",
        href: "https://ricochet.media/en/3826/ndp-fallout-over-bc-government-actions-harms-federal-election-chances",
      },
    ],
    image: {
      src: "https://pbs.twimg.com/media/FFswLIfVkAAzpf_?format=jpg&name=900x900",
      alt: "Grassroots NDP members are speaking out",
    },
    bullets: ["Exposed bureaucracy and even corruption within the BC NDP party."],
  },
  {
    id: "cop26-vaccine",
    region: "canada",
    category: "Covid-19 / COP26",
    date: "2021-11-11",
    coords: { lat: 55.8642, lng: -4.2518, location: "Glasgow, Scotland" },
    links: [
      {
        label: "Vaccine inequality simmers at COP26",
        href: "https://ricochet.media/en/3812/vaccine-inequality-simmers-at-climate-talks",
      },
    ],
    image: { src: "/images/vaccine.jpg", alt: "Covid vaccine" },
    bullets: [
      "Deeply exposed the selfishness of developed countries, including Canada, in grabbing Covid vaccines, leaving developing countries in grave danger.",
    ],
  },
  {
    id: "tmx-burnaby",
    region: "canada",
    category: "Civil Disobedience",
    date: "2021-12-01",
    coords: { lat: 49.2488, lng: -122.9805, location: "Burnaby, BC" },
    links: [
      {
        label: "None of the major parties will cancel TMX, despite heated opposition in B.C.",
        href: "https://ricochet.media/en/3771/none-of-the-major-parties-will-cancel-tmx-despite-heated-opposition-in-bc",
        subLabel: "2021-09-10",
      },
      {
        label: "Treehouses against TMX: Another frontier of civil disobedience",
        href: "https://ricochet.media/en/3820/treehouses-against-tmx-another-frontier-of-civil-disobedience",
        subLabel: "2021-12-01",
      },
    ],
    image: {
      src: "https://ricochet.media/processed/uploads/images/1587.widen:1920.jpeg",
      alt: "A cherry picker reaches one of the Burnaby treehouses",
    },
    bullets: [
      "In-depth investigation of the residents' protests against the construction of the oil pipeline which caused hundreds of arrests.",
    ],
  },
  {
    id: "conservative-climate",
    region: "canada",
    category: "Environmental Politics",
    date: "2021-08-26",
    coords: { lat: 45.4215, lng: -75.6972, location: "Ottawa, ON" },
    links: [
      {
        label: "Conservative climate rewards program, carbon tariffs don't stand up to scrutiny",
        href: "https://ricochet.media/en/3759/conservative-climate-rewards-program-carbon-tariffs-dont-stand-up-to-scrutiny",
      },
    ],
    image: { src: "/images/climate-article.jpg", alt: "Jonathan Wilkinson" },
    bullets: [
      "My work during the 2021 federal election campaign included deep dives into the climate programs of the main political parties and led to public criticism of inconsistencies unearthed in the Conservative plan.",
    ],
  },
];
