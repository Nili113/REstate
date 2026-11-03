export interface LegalCredential {
  id: string;
  title: string;
  nepaliTitle: string;
  authority: string;
  nepaliAuthority: string;
  identifier: string;
  issuedDate: string;
  nepaliDate: string;
  status: string;
  description: string;
  documentImage: string;
  category: 'incorporation' | 'tax' | 'shareholder' | 'compliance';
  keyPoints: string[];
}

export interface PlanningSite {
  id: string;
  code: string;
  name: string;
  nepaliName: string;
  ward: string;
  municipality: string;
  district: string;
  locationSummary: string;
  mapImage: string;
  status: 'Inquiries Open' | 'Site Visits Available' | 'Master Plan Ready';
  accessRoad: string;
  highlights: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface LandUnitConversion {
  bigha: number;
  kattha: number;
  dhur: number;
  sqFeet: number;
  sqMeters: number;
}

export const COMPANY_INFO = {
  name: "Kenisha Real Estate Pvt. Ltd.",
  nepaliName: "केनिसा रियल स्टेट प्राइभेट लिमिटेड",
  shortNepaliName: "केनिसा रियल स्टेट प्रा. लि.",
  founder: "Miss Kenisha (Ranjita Dulal)",
  founderNepali: "सुश्री रंजिता दुलाल (केनिसा)",
  founderRole: "Founder & Managing Director / संचालक अध्यक्ष",
  portraitImage: "/assets/images/kenisha-portrait.jpg",
  avatarImage: "/assets/images/kenisha-avatar.jpg",
  sealImage: "/assets/images/kenisha-seal.png",
  registrationNo: "324284/080/081",
  panNo: "619817794",
  taxOffice: "Inland Revenue Office (IRO) Bhadrapur, Jhapa",
  taxOfficeNepali: "आन्तरिक राजस्व कार्यालय भद्रपुर, झापा",
  registeredOffice: "Ward No. 06, Mata Mandir Tol, Arjundhara Municipality, Jhapa, Koshi Province, Nepal",
  registeredOfficeNepali: "वार्ड नं. ०६, माता मन्दिर टोल, अर्जुनधारा नगरपालिका, झापा",
  incorporationDate: "December 03, 2023 (२०८० मंसिर १७)",
  authorizedCapital: "NPR 100,000,000 (रु. १० करोड / 100 Million)",
  issuedCapital: "NPR 9,900,000 (रु. ९९ लाख / 9.9 Million)",
  paidUpCapital: "NPR 9,900,000 (100% Equity Funded)",
  phone: "+977-9800000000",
  whatsapp: "+9779800000000",
  email: "info@kenisharealestate.com.np",
  inquiryNotice: "All site demarcations, boundary schedules, and valuation discussions are verified in person at our Arjundhara office with Miss Kenisha and our engineering team."
};

export const LEGAL_CREDENTIALS: LegalCredential[] = [
  {
    id: "incorporation",
    title: "Certificate of Incorporation",
    nepaliTitle: "कम्पनी दर्ताको प्रमाणपत्र",
    authority: "Office of the Company Registrar, Ministry of Industry, Commerce & Supplies",
    nepaliAuthority: "कम्पनी रजिष्ट्रारको कार्यालय, उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय",
    identifier: "Reg. No. 324284/080/081",
    issuedDate: "2023-12-03",
    nepaliDate: "२०८० मंसिर १७",
    status: "Verified Active",
    description: "Official legal registration issued under Section 5(1) of the Companies Act, 2006 to M/s Kenisha Real Estate Private Limited.",
    documentImage: "/assets/documents/doc-incorporation.png",
    category: "incorporation",
    keyPoints: [
      "Registered under Companies Act, 2006 (कम्पनी ऐन, २०६३)",
      "Registered Office in Arjundhara-6, Jhapa",
      "Corporate Entity Type: Private Limited Company",
      "Official seal and signature of Assistant Registrar"
    ]
  },
  {
    id: "pan-registration",
    title: "Permanent Account Number (PAN) Certificate",
    nepaliTitle: "स्थायी लेखा नम्बर (PAN) दर्ता प्रमाण पत्र",
    authority: "Inland Revenue Department, Ministry of Finance (IRO Bhadrapur)",
    nepaliAuthority: "आन्तरिक राजस्व विभाग, अर्थ मन्त्रालय (आन्तरिक राजस्व कार्यालय भद्रपुर)",
    identifier: "PAN: 619817794",
    issuedDate: "2024-01-02",
    nepaliDate: "२०८० पुष १७",
    status: "Active & In Good Standing",
    description: "Permanent taxation registration issued by IRO Bhadrapur, Jhapa for licensed real estate operations, land contracts, and property advisory.",
    documentImage: "/assets/documents/doc-pan.png",
    category: "tax",
    keyPoints: [
      "Dedicated corporate PAN: 619817794",
      "Registered Tax Office: Bhadrapur, Jhapa",
      "Approved for own and contract-based real estate operations",
      "Compliant with Inland Revenue Regulations"
    ]
  },
  {
    id: "share-register",
    title: "Shareholder Register & Corporate Seal",
    nepaliTitle: "शेयरधनी दर्ता किताब तथा आधिकारिक छाप",
    authority: "Office of Company Registrar & Kenisha Real Estate Board",
    nepaliAuthority: "कम्पनी रजिष्ट्रार कार्यालय एवं सञ्चालक समिति",
    identifier: "Shareholding: 99,000 Equity Shares",
    issuedDate: "2024-04-09",
    nepaliDate: "२०८० चैत्र २७",
    status: "100% Paid-Up Certified",
    description: "Schedule 24 statutory filing affirming Miss Kenisha (Ranjita Dulal) as Managing Director / Chairperson with 99,000 paid-up equity shares (रु. ९९,००,०००).",
    documentImage: "/assets/documents/doc-share-register.png",
    category: "shareholder",
    keyPoints: [
      "Ranjita Dulal (Miss Kenisha) confirmed as Chairperson / Managing Director",
      "Authorized capital: NPR 10 Crore (रु. १०,००,००,०००)",
      "Issued & Paid-up capital: NPR 99 Lakhs (रु. ९९,००,०००)",
      "Stamped with the official circular seal of Kenisha Real Estate Pvt. Ltd."
    ]
  },
  {
    id: "camis-record",
    title: "CAMIS Electronic Government Share Record",
    nepaliTitle: "CAMIS प्रणालीमा रहेको शेयर अभिलेख",
    authority: "Government of Nepal CAMIS Digital System",
    nepaliAuthority: "नेपाल सरकार कम्पनी रजिष्ट्रार डिजिटल CAMIS प्रणाली",
    identifier: "Digital QR Code Record 324284",
    issuedDate: "2025-01-28",
    nepaliDate: "२०८२ माघ १५",
    status: "Government Digitally Verified",
    description: "Direct extract from the Nepal Government's Company Administration Management Information System (CAMIS) validating 100% domestic Nepali ownership.",
    documentImage: "/assets/documents/doc-camis-record.png",
    category: "compliance",
    keyPoints: [
      "100% Nepali ownership verified (सम्पूर्ण नेपाली स्वामित्व)",
      "Automated system verification with scannable QR code",
      "Registered at Arjundhara-6, Jhapa",
      "Fully synced with national corporate registry"
    ]
  },
  {
    id: "tax-clearance-81-82",
    title: "Tax Clearance Certificate (FY 2081/082)",
    nepaliTitle: "कर चुक्ता प्रमाण पत्र (आ.व. २०८१/०८२)",
    authority: "Inland Revenue Office Bhadrapur, Jhapa",
    nepaliAuthority: "आन्तरिक राजस्व कार्यालय भद्रपुर, झापा",
    identifier: "Challani No. 6368 | QR Verified",
    issuedDate: "2026-04-01",
    nepaliDate: "२०८२ चैत १९",
    status: "Tax Clearance Approved",
    description: "Official tax clearance confirming total turnover of NPR 3,075,000 and total assessed tax paid of NPR 408,506 without outstanding liabilities.",
    documentImage: "/assets/documents/doc-tax-clearance-81-82.png",
    category: "tax",
    keyPoints: [
      "Fiscal Year: 2081/082 (आ.व. २०८१/०८२)",
      "Total Recorded Business Turnover: NPR 3,075,000",
      "Income Tax Assessed & Paid: NPR 408,506",
      "Issued under Income Tax Act Section 101 / Rule 26"
    ]
  },
  {
    id: "tax-clearance-80-81",
    title: "Tax Clearance Certificate (FY 2080/081)",
    nepaliTitle: "कर चुक्ता प्रमाण पत्र (आ.व. २०८०/०८१)",
    authority: "Inland Revenue Office Bhadrapur, Jhapa",
    nepaliAuthority: "आन्तरिक राजस्व कार्यालय भद्रपुर, झापा",
    identifier: "Challani No. 302",
    issuedDate: "2024-08-05",
    nepaliDate: "२०८१ साउन २१",
    status: "Tax Clearance Approved",
    description: "Official tax clearance confirming initial year turnover of NPR 1,995,500 and tax paid of NPR 402,190.",
    documentImage: "/assets/documents/doc-tax-clearance-80-81.png",
    category: "tax",
    keyPoints: [
      "Fiscal Year: 2080/081 (आ.व. २०८०/०८१)",
      "Recorded Turnover: NPR 1,995,500",
      "Tax Remitted: NPR 402,190",
      "Unbroken clean compliance history since inception"
    ]
  },
  {
    id: "annual-compliance",
    title: "Company Registrar Annual Return Filing",
    nepaliTitle: "कम्पनी रजिष्ट्रारको वार्षिक विवरण अभिलेख",
    authority: "Office of the Company Registrar (OCR)",
    nepaliAuthority: "कम्पनी रजिष्ट्रारको कार्यालय",
    identifier: "Challani No. 143727",
    issuedDate: "2026-01-14",
    nepaliDate: "२०८२ पुष ३०",
    status: "Filing Approved",
    description: "Statutory online return for FY 2081/082 formally accepted and archived with zero penalty or fine.",
    documentImage: "/assets/documents/doc-annual-compliance.png",
    category: "compliance",
    keyPoints: [
      "Annual return submitted for FY 2081/082",
      "Application ID: 82/83-07-101422194",
      "Zero fines or compliance delays (जरिवाना रकम रु. ०)",
      "All statutory books and director registers validated"
    ]
  },
  {
    id: "moa-objectives",
    title: "Memorandum of Association & Objectives",
    nepaliTitle: "प्रबन्ध-पत्र (कम्पनीका उद्देश्यहरु)",
    authority: "Office of the Company Registrar",
    nepaliAuthority: "कम्पनी रजिष्ट्रारको कार्यालय",
    identifier: "Schedule 10 Corporate By-Laws",
    issuedDate: "2023-12-03",
    nepaliDate: "२०८० मंसिर १७",
    status: "Legally Ratified",
    description: "Statutory objectives authorizing land development, property valuation, residential layout planning, and civil infrastructure execution.",
    documentImage: "/assets/documents/doc-moa-objectives.png",
    category: "incorporation",
    keyPoints: [
      "Clause 4(ख): Real estate activities and land planning",
      "Clause 4(छ): Land and property valuation (घरजग्गाको मूल्याङ्कन)",
      "Clause 4(घ): Site preparation, grading, and ground leveling",
      "Clause 4(ग): Architecture and civil engineering consultancy"
    ]
  }
];

export const PLANNING_SITES: PlanningSite[] = [
  {
    id: "arjundhara-06-site",
    code: "KEN-ARJ-06",
    name: "Arjundhara-06 Mata Mandir & Salbari Corridor",
    nepaliName: "अर्जुनधारा - ०६, माता मन्दिर तथा सालबारी कोरिडोर",
    ward: "Ward 06",
    municipality: "Arjundhara Municipality",
    district: "Jhapa",
    locationSummary: "Strategic residential and mixed-use land parcels located right in the administrative hub of Arjundhara Ward 06, directly adjacent to Mata Mandir Tol and the expanding Salbari road corridor.",
    mapImage: "/assets/images/6.jpeg",
    status: "Inquiries Open",
    accessRoad: "Paved municipal corridor with planned internal access lanes",
    highlights: [
      "Headquarter corridor of Kenisha Real Estate Pvt. Ltd.",
      "Direct verification of cadastre and plot demarcations",
      "Proximity to Arjundhara town center and public utilities",
      "Clear legal title and boundary certificates"
    ],
    specs: [
      { label: "Municipality", value: "Arjundhara, Jhapa" },
      { label: "Zone", value: "Ward 06 (Mata Mandir Tol)" },
      { label: "Direct Supervision", value: "Miss Kenisha (Ranjita Dulal)" },
      { label: "Inquiry Channel", value: "Direct Office Consultation" }
    ]
  },
  {
    id: "rana-gaun-site",
    code: "KEN-ARJ-08-RG",
    name: "Rana Gaun Plotted Settlement Site",
    nepaliName: "राना गाउँ योजनाबद्ध बस्ती, अर्जुनधारा - ०८",
    ward: "Ward 08",
    municipality: "Arjundhara Municipality",
    district: "Jhapa",
    locationSummary: "Organized residential plotted land layout in Rana Gaun, designed with orderly internal pathways and clear boundary delineations for family homes.",
    mapImage: "/assets/images/7.jpeg",
    status: "Site Visits Available",
    accessRoad: "Sub-arterial link connected to Ward 08 main feeder route",
    highlights: [
      "Planned neighborhood layout with demarcated pathways",
      "Ideal soil and elevation for residential build",
      "Guided on-site perimeter walk with company representatives",
      "Transparent plot ledger review"
    ],
    specs: [
      { label: "Municipality", value: "Arjundhara, Jhapa" },
      { label: "Locality", value: "Rana Gaun (राना गाउँ)" },
      { label: "Ward", value: "Ward 08" },
      { label: "Orientation", value: "Multi-aspect plotted sections" }
    ]
  },
  {
    id: "salbari-sector",
    code: "KEN-ARJ-09-SB",
    name: "Salbari Green Planning Sector",
    nepaliName: "सालबारी हरित योजना क्षेत्र, अर्जुनधारा - ०९",
    ward: "Ward 09",
    municipality: "Arjundhara Municipality",
    district: "Jhapa",
    locationSummary: "Tranquil green land parcels situated in the peaceful Salbari environment, ideal for peaceful villas and long-term residential security.",
    mapImage: "/assets/images/8.jpeg",
    status: "Inquiries Open",
    accessRoad: "Direct feeder lane to Salbari highway connection",
    highlights: [
      "Serene natural setting surrounded by green foliage",
      "High groundwater quality and optimal natural drainage",
      "Fast-appreciating suburban corridor of northern Jhapa",
      "Immediate possession scheduling upon registration"
    ],
    specs: [
      { label: "Municipality", value: "Arjundhara, Jhapa" },
      { label: "Sector", value: "Salbari (सालबारी)" },
      { label: "Ward", value: "Ward 09" },
      { label: "Plot Availability", value: "Consult Office for Schedule" }
    ]
  },
  {
    id: "birtamode-feeder",
    code: "KEN-JH-BTM",
    name: "Sanischare - Arjundhara Linkage Parcels",
    nepaliName: "शनिश्चरे - अर्जुनधारा पहुँच खण्ड",
    ward: "Connecting Corridors",
    municipality: "Arjundhara Municipality",
    district: "Jhapa",
    locationSummary: "Prime roadside and secondary access parcels bridging Sanischare bazaar with central Arjundhara, offering exceptional connectivity to commercial hubs.",
    mapImage: "/assets/images/9.jpeg",
    status: "Master Plan Ready",
    accessRoad: "Wide asphalt corridor linking commercial arterial roads",
    highlights: [
      "Direct transit access between Birtamode, Sanischare, and Arjundhara",
      "Suitable for commercial frontage or quiet set-back residences",
      "Verified survey cadastre ready for inspection",
      "Title deed and ownership records verified"
    ],
    specs: [
      { label: "Corridor", value: "Sanischare - Arjundhara Route" },
      { label: "Commercial Potential", value: "High Frontage Viability" },
      { label: "Valuation Service", value: "Certified Company Appraisal" },
      { label: "Survey Cadastre", value: "Official Blueprint Available" }
    ]
  }
];

export const CORE_SERVICES = [
  {
    icon: "Building2",
    title: "Land Planning & Plotted Development",
    nepaliTitle: "जग्गा प्लानिङ तथा बस्ती विकास",
    description: "Structured parcel layout design with demarcated internal access roads, proper drainage alignment, and clean cadastral separation under municipal guidelines."
  },
  {
    icon: "FileCheck2",
    title: "Official Property Valuation & Legal Audit",
    nepaliTitle: "घरजग्गाको आधिकारिक मूल्याङ्कन तथा कानुनी जाँच",
    description: "Licensed valuation under corporate by-laws, checking authentic government land tax receipts, ownership history, and municipal compliance to safeguard buyers."
  },
  {
    icon: "Shovel",
    title: "Site Preparation & Ground Engineering",
    nepaliTitle: "जग्गा सम्याउने तथा निर्माण पूर्वाधार",
    description: "Equipped with machinery oversight for site grading, soil compaction, perimeter demarcation, and connecting access infrastructure."
  },
  {
    icon: "ShieldCheck",
    title: "Transparent Conveyance & Title Transfer",
    nepaliTitle: "पारदर्शी नामसारी तथा रजिस्ट्रेसन परामर्श",
    description: "End-to-end documentation assistance through the local Land Revenue Office (मालपोत कार्यालय), ensuring transparent and dispute-free transfer."
  }
];

