/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
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
          border: "#D1D5DB",
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
          border: "#475569",
          card: "#1E293B",
          error: "#F87171",
          success: "#34D399",
        },
        fitness: {
          primary: "#10B981", 
          secondary: "#D1FAE5",  
          textPrimary: "#064E3B", 
          textSecondary: "#6EE7B7", 
          accent: "#34D399",
          background: "#ECFDF5", 
        },

        nutrition: {
          primary: "#F59E0B", 
          secondary: "#FEF3C7", 
          textPrimary: "#78350F", 
          textSecondary: "#FBBF24", 
          accent: "#FCD34D",  
          background: "#FFF7ED", 
        },

        schedule: {
          primary: "#6366F1",
          secondary: "#E0E7FF", // Light Indigo (surface/background)
          textPrimary: "#1E3A8A", // Deep Blue (titles and headers)
          textSecondary: "#A5B4FC", // Soft Blue (subtext)
          accent: "#4F46E5", // Indigo for buttons/CTA
          background: "#EEF2FF", // Soft bluish background
        },
      },
    },
  },
  plugins: [],
};
