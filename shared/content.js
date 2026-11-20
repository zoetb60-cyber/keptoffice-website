/* =========================================================
   Kept Office — shared site content
   Edit prices, packages, FAQs and shop products here once;
   all three design options read from this file.
   ========================================================= */
window.KEPT = {
  brand: {
    name: "Kept Office",
    email: "hello@keptoffice.com",
    instagram: "https://instagram.com/keptoffice",
    // TODO: paste your Google Calendar appointment-schedule link here
    bookingUrl: "https://calendar.google.com/",
    // TODO: optional — a Formspree (or similar) endpoint. If empty, forms open the visitor's email app instead.
    formEndpoint: "",
    zarRate: 16.8,
    offer: "Founding offer: 15% off your first month or first website — for the first 10 clients only."
  },

  img: {
    heroDesk:   "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80",
    office:     "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    laptop:     "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
    typing:     "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    planner:    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    notebook:   "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80",
    social:     "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
    analytics:  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    webdesign:  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    meeting:    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    salon:      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    estate:     "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    capetown:   "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1400&q=80"
  },

  services: [
    { tab: "executive", title: "Executive Support", img: "planner",
      text: "Inbox, calendar, travel, documents and trackers — handled quietly and to a high standard.", from: 450, unit: "/mo" },
    { tab: "social", title: "Social Media", img: "social",
      text: "Designed posts, Reels and a content calendar you approve, scheduled ahead every month.", from: 300, unit: "/mo" },
    { tab: "websites", title: "Websites", img: "webdesign",
      text: "A polished, mobile-friendly business website with booking and enquiry forms. Live in 14 days.", from: 500, unit: " once-off" },
    { tab: "shop", title: "Template Shop", img: "notebook",
      text: "Instant-download planners, email systems and social templates — the tools I use every day.", from: 6, unit: "" }
  ],

  steps: [
    { n: "01", title: "Book a free call", text: "A relaxed 30-minute chat about what's on your plate and what you'd like off it." },
    { n: "02", title: "Choose your package", text: "A fixed monthly price, paid upfront. No hourly billing, no surprises." },
    { n: "03", title: "Hand it over", text: "I batch your work each week and reply within one business day, Monday to Friday." }
  ],

  packages: {
    executive: [
      { name: "Essentials", price: 450,
        items: ["Weekly inbox clean-up", "Reply templates", "Calendar scheduling", "Travel research and itineraries", "Weekly priorities summary"] },
      { name: "Professional", price: 800, featured: true,
        items: ["Everything in Essentials", "Meeting agendas and minutes", "Documents, slides and reports", "Excel trackers for stock, invoices and records", "Follow-up emails"] },
      { name: "Executive", price: 1400,
        items: ["Everything in Professional", "Project trackers", "Research reports and SOPs", "Monthly planning call", "Priority turnaround"] }
    ],
    social: [
      { name: "Starter", price: 300,
        items: ["1 platform", "12 designed posts", "Captions and hashtags", "Scheduled in advance", "Monthly report"] },
      { name: "Growth", price: 550, featured: true,
        items: ["2 platforms", "16 posts + 4 Reels", "Stories twice a week", "Content calendar for your approval", "Report and strategy notes"] },
      { name: "Premium", price: 850,
        items: ["3 platforms", "20 posts + 8 Reels", "Comments and DMs answered on weekdays", "Shoot planning", "Paid ads setup and management (ad spend separate)"] }
    ],
    websites: [
      { name: "Business Website", price: 500, once: true, featured: true,
        items: ["Up to 5 pages", "Branding to match your business", "Mobile-friendly", "Contact form and WhatsApp button", "Booking or enquiry form", "Instagram feed and map", "SEO basics", "Training video so you can edit it", "Live in 14 days"] }
    ]
  },

  addons: [
    { name: "Online shop", price: "+$300", zar: 300 },
    { name: "Extra page", price: "+$50", zar: 50 },
    { name: "Logo design", price: "+$100", zar: 100 },
    { name: "Care plan", price: "$40/mo", zar: 40 }
  ],

  samples: [
    { name: "Emerald & Olive", type: "Restaurant", img: "restaurant", url: "https://hello6197744.wixsite.com/emerald", domain: "emeraldandolive.co.za" },
    { name: "Lumière Beauty", type: "Beauty salon", img: "salon", url: "", domain: "lumierebeauty.co.za" },
    { name: "Atlantic Keys", type: "Estate agency", img: "estate", url: "", domain: "atlantickeys.co.za" }
  ],

  faq: {
    executive: [
      ["How do you get access to my inbox and calendar?", "You add me as a delegate in Google Workspace or Outlook. You stay in control and can remove access at any time."],
      ["How quickly will you reply?", "Within one business day, Monday to Friday. Executive clients get priority turnaround."],
      ["Do you do personal errands or same-day requests?", "No — packages cover planned, batched business admin so the quality stays high."],
      ["Is my information kept confidential?", "Always. I'm happy to sign your NDA, and Kept Office is run fully separately from any other work."],
      ["How do I pay?", "Fixed monthly packages in US dollars, paid upfront. PayFast or Yoco for rands, PayPal internationally. Cancel any month."]
    ],
    social: [
      ["Do I get to approve posts before they go live?", "Yes. You receive a content calendar each month and nothing is posted without your approval."],
      ["Which platforms do you manage?", "Instagram, Facebook, LinkedIn and TikTok. Choose 1, 2 or 3 depending on your package."],
      ["Is ad spend included in Premium?", "No — I set up and manage the ads; the ad budget is paid directly by you to the platform."],
      ["Who takes the photos?", "You supply photos or I plan a simple shoot list for you. Premium includes shoot planning."],
      ["Is there a contract?", "Packages run month to month, paid upfront. No long lock-ins."]
    ],
    websites: [
      ["What platform do you build on?", "Wix — so you can update text and photos yourself. You also get a training video."],
      ["What do you need from me?", "Your logo (or I can design one), photos and a short questionnaire. I write the copy with you."],
      ["Is the domain included?", "Domains and Wix plans are paid by you so they stay in your name. I'll set everything up."],
      ["What does the care plan cover?", "Monthly updates, small text and photo changes, backups and a quick health check for $40/mo."]
    ]
  },

  bundles: [
    { name: "Social Media Starter Kit", price: 35, was: 52, kind: "post",
      items: ["30-day content calendar", "60 caption templates", "20 Instagram post templates", "50 Reels hooks"] },
    { name: "The EA Toolkit", price: 69, was: 104, kind: "doc",
      items: ["Inbox Zero system", "100 email templates", "EA SOP library", "Travel planning kit", "Weekly planner"] },
    { name: "The Complete Kept Office Library", price: 119, was: 246, kind: "dashboard", featured: true,
      items: ["Every template in the shop", "Future templates free", "Notion dashboard", "Planners, trackers and calculators"] }
  ],

  // Prices per product are placeholders inside the $6–$20 range from the brief.
  products: [
    { name: "Monthly Content Calendar", cat: "Social Media", price: 12, kind: "calendar",
      items: ["12 monthly calendar pages", "Content pillar planner", "Canva + PDF versions"] },
    { name: "Caption Templates (60)", cat: "Social Media", price: 9, kind: "doc",
      items: ["60 fill-in-the-blank captions", "Hashtag bank", "Call-to-action list"] },
    { name: "Instagram Post Templates", cat: "Social Media", price: 15, kind: "post",
      items: ["20 editable Canva posts", "Quote, tip and promo layouts", "Brand colour guide"] },
    { name: "Instagram Story Templates", cat: "Social Media", price: 12, kind: "story",
      items: ["25 Story templates", "Poll and Q&A frames", "Highlight covers"] },
    { name: "Reels Hooks (50)", cat: "Social Media", price: 6, kind: "doc",
      items: ["50 proven opening lines", "Grouped by goal", "Printable PDF"] },
    { name: "LinkedIn Post Templates", cat: "Social Media", price: 9, kind: "doc",
      items: ["30 post structures", "Carousel layouts", "Profile checklist"] },
    { name: "Inbox Zero System", cat: "Admin & Email", price: 14, kind: "dashboard",
      items: ["Folder and label setup", "Daily 15-minute routine", "Gmail + Outlook guides"] },
    { name: "100 Email Templates", cat: "Admin & Email", price: 18, kind: "doc",
      items: ["Client, supplier and follow-up emails", "Polite chasers", "Copy-and-paste ready"] },
    { name: "EA SOP Library", cat: "Admin & Email", price: 20, kind: "doc",
      items: ["15 step-by-step SOPs", "Editable Word + Google Docs", "Handover checklist"] },
    { name: "Travel Planning Kit", cat: "Admin & Email", price: 12, kind: "sheet",
      items: ["Itinerary template", "Packing and booking checklist", "Expense log"] },
    { name: "Notion Business Dashboard", cat: "Business & Finance", price: 19, kind: "dashboard",
      items: ["Tasks, clients and content in one place", "Duplicate in one click", "Video walkthrough"] },
    { name: "Client Onboarding Pack", cat: "Business & Finance", price: 16, kind: "doc",
      items: ["Welcome guide", "Questionnaire", "Onboarding checklist"] },
    { name: "Invoice & Quote Templates", cat: "Business & Finance", price: 9, kind: "sheet",
      items: ["Invoice and quote in Excel + Word", "Auto totals and VAT", "Payment terms wording"] },
    { name: "Income & Expense Tracker", cat: "Business & Finance", price: 12, kind: "sheet",
      items: ["Monthly and yearly view", "Auto charts", "Tax set-aside calculator"] },
    { name: "Pricing Calculator", cat: "Business & Finance", price: 10, kind: "sheet",
      items: ["Work out package prices", "USD and ZAR", "Profit per client"] },
    { name: "Weekly Planner", cat: "Planners", price: 6, kind: "planner",
      items: ["Printable + fillable PDF", "Priorities and habits", "Undated"] },
    { name: "90-Day Planner", cat: "Planners", price: 12, kind: "calendar",
      items: ["Quarterly goals", "Weekly check-ins", "Review pages"] },
    { name: "Digital Daily Planner", cat: "Planners", price: 15, kind: "planner",
      items: ["Hyperlinked tabs", "GoodNotes + Notability", "Undated, reusable"] }
  ]
};
