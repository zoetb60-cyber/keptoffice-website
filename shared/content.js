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

  /* Each product has a `demo` — the sample content shown in its realistic
     shop mock-up (rendered by shared/mockups.js). `fmt` = file formats. */
  bundles: [
    { name: "Social Media Starter Kit", price: 35, was: 52, kind: "post", fmt: "Canva · PDF",
      items: ["30-day content calendar", "60 caption templates", "20 Instagram post templates", "50 Reels hooks"],
      demo: { slides: [
        { photo: "heroDesk", text: "5 ways to win back your Monday", small: "Swipe →" },
        { tone: "soft", quote: "“Done is better than perfect.”", small: "@yourbusiness" },
        { photo: "notebook", text: "Now booking for April", small: "Link in bio" } ] } },
    { name: "The EA Toolkit", price: 69, was: 104, kind: "doc", fmt: "Word · Google Docs · PDF",
      items: ["Inbox Zero system", "100 email templates", "EA SOP library", "Travel planning kit", "Weekly planner"],
      demo: { title: "The EA Toolkit", sub: "Systems, SOPs and templates for calm admin",
        list: ["Inbox Zero system", "100 email templates", "15 step-by-step SOPs", "Travel planning kit", "Weekly planner"], check: true } },
    { name: "The Complete Kept Office Library", price: 119, was: 246, kind: "dashboard", featured: true, fmt: "Notion · Canva · Excel · PDF",
      items: ["Every template in the shop", "Future templates free", "Notion dashboard", "Planners, trackers and calculators"],
      demo: { file: "Kept Office Library", title: "Template Library",
        cols: [["Social", ["Content calendar", "60 captions", "Story templates"]], ["Admin", ["Inbox Zero", "100 emails", "SOP library"]], ["Finance", ["Invoice + quote", "Income tracker", "Pricing calculator"]]] } }
  ],

  // Prices per product are placeholders inside the $6–$20 range from the brief.
  products: [
    { name: "Monthly Content Calendar", cat: "Social Media", price: 12, kind: "calendar", fmt: "Canva · PDF",
      items: ["12 monthly calendar pages", "Content pillar planner", "Canva + PDF versions"],
      demo: { month: "April", start: 2, tags: { 1: "Reel", 3: "Tip", 6: "Promo", 8: "Quote", 10: "Reel", 13: "Story", 15: "Tip", 17: "Launch", 20: "Reel", 22: "FAQ", 24: "Promo", 27: "Recap", 29: "Reel" } } },
    { name: "Caption Templates (60)", cat: "Social Media", price: 9, kind: "doc", fmt: "PDF · Google Docs",
      items: ["60 fill-in-the-blank captions", "Hashtag bank", "Call-to-action list"],
      demo: { title: "60 Caption Templates", sub: "Fill in the blanks · copy · post", blocks: [
        ["#07 · Behind the scenes", "Ever wondered what goes into [your service]? Here's a peek at what happens before [result]…"],
        ["#08 · Client win", "This is what [client] said after [result]: “[quote]”. Want the same? Link in bio."],
        ["#09 · Myth buster", "You don't need [common belief] to [goal]. Here's what actually works:"] ] } },
    { name: "Instagram Post Templates", cat: "Social Media", price: 15, kind: "post", fmt: "Canva",
      items: ["20 editable Canva posts", "Quote, tip and promo layouts", "Brand colour guide"],
      demo: { slides: [
        { photo: "laptop", text: "3 tools that run my week", small: "Save for later" },
        { tone: "accent", quote: "Small steps, every single day.", small: "@yourbusiness" },
        { photo: "planner", text: "New: free planning call", small: "Book now" } ] } },
    { name: "Instagram Story Templates", cat: "Social Media", price: 12, kind: "story", fmt: "Canva",
      items: ["25 Story templates", "Poll and Q&A frames", "Highlight covers"],
      demo: { screens: [
        { photo: "typing", poll: ["Do you batch your content?", "Yes!", "Not yet"] },
        { tone: "accent", ask: "Ask me anything about running a small business" },
        { photo: "notebook", text: "New post", small: "Tap to read ↗" } ] } },
    { name: "Reels Hooks (50)", cat: "Social Media", price: 6, kind: "doc", fmt: "PDF",
      items: ["50 proven opening lines", "Grouped by goal", "Printable PDF"],
      demo: { title: "50 Reels Hooks", sub: "Grouped by goal · Grow · Sell · Teach", list: [
        "Stop scrolling if you run a small business.", "3 apps I can't run my week without", "What I wish I knew before hiring help",
        "The 15-minute habit that saved my inbox", "POV: it's Monday and your admin is done", "Here's what nobody tells you about [topic]"] } },
    { name: "LinkedIn Post Templates", cat: "Social Media", price: 9, kind: "post", fmt: "Canva · PDF",
      items: ["30 post structures", "Carousel layouts", "Profile checklist"],
      demo: { slides: [
        { tone: "accent", text: "How I cut my admin time in half", small: "Swipe →" },
        { tone: "paper", text: "1. Batch your inbox twice a day", small: "02 / 06" },
        { photo: "meeting", text: "What's your best time-saver?", small: "Comment below" } ] } },
    { name: "Inbox Zero System", cat: "Admin & Email", price: 14, kind: "inbox", fmt: "PDF · Gmail · Outlook",
      items: ["Folder and label setup", "Daily 15-minute routine", "Gmail + Outlook guides"],
      demo: { folders: [["Inbox", "0"], ["1 · Action", "3"], ["2 · Waiting on", "5"], ["3 · Read later", "12"], ["Receipts", ""], ["Archive", ""]],
        msgs: [["Accounts", "Invoice #0042 — paid", "Done"], ["Sarah M.", "Re: Thursday's agenda", "Action"], ["Travel desk", "Your flight to JNB is confirmed", "Waiting"], ["Supplier", "Quote for April stock", "Action"], ["Newsletter", "5 ideas for Q2", "Later"]] } },
    { name: "100 Email Templates", cat: "Admin & Email", price: 18, kind: "doc", fmt: "Word · Google Docs",
      items: ["Client, supplier and follow-up emails", "Polite chasers", "Copy-and-paste ready"],
      demo: { title: "100 Email Templates", sub: "Clients · Suppliers · Follow-ups", blocks: [
        ["Subject: Quick follow-up on our proposal", "Hi [Name], I hope your week is going well. I wanted to check whether you had any questions about the proposal I sent on [date]."],
        ["Subject: Friendly payment reminder", "Hi [Name], just a gentle reminder that invoice [#] for [amount] is due on [date]. You can pay here: [link]."] ] } },
    { name: "EA SOP Library", cat: "Admin & Email", price: 20, kind: "doc", fmt: "Word · Google Docs",
      items: ["15 step-by-step SOPs", "Editable Word + Google Docs", "Handover checklist"],
      demo: { title: "SOP 04 · Booking business travel", sub: "Owner: EA · Time: 30 min · Reviewed monthly", list: [
        "Confirm dates, budget and preferences", "Compare 3 flight options and hold the best", "Book a hotel within 2 km of the meeting",
        "Add bookings and references to the calendar", "Send the itinerary 48 hours before travel"] } },
    { name: "Travel Planning Kit", cat: "Admin & Email", price: 12, kind: "sheet", fmt: "Excel · Google Sheets · PDF",
      items: ["Itinerary template", "Packing and booking checklist", "Expense log"],
      demo: { file: "Travel Planning Kit.xlsx", cols: ["Day", "Time", "Plan", "Ref"], rows: [
        ["Mon 14", "07:10", "Flight CPT → JNB", "SA312"], ["Mon 14", "10:00", "Client meeting, Sandton", "—"], ["Mon 14", "15:30", "Hotel check-in", "HX92K"],
        ["Tue 15", "08:30", "Breakfast with the board", "—"], ["Tue 15", "13:00", "Site visit", "—"], ["Tue 15", "17:45", "Flight JNB → CPT", "SA349"]] } },
    { name: "Notion Business Dashboard", cat: "Business & Finance", price: 19, kind: "dashboard", fmt: "Notion",
      items: ["Tasks, clients and content in one place", "Duplicate in one click", "Video walkthrough"],
      demo: { file: "Business HQ", title: "Business HQ",
        cols: [["To do", ["Draft April newsletter", "Order business cards"]], ["Doing", ["Client onboarding", "Q2 content plan"]], ["Done", ["Invoice #0042 sent", "Website launched"]]] } },
    { name: "Client Onboarding Pack", cat: "Business & Finance", price: 16, kind: "doc", fmt: "Canva · PDF · Google Forms",
      items: ["Welcome guide", "Questionnaire", "Onboarding checklist"],
      demo: { title: "Welcome — let's get started!", sub: "Client onboarding guide", check: true, done: 3, list: [
        "Agreement signed", "Questionnaire complete", "Inbox and calendar access shared", "Kick-off call booked", "First invoice paid"] } },
    { name: "Invoice & Quote Templates", cat: "Business & Finance", price: 9, kind: "invoice", fmt: "Excel · Word",
      items: ["Invoice and quote in Excel + Word", "Auto totals and VAT", "Payment terms wording"],
      demo: { no: "0042", to: "Atlantic Keys (Pty) Ltd", lines: [["Executive Support — Professional", "$800.00"], ["Travel research", "$120.00"], ["Monthly report", "$80.00"]],
        sub: "$1,000.00", vat: "$150.00", total: "$1,150.00" } },
    { name: "Income & Expense Tracker", cat: "Business & Finance", price: 12, kind: "sheet", fmt: "Excel · Google Sheets",
      items: ["Monthly and yearly view", "Auto charts", "Tax set-aside calculator"],
      demo: { file: "Income & Expense Tracker.xlsx", cols: ["Month", "Income", "Expenses", "Profit"], rows: [
        ["Jan", "4,200", "1,850", "2,350"], ["Feb", "4,650", "1,920", "2,730"], ["Mar", "5,100", "2,010", "3,090"], ["Apr", "5,480", "2,100", "3,380"]],
        total: ["Total", "19,430", "7,880", "11,550"], chart: [2350, 2730, 3090, 3380] } },
    { name: "Pricing Calculator", cat: "Business & Finance", price: 10, kind: "sheet", fmt: "Excel · Google Sheets",
      items: ["Work out package prices", "USD and ZAR", "Profit per client"],
      demo: { file: "Pricing Calculator.xlsx", cols: ["Input", "Value"], rows: [
        ["Hours per month", "20"], ["Hourly value", "$35"], ["Software & costs", "$60"], ["Profit margin", "20%"], ["Exchange rate", "R16.80"]],
        total: ["Package price", "$912 · R15,322"] } },
    { name: "Weekly Planner", cat: "Planners", price: 6, kind: "planner", fmt: "Printable + fillable PDF",
      items: ["Printable + fillable PDF", "Priorities and habits", "Undated"],
      demo: { week: "14 – 20 April", days: [["Monday", ["Team check-in 9:00", "Send April invoices"]], ["Tuesday", ["Draft newsletter", "Gym 17:30"]], ["Wednesday", ["Client call — Lumière"]]],
        top: ["Launch the shop", "Plan Q2 content", "Book dentist"] } },
    { name: "90-Day Planner", cat: "Planners", price: 12, kind: "goals", fmt: "Printable + fillable PDF",
      items: ["Quarterly goals", "Weekly check-ins", "Review pages"],
      demo: { goals: [["Launch the template shop", 70], ["Sign 5 new clients", 40], ["Post 3× a week", 85]], weeks: 5 } },
    { name: "Digital Daily Planner", cat: "Planners", price: 15, kind: "tablet", fmt: "GoodNotes · Notability",
      items: ["Hyperlinked tabs", "GoodNotes + Notability", "Undated, reusable"],
      demo: { day: "Tuesday", date: "14", plan: [["08:00", "Inbox + priorities"], ["09:30", "Client call"], ["11:00", "Content batch"], ["14:00", "Invoices"], ["16:00", "Plan tomorrow"]],
        todo: ["Reply to Sarah", "Book flights", "Post Reel", "Order stock"], done: 2 } }
  ]
};
