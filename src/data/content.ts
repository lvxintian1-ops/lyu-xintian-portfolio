export interface Spread {
  src: string;
  label: string;
  caption: string;
}

export const exhibitionSpreads: Spread[] = [
  { src: "images/spread-01.jpg", label: "01 / 10", caption: "Cover — Exhibition Proposal" },
  { src: "images/spread-02.jpg", label: "02 / 10", caption: "Inspiration — Hawkins' Map of Consciousness" },
  { src: "images/spread-03.jpg", label: "03 / 10", caption: "Venue — Taikang Art Museum, floor plans & worklist" },
  { src: "images/spread-04.jpg", label: "04 / 10", caption: "Art Pieces — Ch.1 Flowing Dawn" },
  { src: "images/spread-05.jpg", label: "05 / 10", caption: "Art Pieces — Ch.2 Undercurrent of Tides" },
  { src: "images/spread-06.jpg", label: "06 / 10", caption: "Art Pieces — Ch.2 Undercurrent of Tides" },
  { src: "images/spread-07.jpg", label: "07 / 10", caption: "Art Pieces — Ch.3 Voice of Wind" },
  { src: "images/spread-08.jpg", label: "08 / 10", caption: "Art Pieces — Ch.4 Realm of Light and Shadow" },
  { src: "images/spread-09.jpg", label: "09 / 10", caption: "Public Program — Workshop: Tethered Wind" },
  { src: "images/spread-10.jpg", label: "10 / 10", caption: "Public Program — Talk: The Energy of Perception" },
];

export const thesisPages: Spread[] = [
  { src: "images/page-11.jpg", label: "Title", caption: "Creative Freedom in Uncertain Times" },
  { src: "images/spread-02.jpg", label: "—", caption: "" },
];

export const essayPages: Spread[] = [
  { src: "images/page-27.jpg", label: "I / III", caption: "Erosion and the Breath of the City" },
  { src: "images/page-28.jpg", label: "II / III", caption: "Insolare II — light as a force" },
];

export interface Chapter {
  no: string;
  title: string;
  en: string;
  desc: string;
  works: string[];
}

export const chapters: Chapter[] = [
  {
    no: "01",
    title: "Flowing Dawn",
    en: "The first breath of all things",
    desc: "The energy surge of nature is the first breath of all things — libido, geological time and metamorphosis open the exhibition as a primordial awakening.",
    works: ["Libido's Rhapsody", "Kunlun: Profound Time", "Metamorphosis", "Transitory Objects"],
  },
  {
    no: "02",
    title: "Undercurrent of Tides",
    en: "The torrent of the outside world",
    desc: "Data currents and geological memory. Not all currents run beneath the ocean — some flicker on every screen.",
    works: ["400 Million Years Ago an Ocean…", "Oriens: East", "Jubilation", "Cornerstone", "Vicissitudes of Time", "Chance: The Wheel of Fortune"],
  },
  {
    no: "03",
    title: "Voice of Wind",
    en: "Invisible forces, tangible art",
    desc: "Wind, electromagnetism and the sound of a melting glacier — energies that are felt only through their effects.",
    works: ["Sustainable Resonance", "Riding the Wind", "Electromagnetic Installation", "Vatnajökull (the sound of)"],
  },
  {
    no: "04",
    title: "Realm of Light and Shadow",
    en: "How we inhabit perception",
    desc: "From AI dreams to monochromatic rooms — illumination is not just what we see, but how we inhabit perception itself.",
    works: ["Archive of Dreams", "United Nations: Human World", "Room For One Color"],
  },
];

export interface Work {
  no: string;
  artist: string;
  title: string;
  year: string;
  chapter: string;
}

export const works: Work[] = [
  { no: "01", artist: "Liu Ke", title: "Libido's Rhapsody", year: "2015", chapter: "01" },
  { no: "02", artist: "Wang Aijun", title: "Kunlun: Profound Time", year: "2018", chapter: "01" },
  { no: "03", artist: "Luo Daishi", title: "Metamorphosis", year: "2019", chapter: "01" },
  { no: "04", artist: "Marina Abramović", title: "Transitory Objects", year: "2010", chapter: "01" },
  { no: "05", artist: "Cao Shu", title: "400 Million Years Ago an Ocean, 400 Million Years Later a Desert", year: "2021", chapter: "02" },
  { no: "06", artist: "Cao Yuxi", title: "Oriens: East", year: "2020", chapter: "02" },
  { no: "07", artist: "Tang Yuhan", title: "Jubilation", year: "2017", chapter: "02" },
  { no: "08", artist: "Gan Jian", title: "Cornerstone", year: "2016", chapter: "02" },
  { no: "09", artist: "Zhao Yan & Zhu Jianfei", title: "Vicissitudes of Time", year: "2014", chapter: "02" },
  { no: "10", artist: "Christian Boltanski", title: "Chance: The Wheel of Fortune", year: "2011", chapter: "02" },
  { no: "11", artist: "Yuan Long", title: "Sustainable Resonance", year: "2019", chapter: "03" },
  { no: "12", artist: "Thijs Biersteker", title: "Riding the Wind", year: "2022", chapter: "03" },
  { no: "13", artist: "Grund & Nisunen", title: "Electromagnetic Installation", year: "2005", chapter: "03" },
  { no: "14", artist: "Katie Paterson", title: "Vatnajökull (the sound of)", year: "2007–2008", chapter: "03" },
  { no: "15", artist: "Refik Anadol", title: "Archive of Dreams", year: "2020", chapter: "04" },
  { no: "16", artist: "Wenda Gu", title: "United Nations: Human World", year: "1993–2000", chapter: "04" },
  { no: "17", artist: "Olafur Eliasson", title: "Room For One Color", year: "1998", chapter: "04" },
];

export const paperSections = [
  {
    no: "1.1",
    title: "The global economic environment and the cultural industry",
    body: "In a global context marked by shifting economic conditions, artistic production has become deeply shaped by economic mechanisms. Inflation, geopolitical conflict and the restructuring of the cultural sector define the landscape young artists create within.",
  },
  {
    no: "1.2",
    title: "The predicament of young artists' creative freedom",
    body: "Graduate artists often need multiple jobs to sustain themselves, yet their median annual income is still 44% lower than that of other professions. The phenomenon of 'passion wages' is widespread — love for the profession substitutes for fair income.",
  },
  {
    no: "2.1",
    title: "Digital platforms and free exploration",
    body: "From VVEBCAM to brand collaborations, young artists leverage social media to expand their audience base and reduce reliance on traditional intermediaries — while navigating the instability that comes with platform logic.",
  },
  {
    no: "2.2",
    title: "Institutional pathways: the case of Liu Xinyi",
    body: "Public funding and institutional support bring both opportunities and challenges: socio-economically disadvantaged groups often receive limited support, and projects may require works to conform to industry or policy orientations.",
  },
  {
    no: "3.4",
    title: "The impact of art institutions",
    body: "KAWS's success story reveals the complexity of private capital: commercial collaborations bring artworks into wider public view, but push artists toward reproducible visual symbols — a double-edged sword for creative autonomy.",
  },
  {
    no: "4.2",
    title: "Global institutional innovation practices",
    body: "Transnational mobility funds, multi-year grant contracts and low-cost public creative spaces can reduce the administrative burden on artists, letting them focus on what matters: the work itself.",
  },
];
