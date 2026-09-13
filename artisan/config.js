/*
 * ===========================================
 * EASY CUSTOMIZATION - EDIT THIS FILE ONLY
 * ===========================================
 * 
 * This is the ONLY file you need to edit to customize your storefront.
 * Change the theme, business name, logo, services, and about page content below.
 * 
 * THEME OPTIONS: "cyber" | "luxe" | "artisan"
 * - cyber: Dark theme with blue accents (tech/modern)
 * - luxe: Light theme with gold accents (elegant/premium)
 * - artisan: Light theme with orange accents (warm/craft)
 * 
 * NICHE OPTIONS: "services" | "food"
 * - services: For booking-based businesses (salon, spa, services)
 * - food: For ordering-based businesses (restaurant, cafe, food delivery)
 */

/* ---------- THEME SELECTION ---------- */
const THEME = "artisan"; // Change this to "cyber", "luxe", or "artisan"

/* ---------- NICHE SELECTION ---------- */
const NICHE = "services"; // Change this to "services" or "food"

/* ---------- BUSINESS INFO ---------- */
const BUSINESS = {
  name: "Luxury Spa & Salon",                    // Your business name
  tagline: "Premium beauty & wellness services", // Tagline/slogan
  logo: "",                              // Logo image URL (leave empty for text initials)
  status: "Find us",                      // Badge text (shown next to map icon)
  mapLink: "https://maps.google.com/", // Google Maps link (click on map icon)
  pageTitle: NICHE === "food"
    ? "Luxury Spa & Salon"  // Food niche page title
    : "Luxury Spa & Salon", // Services niche page title for SEO
  description: NICHE === "food"
    ? "Browse the menu, see the total, then send your order to us on WhatsApp." // Food niche description
    : "Pick your services, see the total, then send the booking to us on WhatsApp.", // Services niche description
  shareImage: "",                        // Social media share image URL
};

/* ---------- WHATSAPP SETTINGS ---------- */
const WHATSAPP = {
  phone: "60102697127",                  // Your WhatsApp number (with country code, no +) - Fallback if no branches
  greeting: NICHE === "food"
    ? "Hi {business_name}! I'd like to order:" // Food niche greeting
    : "Hi {business_name}! I'd like to book:", // Services niche greeting ({business_name} will be replaced automatically with business name)
};

/* ---------- BRANCHES ---------- */
const USE_BRANCHES = true; // Set to "true" to enable branch selection popup, "false" to use default WhatsApp number
const BRANCHES = [
  { id: "branch-1", name: "Example Branch 1", phone: "60123456789" },
  { id: "branch-2", name: "Example Branch 2", phone: "60198765432" },
  { id: "branch-3", name: "Example Branch 3", phone: "60112233445" },
];

/* ---------- BUTTON LABELS ---------- */
// Labels change automatically based on niche selection
const LABELS = NICHE === "food" 
  ? {
      cta: "Order on WhatsApp",          // Main call-to-action button text (food niche)
      emptyHint: "Tap a service to start your ordering", // Hint when no services selected (food niche)
      reviewsCta: "Ask us on WhatsApp",  // Call-to-action on reviews page
    }
  : {
      cta: "Book on WhatsApp",          // Main call-to-action button text (services niche)
      emptyHint: "Tap a service to start your booking.", // Hint when no services selected (services niche)
      reviewsCta: "Ask us on WhatsApp",  // Call-to-action on reviews page
    };

/* ---------- CURRENCY SETTINGS ---------- */
const CURRENCY = {
  symbol: "$",                           // Currency symbol (RM, $, €, etc.)
  locale: "en-US",                       // Locale for formatting (en-MY, en-US, etc.)
  decimals: 2,                           // Decimal places for prices
};

/* ---------- FEES & MINIMUM ORDER ---------- */
const FEES = [];                          // Additional fees: [{ label: "Service Fee", amount: 5 }]
const MINIMUM_ORDER = 0;                  // Minimum order amount (0 for no minimum)

/* ---------- SERVICES / CATEGORIES ---------- */
const CATEGORIES = [
  {
    id: "category-1",
    label: "Hair Services",
    items: [
      { id: "item-1-1", name: "Cut & Style", desc: "Consultation, wash, blow dry", price: 65 },
      { id: "item-1-2", name: "Root Touch-Up", desc: "Single colour, up to 3cm", price: 130 },
      { id: "item-1-3", name: "Balayage", desc: "Hand-painted, includes toner", price: 380 },
    ],
  },
  {
    id: "category-2",
    label: "Nail Services",
    items: [
      { id: "item-2-1", name: "Gel Manicure", desc: "Shape, cuticle care, one colour", price: 70 },
      { id: "item-2-2", name: "Gel Pedicure", desc: "Includes callus treatment", price: 90 },
      { id: "item-2-3", name: "Nail Art (per nail)", desc: "Chrome, French or freehand", price: 8 },
    ],
  },
  {
    id: "category-3",
    label: "Lashes & Brows",
    items: [
      { id: "item-3-1", name: "Classic Lash Set", desc: "One extension per lash", price: 180 },
      { id: "item-3-2", name: "Volume Lash Set", desc: "Fuller, 3D–5D fans", price: 250 },
      { id: "item-3-3", name: "Brow Lamination", desc: "Includes shaping and tint", price: 120 },
    ],
  },
  {
    id: "category-4",
    label: "Facial Treatments",
    items: [
      { id: "item-4-1", name: "Basic Facial", desc: "Cleansing, exfoliation, massage", price: 95 },
      { id: "item-4-2", name: "Anti-Aging Facial", desc: "Deep hydration, anti-aging serums", price: 150 },
      { id: "item-4-3", name: "Acne Treatment", desc: "Deep cleansing, extraction", price: 120 },
    ],
  },
  {
    id: "category-5",
    label: "Massage Therapy",
    items: [
      { id: "item-5-1", name: "Swedish Massage", desc: "Relaxing full body massage", price: 110 },
      { id: "item-5-2", name: "Deep Tissue", desc: "Intensive muscle work", price: 140 },
      { id: "item-5-3", name: "Hot Stone", desc: "Heated stones + massage", price: 160 },
    ],
  },
];

/* ---------- SOCIAL MEDIA LINKS ---------- */
const SOCIALS = [
  { label: "Instagram", url: "https://instagram.com/" },
  { label: "TikTok", url: "https://tiktok.com/" },
];

/* ===========================================
 * DO NOT EDIT BELOW THIS LINE
 * =========================================== */

// Build the configuration object used by the app
const CONFIG = {
  theme: THEME,
  niche: NICHE,
  business: BUSINESS,
  whatsapp: WHATSAPP,
  labels: LABELS,
  currency: CURRENCY,
  fees: FEES,
  minimumOrder: MINIMUM_ORDER,
  categories: CATEGORIES,
  socials: SOCIALS,
  useBranches: USE_BRANCHES,
  branches: BRANCHES,
};
