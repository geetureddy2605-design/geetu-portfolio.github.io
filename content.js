// ============================================================
//  YOUR PORTFOLIO CONTENT  —  this is the ONLY file you need to edit.
//
//  Rules of the road:
//   • Keep the quotes "like this" around every piece of text.
//   • Keep the commas at the end of each line.
//   • If your text contains a double quote, write it as \"  (or use 'single quotes').
//   • To remove an optional section, set it to an empty list:  []
//   • Save the file and refresh index.html to see your changes.
//   • If the page shows a red error box, you probably deleted a quote or comma.
// ============================================================

const content = {
  // ---------- About you ----------
  name: "Geethika Reddy C",
  tagline: "Computer Science student & aspiring software developer", // one line under your name

  // Put your photo in the assets/ folder and put its file name here.
  // Square-ish, about 600px wide, under 1 MB works best.
  photo: "assets/photo.jpg",

  // 1–3 sentences: what you care about and what you're looking for.
  mission:
    "I'm a Computer Science student at Conestoga looking for a co-op or internship where I can learn fast and contribute to real projects. My customer-facing work experience has made me reliable, accurate and calm under pressure, and I bring that same mindset to building software.",

  // ---------- Make it yours ----------
  theme: {
    // Pick a look:
    //   "classic" = clean and friendly (the default)
    //   "techy"   = dark terminal vibes, one tab per section (always dark, always monospace)
    //   "fancy"   = big serif headings, an arched photo, swipeable project cards
    style: "fancy",

    // Pick a preset: "coral", "ocean", "grape", "forest", "sunset", "bubblegum"
    // ...or use any hex color like "#ff6b9d".
    accent: "coral",

    // Pick a font: "modern", "serif", "rounded", "mono"
    font: "rounded",

    // "auto" follows the visitor's device. You can also force "light" or "dark".
    // (The "techy" look is always dark.)
    mode: "auto",
  },

  // ---------- Links (shown as buttons at the top) ----------
  // For email just write the address, e.g. "you@example.com".
  links: [
    { label: "Email", url: "geetureddy2605@gmail.com" },
    // TODO: add these once you have the URLs, then delete this line:
    // { label: "GitHub", url: "https://github.com/your-username" },
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/your-name" },
  ],

  // ---------- Skills (optional — set to [] to hide) ----------
  // TODO: add your programming languages and tools (e.g. "Python", "Git").
  skills: [
    "Customer Service",
    "POS & Cash Handling",
    "Attention to Detail",
    "Teamwork",
    "Time Management",
    "Problem Solving",
  ],

  // ---------- Projects ----------
  // Link to the GitHub repo (a live demo is optional — a repo is enough!).
  // tags are optional.
  // TODO: add your projects here. Hidden until you do.
  projects: [],

  // ---------- Education ----------
  education: [
    {
      school: "Conestoga College",
      degree: "Bachelor of Computer Science",
      years: "In progress",
    },
  ],

  // ---------- Work experience (optional — set to [] to hide) ----------
  experience: [
    {
      role: "Cashier",
      org: "K Mart, Toronto",
      years: "",
      description: "Processed cash, card and fleet-card transactions accurately at the POS, monitored fuel-pump transactions, verified ID for age-restricted sales, balanced the register at shift end, and kept the store stocked and clean.",
    },
    {
      role: "Cashier / Counter Associate",
      org: "Stacked Burger",
      years: "4 months",
      description: "Took orders and processed payments accurately in a fast-paced environment while following food-safety standards.",
    },
    {
      role: "Server",
      org: "Empress of India",
      years: "6 months",
      description: "Welcomed guests, took orders, resolved customer concerns and processed bills accurately in a busy restaurant.",
    },
  ],

  // ---------- Extracurriculars (optional — set to [] to hide) ----------
  extracurriculars: [],
};