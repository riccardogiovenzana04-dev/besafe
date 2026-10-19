/*
  PEZZI DI FANGO — incident data
  ------------------------------------------------------------
  This is the only file you edit to update the site.
  The open page re-reads it every 60 seconds, so saved changes
  show up live without a reload.

  Rules we follow:
  - Every figure carries a source key (see SOURCES).
  - If a number has not been published, it stays null and the
    site shows "Not published". Nothing is estimated by us.
  - Coordinates marked approx:true are the street or square,
    not the exact shop door.
*/
window.P2P_DATA = {
  checkedAt: "2026-10-19T22:15:00+02:00",

  SOURCES: {
    ilpost:   { outlet: "Il Post",        title: "Cosa è successo a Milano in due giorni di saccheggi e disordini", date: "2026-10-19", url: "https://www.ilpost.it/2026/10/19/milano-devastazioni-saccheggi-scontri-negozi-polizia-manifestazione/" },
    sky:      { outlet: "Sky TG24",       title: "Milano, nuovi disordini: vetrine sfondate e negozi assaltati (diretta)", date: "2026-10-18", url: "https://tg24.sky.it/cronaca/2026/10/18/milano-proteste-ultime-notizie-diretta" },
    sky17:    { outlet: "Sky TG24",       title: "Milano, scontri al corteo e cariche della polizia: feriti e fermati", date: "2026-10-17", url: "https://tg24.sky.it/cronaca/2026/10/17/milano-corteo-scontri-feriti" },
    ansa:     { outlet: "ANSA",           title: "Scontri ai cortei, 28 arresti. A Milano 500 mila euro di danni", date: "2026-10-18", url: "https://www.ansa.it/sito/notizie/cronaca/2026/10/18/scontri-a-milano-28-arresti-e-197-identificati-diversi-minori-e-stranieri.-meloni-siamo_397d8359-98ac-4ba2-840f-a55dcb988745.html" },
    mtoday:   { outlet: "MilanoToday",    title: "La manifestazione in Duomo diventa guerriglia, 60 fermati (metà minorenni)", date: "2026-10-17", url: "https://www.milanotoday.it/politica/manifestazione-duomo-scontri-feriti-17-ottobre-2026.html" },
    ap:       { outlet: "AP / ABC News",  title: "Paris police report 855 arrests after violent clashes and looting", date: "2026-10-18", url: "https://abcnews.com/International/wireStory/paris-police-report-855-arrests-after-violent-clashes-137358853" },
    f24:      { outlet: "France 24",      title: "'Like we had a war': France left reeling after nationwide violent protests", date: "2026-10-18", url: "https://www.france24.com/en/france/20261018-like-we-had-a-war-france-left-reeling-after-nationwide-violent-protests" },
    aj:       { outlet: "Al Jazeera",     title: "Paris left reeling as student-led protests turn chaotic", date: "2026-10-18", url: "https://www.aljazeera.com/news/2026/10/18/paris-left-reeling-as-student-led-protests-turn-chaotic" },
    afp:      { outlet: "AFP via Yahoo",  title: "17 octobre : des pillages en marge des cortèges ont visé la grande distribution", date: "2026-10-18", url: "https://fr.news.yahoo.com/sport/17-octobre-pillages-marge-cort%C3%A8ges-071119570.html" },
    npr:      { outlet: "NPR",            title: "Macron vows to hold accountable those who 'sought to bring down the Republic'", date: "2026-10-17", url: "https://www.npr.org/2026/10/17/nx-s1-6006773/student-protests-france" },
    justice:  { outlet: "Ministère de la Justice", title: "Communiqué — Mouvement lycéen (bilan au 9 octobre)", date: "2026-10-09", url: "https://www.justice.gouv.fr/sites/default/files/2026-10/CP%20-%20Mouvement%20lyc%C3%A9en%20-%2009102026.pdf" },
    ansa19:   { outlet: "ANSA",           title: "Chiudono i negozi del lusso a Milano. I pm: 'Una rara violenza'", date: "2026-10-19", url: "https://www.ansa.it/sito/notizie/cronaca/2026/10/19/chiudono-i-negozi-del-lusso-a-milano.-i-pm-una-rara-violenza_0d0d286f-7f8f-420a-9737-2566da0ba8a2.html" },
    fi19:     { outlet: "franceinfo",     title: "Des couvre-feux partiels mis en place lundi soir à Paris, Lyon, Lille et Nice", date: "2026-10-19", url: "https://www.franceinfo.fr/societe/mobilisation-du-17-octobre/des-couvre-feux-partiels-mis-en-place-a-paris-lyon-lille-et-nice_8244511.html" },
    lp350:    { outlet: "Le Parisien",    title: "Violences à Paris : 350 interpellations à Paris dimanche et dans la nuit", date: "2026-10-19", url: "https://www.leparisien.fr/paris-75/violences-a-paris-350-interpellations-a-paris-dimanche-et-dans-la-nuit-des-deferements-attendus-ce-lundi-19-10-2026-FBOFK535CNFHHDZR57C23BFEW4.php" },
    lp1000:   { outlet: "Le Parisien",    title: "Violences à Paris : plus de 1 000 interpellations sur tout le week-end", date: "2026-10-19", url: "https://www.leparisien.fr/paris-75/violences-a-paris-plus-de-1-000-interpellations-sur-tout-le-week-end-des-comparutions-immediates-ce-lundi-19-10-2026-TOLNZYLH2VG47JMWJRYWTYAW2I.php" },
    kohen:    { outlet: "Kohen Avocats (law-firm blog)", title: "Dégâts à Paris après la manifestation du 17 octobre", date: "2026-10-18", url: "https://kohenavocats.fr/2026/10/18/degats-paris-manifestation-17-octobre-vitrine-brisee-commerce-pille-indemnisation-2026/", weak: true }
  },

  cities: {
    milano: {
      name: "Milano",
      center: [45.4668, 9.1880], zoom: 15,
      status: { level: "watch", label: "Tense", note: "Mon 19 Oct: pushing and insults at a rally in Piazza Duomo, heavy police checks in the square. Luxury boutiques on Via Montenapoleone stayed shut. The mayor expects more trouble, so avoid the centre in the evening." },
      lastIncident: "2026-10-19T18:00:00+02:00",
      event: "“Italia in piazza” against the cost of living, Sat 17 Oct; looting raids by youth groups, Sun 18 Oct",

      stats: {
        crowd:      { value: "Hundreds", detail: "Both days. Reports give no headcount; on Sunday youths moved in groups of 10–20.", src: ["ilpost", "sky"] },
        arrests:    { value: "≈50", detail: "Arrests over the weekend (ANSA, Mon 19 Oct). An earlier count was 28 arrests and 197 people identified. Charges include devastation and looting, which carry 8 to 15 years.", src: ["ansa19", "ansa"] },
        detained:   { value: "270+", detail: "72 stopped on Sat, more than 200 taken to the Questura on Sun.", src: ["ilpost", "sky"] },
        injured:    { value: null, detail: "No official total. A senior officer, Angelo De Simone (55), was hit on the head by a cobblestone.", src: ["sky", "ilpost"] },
        damage:     { value: "€1M+", detail: "Smashed windows, broken fittings and stolen goods, not counting lost sales. Provisional and expected to rise. The first estimate on Sunday was €500,000.", src: ["ansa19", "ansa"] },
        shops:      { value: 13, detail: "Named businesses hit (listed below), plus about 10 more windows, tram shelters, outdoor seating and motorbikes.", src: ["ilpost", "sky"] }
      },

      ages: {
        groups: [
          { label: "Whole weekend · arrested (as of Mon 19 Oct)", total: 50, minors: 39, approx: true, src: ["ansa19"] },
          { label: "Sat 17 Oct · arrested", total: 12, minors: 5, src: ["ilpost"] },
          { label: "Sun 18 Oct · taken to the Questura", total: 160, minorsPct: 80, src: ["sky", "ilpost"] }
        ],
        note: "Police describe almost all of those held as “very young”. Sunday's group was mainly Italian-born and second-generation youths from the city's outskirts and the surrounding province. Of about 50 arrested, the 11 adults are all aged 18 to 24; everyone else is under 18.",
        src: ["ilpost", "sky"]
      },

      zones: [
        { name: "Piazza Duomo", kind: "circle", at: [45.4641, 9.1900], r: 160, sev: 3, days: "Sat + Sun", what: "Meeting point for both days. Cobblestones and paper bombs thrown, officer injured, Duomo evacuated, Rinascente and McDonald's windows hit. Duomo metro (M1/M3) closed both days.", src: ["ilpost", "sky"] },
        { name: "Corso Vittorio Emanuele II", kind: "line", path: [[45.4647, 9.1915], [45.4655, 9.1940], [45.4662, 9.1970]], sev: 3, days: "Sat", what: "Foot Locker looted after hooded groups broke off from the march.", src: ["ilpost"] },
        { name: "Piazza San Babila", kind: "circle", at: [45.4664, 9.1978], r: 80, sev: 2, days: "Sat + Sun", what: "Shops attacked on Saturday. On Sunday at 20:42 ten people were stopped running from the Foot Locker nearby.", src: ["ilpost", "sky"] },
        { name: "Via Torino", kind: "line", path: [[45.4636, 9.1884], [45.4620, 9.1866], [45.4605, 9.1846]], sev: 3, days: "Sat + Sun", what: "Carrefour looted (food and alcohol taken). Champions and Foot Locker windows hit.", src: ["ilpost", "sky"] },
        { name: "Via Orefici", kind: "line", path: [[45.4646, 9.1890], [45.4651, 9.1876], [45.4656, 9.1863]], sev: 3, days: "Sun", what: "Levi's, Under Armour and Perlier hit. Sources disagree on whether Levi's and Under Armour were looted or only damaged.", src: ["ilpost", "sky"] },
        { name: "Piazza dei Mercanti", kind: "circle", at: [45.4650, 9.1880], r: 40, sev: 2, days: "Sat + Sun", what: "Groups moved through on both days.", src: ["ilpost", "sky"] },
        { name: "Cordusio", kind: "circle", at: [45.4656, 9.1860], r: 55, sev: 2, days: "Sun", what: "Dispersal point. Nine tourists trapped in a gallery on nearby Via Armorari were freed by firefighters.", src: ["ilpost", "sky"] },
        { name: "Via Dante", kind: "line", path: [[45.4658, 9.1858], [45.4667, 9.1846], [45.4682, 9.1828]], sev: 3, days: "Sun", what: "Sartoria Luigi Fusaro: till with the day's takings taken. Enel store damaged.", src: ["ilpost"] },
        { name: "Piazza Castello · Largo Cairoli", kind: "circle", at: [45.4688, 9.1822], r: 130, sev: 3, days: "Sat + Sun", what: "Decathlon windows smashed and store looted (clothes, shoes, bikes). Small fire by the fountain. Police charges on Saturday.", src: ["ilpost", "sky"] },
        { name: "Via Broletto · Via San Prospero", kind: "line", path: [[45.4662, 9.1868], [45.4672, 9.1862], [45.4686, 9.1855]], sev: 2, days: "Sat", what: "Police blocked the march here, then charged in Via San Prospero.", src: ["ilpost"] },
        { name: "Piazza della Scala", kind: "circle", at: [45.4674, 9.1898], r: 55, sev: 2, days: "Sun", what: "Groups gathered in front of La Scala.", src: ["ilpost", "sky"] },
        { name: "Moscova · Largo La Foppa · Corso Garibaldi", kind: "line", path: [[45.4728, 9.1842], [45.4762, 9.1846], [45.4787, 9.1851], [45.4779, 9.1905]], sev: 2, days: "Sun", what: "Groups moved north into Brera and Moscova.", src: ["ilpost", "sky"] },
        { name: "Cinque Vie · Via Meravigli", kind: "line", path: [[45.4628, 9.1835], [45.4645, 9.1838], [45.4655, 9.1813]], sev: 1, days: "Sun", what: "Dispersal route.", src: ["ilpost", "sky"] },
        { name: "Piazzale Cadorna", kind: "circle", at: [45.4680, 9.1760], r: 70, sev: 1, days: "Sun", what: "Named in the live coverage as an area groups reached.", src: ["sky"] },
        { name: "Via Montenapoleone", kind: "line", path: [[45.4660, 9.1958], [45.4676, 9.1945], [45.4697, 9.1924]], sev: 1, days: "Mon 19", what: "Hermès, Chanel, Pomellato and other luxury boutiques stayed closed for fear of more looting. Some windows were broken.", src: ["ansa19"] },
        { name: "Cimitero Monumentale", kind: "circle", at: [45.4855, 9.1795], r: 90, sev: 1, days: "Sat", what: "Part of Saturday's march went this way.", src: ["ilpost"] }
      ],

      points: [
        { name: "Piazza Fontana", at: [45.4630, 9.1932], kind: "info", what: "Churchgoers were led out of the Duomo here through an underground passage on Saturday.", src: ["ilpost"] }
      ],

      shops: [
        { name: "Foot Locker", type: "Sportswear", where: "Corso Vittorio Emanuele II", at: [45.4653, 9.1937], approx: true, status: "looted", day: "Sat 17", src: ["ilpost"] },
        { name: "Carrefour", type: "Supermarket", where: "Via Torino", at: [45.4613, 9.1857], approx: true, status: "looted", day: "Sun 18", what: "Food and alcohol taken", src: ["ilpost", "sky"] },
        { name: "Decathlon", type: "Sports", where: "Piazza Castello", at: [45.4684, 9.1828], approx: true, status: "looted", day: "Sun 18", what: "Windows smashed; clothes, shoes and bikes taken", src: ["ilpost", "sky"] },
        { name: "Vodafone store", type: "Phones", where: "Not specified", at: null, status: "looted", day: "Sun 18", what: "Stormed; a fire extinguisher was taken", src: ["ilpost"] },
        { name: "Sartoria Luigi Fusaro", type: "Tailor", where: "Via Dante", at: [45.4673, 9.1840], approx: true, status: "looted", day: "Sun 18", what: "Till with the day's takings taken", src: ["ilpost"] },
        { name: "Levi's", type: "Clothing", where: "Via Orefici", at: [45.4652, 9.1873], approx: true, status: "looted", disputed: true, day: "Sun 18", what: "Sky TG24 says looted, Il Post says damaged", src: ["sky", "ilpost"] },
        { name: "Under Armour", type: "Sportswear", where: "Via Orefici", at: [45.4654, 9.1868], approx: true, status: "looted", disputed: true, day: "Sun 18", what: "Sky TG24 says looted, Il Post says damaged", src: ["sky", "ilpost"] },
        { name: "Perlier", type: "Perfumery", where: "Via Orefici", at: [45.4649, 9.1882], approx: true, status: "damaged", day: "Sun 18", src: ["ilpost"] },
        { name: "Store Enel", type: "Energy retail", where: "Via Dante", at: [45.4665, 9.1850], approx: true, status: "damaged", day: "Sun 18", src: ["ilpost"] },
        { name: "Rinascente", type: "Department store", where: "Piazza Duomo", at: [45.4652, 9.1913], approx: true, status: "damaged", day: "Sun 18", what: "One display window smashed", src: ["ilpost", "sky"] },
        { name: "McDonald's", type: "Restaurant", where: "Piazza Duomo", at: [45.4645, 9.1892], approx: true, status: "damaged", day: "Sun 18", what: "Stones thrown at the windows", src: ["ilpost", "sky"] },
        { name: "Champions", type: "Sportswear", where: "Via Torino", at: [45.4624, 9.1870], approx: true, status: "damaged", day: "Sun 18", what: "Windows hit", src: ["sky"] },
        { name: "Foot Locker", type: "Sportswear", where: "Near San Babila / Via Torino", at: [45.4661, 9.1962], approx: true, status: "damaged", day: "Sun 18", src: ["sky"] },
        { name: "Tram shelters", type: "Public property", where: "Several, city centre", at: null, status: "damaged", day: "Sat + Sun", what: "Four on Saturday, more on Sunday", src: ["ilpost"] },
        { name: "Outdoor seating, bins, motorbikes", type: "Public / private", where: "City centre", at: null, status: "damaged", day: "Sun 18", src: ["ilpost"] }
      ],

      timeline: [
        { t: "Sat 17 · 15:00", phase: "peace", text: "Students called together on TikTok gather in Piazza Duomo for “Italia in piazza” against the cost of living.", src: ["ilpost"] },
        { t: "Sat 17 · afternoon", phase: "tension", text: "Police block the march in Via Broletto and charge in Via San Prospero. Part of the march heads to Largo Cairoli and the Monumentale.", src: ["ilpost"] },
        { t: "Sat 17 · evening", phase: "pieces", text: "Hooded groups break away and hit shops between the Duomo and San Babila. Foot Locker on Corso Vittorio Emanuele is looted. The Duomo is evacuated.", src: ["ilpost", "sky17"] },
        { t: "Sat 17 · night", phase: "after", text: "72 stopped, 22 reported, 12 arrested (5 of them minors).", src: ["ilpost"] },
        { t: "Sun 18 · 17:07", phase: "pieces", text: "Hundreds of youths in black return to Piazza Duomo in small groups. Experts call it “mini-blitz” tactics: fast hits where police aren't.", src: ["sky"] },
        { t: "Sun 18 · evening", phase: "pieces", text: "Carrefour in Via Torino, Decathlon in Piazza Castello and shops in Via Orefici and Via Dante are hit. Groups spread to Moscova and Corso Garibaldi.", src: ["ilpost", "sky"] },
        { t: "Sun 18 · 19:51", phase: "after", text: "160 taken to the Questura, 80% of them minors. The total later passes 200.", src: ["sky"] },
        { t: "Sun 18 · night", phase: "after", text: "Meloni calls a public-order meeting at Palazzo Chigi. Mayor Sala and Interior Minister Piantedosi clash over police numbers.", src: ["sky", "ansa"] }
      ]
    },

    paris: {
      name: "Paris",
      center: [48.8680, 2.3420], zoom: 13,
      status: { level: "active", label: "Curfew tonight", note: "Mon 19 Oct, 23:00–06:00: curfew for everyone around Place de la République and Les Halles (residents, workers, shopkeepers and emergency services exempt). Protests banned in several sectors from 20:00. New clashes and looting hit Paris on Sunday night." },
      lastIncident: "2026-10-19T02:00:00+02:00",
      event: "National day of action against the cost of living, Sat 17 Oct, then a second night of looting on Sun 18 Oct",

      stats: {
        crowd:      { value: "≈110,000", detail: "Paris march. Nationally 550,000 (Interior Ministry) or 800,000 (CGT). Unauthorised groups of several hundred to 1,000+.", src: ["ap", "f24"] },
        arrests:    { value: "1,000+", detail: "Paris, whole weekend: 855 on Saturday, then 350 on Sunday and overnight. About 1,800 nationwide on Saturday alone.", src: ["lp1000", "ap", "lp350", "aj"] },
        detained:   { value: 557, detail: "Still in custody in Paris after Saturday, per the Paris prosecutor. Fast-track trials began on Monday.", src: ["f24", "lp1000"] },
        injured:    { value: 15, detail: "13 police and gendarmes plus 2 firefighters in Paris. More than 500 nationwide. One marcher died of a heart attack; police do not link it to the violence.", src: ["ap", "f24"] },
        damage:     { value: "Hundreds of millions €", detail: "Retail federation figure, nationwide. No Paris-only figure yet. About 1,500 businesses hit nationwide.", src: ["f24", "afp"] },
        shops:      { value: 10, detail: "Named businesses hit (listed below). TF1-LCI counts about 615 shops looted or vandalised.", src: ["afp"] }
      },

      ages: {
        groups: [
          { label: "High-school movement, all France · in custody to 9 Oct", total: 6877, minors: 5890, src: ["justice"] }
        ],
        note: "Ages of the 1,000+ arrested over the weekend have not been published. The figure shown is the Justice Ministry's count for the whole high-school movement before that day. It shows who has been arrested so far, not who was arrested on the 17th.",
        src: ["justice"]
      },

      zones: [
        { name: "Place de la République", kind: "circle", at: [48.8674, 2.3636], r: 260, sev: 3, days: "Sat 17", what: "Epicentre. Cobblestones pulled up, shop fronts shattered, newsstand burned, Marianne statue covered in graffiti. At least eight chain stores looted around the square. Curfew 23:00–06:00 on Mon 19 Oct.", src: ["ap", "aj", "afp", "fi19"] },
        { name: "Les Halles (curfew sector)", kind: "circle", at: [48.8622, 2.3470], r: 330, sev: 3, days: "Mon 19", what: "Curfew 23:00–06:00 for everyone except residents, workers, shopkeepers and emergency services. The exact boundary was published only as a map image, so this circle is approximate.", src: ["fi19"] },
        { name: "Grands Boulevards", kind: "line", path: [[48.8679, 2.3628], [48.8693, 2.3560], [48.8704, 2.3482], [48.8713, 2.3420], [48.8716, 2.3365]], sev: 2, days: "Sat 17", what: "Dozens of shops smashed and looted. Single source, with no street numbers given.", src: ["kohen"], weak: true },
        { name: "Le Marais · Paris Centre", kind: "circle", at: [48.8592, 2.3590], r: 520, sev: 2, days: "Sat 17", what: "AFP says the Paris Centre sector was “hit twice” by rioters. A law-firm blog says dozens of shops were looted in the Marais.", src: ["afp", "kohen"] },
        { name: "Champs-Élysées and side streets", kind: "line", path: [[48.8738, 2.2950], [48.8710, 2.3010], [48.8686, 2.3075], [48.8660, 2.3125]], sev: 1, days: "Sat 17", what: "Shops looted, according to a single low-reliability source. Not confirmed by the major outlets we checked.", src: ["kohen"], weak: true }
      ],

      points: [
        { name: "10th arrondissement town hall", at: [48.8722, 2.3576], kind: "march", what: "Start of a march a student described as peaceful.", src: ["aj"] },
        { name: "Place de Clichy", at: [48.8836, 2.3274], kind: "march", what: "End of that march. The route between the two points has not been published.", src: ["aj"] }
      ],
      marchLink: [[48.8722, 2.3576], [48.8836, 2.3274]],

      shops: [
        { name: "Monoprix", type: "Supermarket", where: "Around Place de la République", at: null, status: "looted", day: "Sat 17", what: "Windows smashed, stock emptied", src: ["afp"] },
        { name: "McDonald's", type: "Restaurant", where: "Around Place de la République", at: null, status: "looted", day: "Sat 17", src: ["afp"] },
        { name: "SFR", type: "Phones", where: "Around Place de la République", at: null, status: "looted", day: "Sat 17", src: ["afp"] },
        { name: "Yves Rocher", type: "Cosmetics", where: "Around Place de la République", at: null, status: "looted", day: "Sat 17", src: ["afp"] },
        { name: "Picard", type: "Frozen food", where: "Around Place de la République", at: null, status: "looted", day: "Sat 17", src: ["afp"] },
        { name: "Carrefour City", type: "Supermarket", where: "Around Place de la République", at: null, status: "looted", day: "Sat 17", src: ["afp"] },
        { name: "Franprix", type: "Supermarket", where: "Around Place de la République", at: null, status: "looted", day: "Sat 17", src: ["afp"] },
        { name: "Etam", type: "Lingerie", where: "Around Place de la République", at: null, status: "looted", day: "Sat 17", src: ["afp"] },
        { name: "Kawasaki dealership", type: "Motorbikes", where: "Not specified", at: null, status: "burned", day: "Sat 17", src: ["afp"] },
        { name: "Serge Lutens", type: "Perfumery", where: "Shop front, location not given", at: null, status: "damaged", day: "Sat 17", src: ["aj"] }
      ],
      cluster: { name: "8 shops looted around République", at: [48.8669, 2.3652] },

      timeline: [
        { t: "Mid-September", phase: "peace", text: "High-school students start blockading schools over packed classrooms and teacher shortages.", src: ["aj"] },
        { t: "To 9 Oct", phase: "tension", text: "6,877 people taken into custody across France during the movement, 86% of them minors.", src: ["justice"] },
        { t: "Sat 17 · morning", phase: "tension", text: "Police use tear gas and stun grenades in Paris before the march even sets off. The prefecture had already refused several routes.", src: ["aj"] },
        { t: "Sat 17 · afternoon", phase: "peace", text: "About 110,000 march in Paris. One march runs from the 10th arrondissement town hall to Place de Clichy without trouble.", src: ["ap", "aj"] },
        { t: "Sat 17 · late afternoon", phase: "pieces", text: "Masked groups go for public buildings, then a second wave arrives “to steal and loot”. Stores around République are emptied and a Kawasaki dealership is set on fire.", src: ["ap", "afp"] },
        { t: "Sat 17 · night", phase: "after", text: "855 arrested in the Paris region. 13 officers and 2 firefighters injured.", src: ["ap"] },
        { t: "Sun 18", phase: "after", text: "557 still in custody. Macron vows to hold accountable those who “sought to bring down the Republic”.", src: ["f24", "npr"] },
        { t: "Sun 18 · night", phase: "pieces", text: "A second night of clashes and looting in Paris. 350 more arrests on Sunday and overnight.", src: ["lp350", "fi19"] },
        { t: "Mon 19", phase: "tension", text: "Curfew from 23:00 to 06:00 around République and Les Halles, and protests banned in several sectors from 20:00. Partial curfews also in Lyon, Lille and Nice.", src: ["fi19"] }
      ]
    }
  },

  causes: {
    tags: {
      cost:    "Cost of living",
      schools: "School conditions",
      budget:  "Austerity budget",
      fuel:    "Fuel and inflation",
      police:  "Policing",
      looting: "Opportunistic looting",
      left:    "Far-left groups",
      social:  "Social-media mobilisation",
      exclusion: "Youth from the outskirts"
    },
    reports: [
      { src: "ilpost", city: "milano", tags: ["cost", "social", "looting", "exclusion"], summary: "The Saturday march was against the rising cost of living, organised by students on TikTok. The violent groups acted on their own, with no link to collectives or social centres. Sunday's crowd was mostly minors from the outskirts and the province." },
      { src: "sky", city: "milano", tags: ["cost", "looting"], summary: "The raids followed a march against the cost of living. Experts call the method a “mini-blitz”: small, fast groups hitting places with no police nearby. Lombardy's governor calls those involved looters and criminals, not protesters." },
      { src: "ansa", city: "milano", tags: ["looting", "cost"], summary: "The government calls it a complex phenomenon with several causes still to untangle. Matteo Renzi rejects any cost-of-living link for Milan and calls it “pure delinquency”, while linking protests in the South to prices." },
      { src: "aj", city: "paris", tags: ["schools", "cost", "fuel", "budget", "police", "left"], summary: "Students point to overcrowded classrooms, teacher shortages, inequality and lack of opportunity. Wider anger over fuel prices and Lecornu's deficit-cutting budget brought the Gilets Jaunes in. Police watchdog IGPN has opened 36 inquiries into alleged police violence." },
      { src: "f24", city: "paris", tags: ["cost", "fuel", "schools", "left", "looting", "police"], summary: "Rising fuel prices and inflation tied to the Middle East war, plus school conditions. The government and Le Pen blame the ultra-left; Mélenchon blames the authorities. One analyst points to an ultra-left fringe plus opportunistic gangs from poor suburbs." },
      { src: "ap", city: "paris", tags: ["cost", "schools", "left", "looting"], summary: "A march against living costs joined by students angry about schools. Officials describe masked groups attacking public buildings, followed by people “whose sole aim was to steal and loot”." },
      { src: "afp", city: "paris", tags: ["looting"], summary: "The looting on the edges of the marches went mainly for big retail chains: supermarkets, phone shops and cosmetics stores." },
      { src: "npr", city: "paris", tags: ["schools", "left"], summary: "Macron frames the violence as an attack on the state and promises prosecutions. The coverage centres on the student protests that started the movement." }
    ]
  },

  cams: [
    { city: "milano", name: "Piazza Duomo", note: "Faces the cathedral square, the meeting point both days", url: "https://www.skylinewebcams.com/en/webcam/italia/lombardia/milano/duomo-milano.html", provider: "SkylineWebcams", affected: true },
    { city: "milano", name: "Piazza San Babila", note: "End of Corso Vittorio Emanuele, hit on both days", url: "https://www.skylinewebcams.com/en/webcam/italia/lombardia/milano/piazza-san-babila.html", provider: "SkylineWebcams", affected: true },
    { city: "milano", name: "Piazza Duomo, east view", note: "Second angle over the square, updated about every minute", url: "https://www.meteopool.org/en/webcam-mailand-milano-dom-duomo-id2336", provider: "Meteopool", affected: true },
    { city: "milano", name: "San Lorenzo · Colonne", note: "Corso di Porta Ticinese, south of Via Torino", url: "https://www.skylinewebcams.com/en/webcam/italia/lombardia/milano/basilica-di-san-lorenzo-maggiore.html", provider: "SkylineWebcams" },
    { city: "milano", name: "Stazione Centrale", note: "Main rail hub, for leaving the city", url: "https://www.skylinewebcams.com/en/webcam/italia/lombardia/milano/milano-stazione-centrale.html", provider: "SkylineWebcams" },
    { city: "paris", name: "Sacré-Cœur, Montmartre", note: "Looks out over the north of Paris, near Place de Clichy", url: "https://www.skylinewebcams.com/en/webcam/france/ile-de-france/paris/le-sacre-coeur-de-montmartre.html", provider: "SkylineWebcams" },
    { city: "paris", name: "Eiffel Tower", note: "City-wide view. Smoke from fires shows up here.", url: "https://www.skylinewebcams.com/en/webcam/france/ile-de-france/paris/tour-eiffel.html", provider: "SkylineWebcams" },
    { city: "paris", name: "Live streams near République", note: "YouTube search filtered to live videos. Journalists often stream from the square.", url: "https://www.youtube.com/results?search_query=place+de+la+r%C3%A9publique+paris+live&sp=EgJAAQ%253D%253D", provider: "YouTube search", affected: true }
  ],

  live: [
    { city: "milano", name: "ATM — metro and tram service", url: "https://www.atm.it/" },
    { city: "milano", name: "Sky TG24 — Milano live blog", url: "https://tg24.sky.it/milano" },
    { city: "milano", name: "MilanoToday — breaking news", url: "https://www.milanotoday.it/" },
    { city: "paris", name: "RATP — metro traffic info", url: "https://www.ratp.fr/infos-trafic" },
    { city: "paris", name: "Préfecture de Police on X", url: "https://x.com/prefpolice" },
    { city: "paris", name: "franceinfo — live coverage", url: "https://www.francetvinfo.fr/en-direct/" }
  ]
};
