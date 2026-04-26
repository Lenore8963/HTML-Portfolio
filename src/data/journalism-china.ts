import type { JournalismArticle, JournalismRecognition } from "@/types/content";

export const chinaSummary =
  "Award-winning investigative environmental journalism across China — climate change, illegal land reclamation, marine conservation, disaster coverage, and tobacco control.";

export const chinaArticles: JournalismArticle[] = [
  {
    id: "zhanjiang-basf",
    region: "china",
    category: "Illegal Land Reclamation",
    date: "2019-02-25",
    coords: { lat: 21.2707, lng: 110.3594, location: "Zhanjiang, Guangdong" },
    links: [
      {
        label: "BASF plans to build new plant in illegal reclamation area (Chinese)",
        href: "https://weekly.caixin.com/2019-02-23/101382878.html",
      },
      {
        label: "Read full article (Chinese)",
        href: "https://tangchuanc.medium.com/湛江石化基地填海后遗症-e444692205de",
      },
    ],
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*OQSGdYb5ci3cFPik.jpg",
      alt: "Dead tree on illegal reclamation area",
    },
    bullets: [
      "Exposed BASF's plan to build a new factory with illegal land reclamation.",
      "The article was approved by Premier Li Keqiang.",
    ],
  },
  {
    id: "katowice-cop24",
    region: "china",
    category: "Climate Change",
    date: "2018-12-24",
    coords: { lat: 50.2649, lng: 19.0238, location: "Katowice, Poland" },
    links: [
      {
        label: "United Nations Climate Change Conference in Katowice (Chinese)",
        href: "https://weekly.caixin.com/2018-12-22/101362303.html",
      },
      {
        label: "Read full article (Chinese)",
        href: "https://tangchuanc.medium.com/卡托维兹气候大会-已是最好的结果-9f2313a11345",
      },
    ],
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Om1QAA2yQx5ueHi3.jpg",
      alt: "Protesters hold up banners at the climate conference in Katowice, Poland",
    },
    bullets: [
      "Awarded fellowships from Earth Journalism Network and China Dialogue to cover the UN Climate Change Conferences COP24, COP23, and COP22 on the scene.",
      "\"Best Climate Reporting of 2018\" issued by the China Association for NGO Cooperation.",
      "Excerpts from the article became reading materials for the final exam of the environmental policy course at Renmin University of China.",
    ],
  },
  {
    id: "fujian-spill",
    region: "china",
    category: "Holding Authorities Accountable",
    date: "2018-11-22",
    coords: { lat: 24.8741, lng: 118.6757, location: "Quanzhou, Fujian" },
    links: [
      {
        label: "Police Barged Into My Room While I Was Covering the Fujian Chemical Spill",
        href: "https://www.caixinglobal.com/2018-11-20/police-barged-into-my-room-while-i-was-covering-fujian-chemical-spill-101349591.html",
        subLabel: "2018-11-20",
      },
      {
        label: "Chinese reporter wins rare police apology for harassment",
        href: "https://apnews.com/article/66082197118943d8be981d3f619aa69a",
        subLabel: "2018-11-22",
      },
    ],
    image: {
      src: "https://img.caixin.com/2018-11-20/1542686818630151.jpg",
      alt: "Seawater near Xiaocuo village",
    },
    bullets: [
      "Broke the silence about police harassment due to the reports of the petrochemical leak in Quanzhou.",
      "The article prompted an outcry on social media, was extensively covered by internationally renowned media, and I received a rare apology from the police.",
      "Won Caixin's \"Journalist of the Year Nomination\" and \"Best All-media Coverage\".",
    ],
  },
  {
    id: "xiongan-cleanup",
    region: "china",
    category: "Environmental Advocacy",
    date: "2018-07-02",
    coords: { lat: 39.0274, lng: 115.9956, location: "Xiongan New Area, Hebei" },
    links: [
      {
        label: "Xiongan's Cleanup Efforts Don't Hold Water",
        href: "https://www.caixinglobal.com/2018-07-02/xiongan-new-areas-cleanup-efforts-dont-hold-water-101289787.html",
      },
    ],
    image: {
      src: "https://img.caixin.com/2018-07-02/1530524568881950.jpg",
      alt: "A landfill the size of 14 soccer fields sits next to a road in Anxin county, Xiongan New Area",
    },
    bullets: [
      "Continued to report the water and garbage pollution issue in Xiongan New Area, a development zone authorized by President Xi Jinping.",
      "The leaders of the area held a meeting of 1,000 officials to learn from my articles and announced a series of environmental governance actions.",
    ],
  },
  {
    id: "galapagos-sharks",
    region: "china",
    category: "Marine Conservation",
    date: "2020-07-29",
    coords: { lat: -0.7893, lng: -91.0972, location: "Galápagos Islands, Ecuador" },
    links: [
      {
        label: "How Did 6,223 Sharks End Up on Ship With No Fishing Equipment?",
        href: "https://www.caixinglobal.com/2017-09-28/how-did-6223-sharks-end-up-on-ship-with-no-fishing-equipment-101151735.html",
        subLabel: "2017-09-28",
      },
      {
        label: "The truth behind the intrusion of a Chinese vessel carrying 6,000+ sharks",
        href: "https://tangchuanc.medium.com/the-truth-behind-the-intrusion-of-a-chinese-vessel-carrying-more-than-6000-sharks-into-the-2cae00bcb4d0",
        subLabel: "2020-07-29",
      },
    ],
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*fkV2eNgObC75uxfg.jpg",
      alt: "Frozen sharks",
    },
    bullets: [
      "A Chinese-flagged ship carrying thousands of sharks was caught by Ecuadorean authorities off the Galápagos. I reported the story behind the shark hunt exclusively.",
      "The Ministry of Agriculture fined the illegal company, and the involved captain was blacklisted.",
      "My work was recognized as one of the most important reports in the past decade of Caixin.",
    ],
  },
  {
    id: "hainan-dolphins",
    region: "china",
    category: "Illegal Land Reclamation",
    date: "2017-07-20",
    coords: { lat: 18.2528, lng: 109.5119, location: "Sanya, Hainan" },
    links: [
      {
        label: "Will New Airport at China's Hainan Tourist Island Threaten Chinese White Dolphins?",
        href: "https://www.caixinglobal.com/2017-07-20/will-new-airport-at-chinas-popular-hainan-tourist-island-threaten-chinese-white-dolphins-101119403.html",
      },
    ],
    image: {
      src: "https://img.caixin.com/2017-07-20/1500540972196051.jpg",
      alt: "Construction work threatening the habitat of the Chinese white dolphin",
    },
    bullets: [
      "Reported exclusively several illegal land reclamation projects by HNA Group, Evergrande, and others in Hainan Province.",
      "The State Oceanic Administration subsequently issued a new mandate to control state reclamation projects strictly.",
      "Won the \"Annual Public Service Report\" Award issued by Tencent.",
    ],
  },
  {
    id: "beijing-tobacco",
    region: "china",
    category: "Tobacco Control",
    date: "2015-08-04",
    coords: { lat: 39.9042, lng: 116.4074, location: "Beijing, China" },
    links: [
      {
        label:
          "Tobacco control law enforcement officers in Beijing humiliated with toothpaste by a tobacco corporation (Chinese)",
        href: "https://www.thepaper.cn/newsDetail_forward_1360038",
      },
    ],
    image: {
      src: "http://image.thepaper.cn/www/image/4/493/859.jpg",
      alt: "Tobacco control law enforcement officers",
    },
    bullets: [
      "Exclusively wrote a series of reports; the corporation involved eventually apologized and accepted punishment.",
      "Won \"First Prize\" of the National China Tobacco Control Communication Award issued by the Ministry of Health.",
    ],
  },
  {
    id: "yunnan-earthquake",
    region: "china",
    category: "Disaster Coverage",
    date: "2014-08-06",
    coords: { lat: 27.1825, lng: 103.3565, location: "Ludian, Yunnan" },
    links: [
      {
        label: "Earthquake relief soldiers made instant noodles with muddy water (Chinese)",
        href: "https://www.thepaper.cn/newsDetail_forward_1260180",
      },
    ],
    image: {
      src: "http://image.thepaper.cn/www/image/4/88/695.jpg",
      alt: "Victims drinking water after earthquake",
    },
    bullets: [
      "Reported from the front lines of the 6.5-magnitude earthquake.",
      "Won China Media Foundation's Disaster Coverage Grant.",
    ],
  },
  {
    id: "hainan-typhoon",
    region: "china",
    category: "Disaster Coverage",
    date: "2014-07-21",
    coords: { lat: 19.6075, lng: 110.7975, location: "Wenchang, Hainan" },
    links: [
      {
        label: "Hainan typhoon victims receive moldy bread (Chinese)",
        href: "https://www.thepaper.cn/newsDetail_forward_1257217",
      },
    ],
    image: {
      src: "http://image.thepaper.cn/www/image/4/75/966.jpg",
      alt: "Moldy bread",
    },
    bullets: [
      "Exclusively exposed that the disaster relief food in Wenchang, Hainan and other places was moldy bread.",
      "The article was the first headline after the establishment of the company website.",
    ],
  },
];

export const chinaRecognitions: JournalismRecognition[] = [
  {
    category: "Media Coverage",
    title: "Environmental reporters face disinformation, threats in China's restrictive climate",
    titleHref:
      "https://ijnet.org/en/story/environmental-reporters-face-disinformation-threats-chinas-restrictive-political-climate",
    bullets: ["Interviewed by the International Journalists' Network in November 2022."],
  },
  {
    category: "Visiting Scholar",
    image: { src: "/images/bj-zhou-chen.jpg", alt: "U.S. State Department invitation" },
    bullets: [
      "Invited by the U.S. Department of State's International Visitor Leadership Program in January 2020.",
    ],
  },
  {
    category: "Award",
    image: { src: "/images/winner1.jpg", alt: "Asian Environmental Journalism Award" },
    bullets: [
      "Merit Winner for excellent performance in the Asian Environmental Journalism Awards \"Young Environmental Journalist\" of the Singapore Environment Council in March 2019.",
    ],
  },
  {
    category: "Mentor",
    bullets: [
      "Invited by the world's largest environmental network IUCN as a guest speaker at the South Asia Trans-Border Rivers project conference in Nepal in June 2018.",
    ],
  },
];
