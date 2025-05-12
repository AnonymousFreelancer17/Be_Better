/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFFFFF",
          surface: "#EEEEEE",
          primary: "#3B82F6",
          primaryText: "#1F2937",
          secondaryText: "#6B7280",
          accent: "#22C55E",
          brdr: "#E5E7EB",
          card: "#F3F4F6",
          error: "#EF4444",
          success: "#10B981",
        },
        dark: {
          background: "#0F172A",
          surface: "#334155",
          primary: "#3B82F6",
          primaryText: "#F3F4F6",
          secondaryText: "#94A3B8",
          accent: "#4ADE80",
          brdr: "#334155",
          card: "#1E293B",
          error: "#F87171",
          success: "#34D399",
        },
        fitness: {
          primary: "#10B981",        // Emerald Green (active/positive)
          secondary: "#D1FAE5",      // Light Green (surface)
          textPrimary: "#064E3B",    // Dark Green
          textSecondary: "#6EE7B7",  // Mint Green (secondary text)
        },
        nutrition: {
          primary: "#F59E0B",        // Amber (nutritional alert)
          secondary: "#FEF3C7",      // Light Amber (background/surface)
          textPrimary: "#78350F",    // Brownish text
          textSecondary: "#FBBF24",  // Bright yellow (subtext)
        },
        schedule: {
          primary: "#6366F1",        // Indigo (calendar/scheduling)
          secondary: "#E0E7FF",      // Light Indigo
          textPrimary: "#1E3A8A",    // Deep Blue (titles)
          textSecondary: "#A5B4FC",  // Soft Blue (subtext)
        },
      },
    },
  },
  plugins: [],
};

