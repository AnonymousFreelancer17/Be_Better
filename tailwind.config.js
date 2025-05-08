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
          border: "#E5E7EB",
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
          border: "#334155",
          card: "#1E293B",
          error: "#F87171",
          success: "#34D399",
        },
      },
    },
  },
  plugins: [],
};
