/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#ECEBEC',
          dark: '#111111',
          muted: '#555555',
          silver: '#8E8E93',
          glow: 'rgba(17, 17, 17, 0.05)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-glow': 'radial-gradient(circle at 50% 50%, rgba(17, 17, 17, 0.03) 0%, transparent 80%)',
      },
      boxShadow: {
        'premium': '0 8px 30px rgba(0, 0, 0, 0.03)',
        'premium-hover': '0 20px 40px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
