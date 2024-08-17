import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      blue: {
        100: '#65AFFB',
        200: '#2588ED',
        300: '#167FE9',
        400: '#0D7CE7',
        500: '#0475E6',
        600: '#036FDA',
        700: '#013263',
        800: '#013263',
        900: '#013263',
      },
      green: {
        100: '#6DF5A4',
        200: '#2AF37A',
        300: '#14F370',
        400: '#10F26B',
        500: '#04F266',
        600: '#03F061',
        700: '#0BC155',
        800: '#15A950',
        900: '#286340',
      },
      red: {
        100: '#FFA09A',
        200: '#FB796F',
        300: '#F85C52',
        400: '#F21404',
        500: '#F21404',
        600: '#860900',
        700: '#860900',
        800: '#860900',
        900: '#630902',
      },
      yellow: {
        100: '#F3D337',
        200: '#F3D337',
        300: '#F2CF23',
        400: '#F2CD11',
        500: '#F0C901',
        600: '#D9B500',
        700: '#C1A200',
        800: '#A98D00',
        900: '#6E5B00',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712'
      },
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617'
      }
    }
  },
  plugins: [],
};export default config;
