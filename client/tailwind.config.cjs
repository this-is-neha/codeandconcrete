// tailwind.config.cjs
// Theme colours are CSS variables (see src/index.css) so the whole site can flip light/dark.
const v = (name) => ({ opacityValue }) =>
  opacityValue === undefined ? `rgb(var(${name}))` : `rgb(var(${name}) / ${opacityValue})`;

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      opacity: { 15: '0.15', 35: '0.35', 65: '0.65', 85: '0.85' },
      colors: {
        ink: v('--ink'),
        steel: v('--steel'),
        slab: v('--slab'),
        concrete: v('--concrete'),
        bone: v('--bone'),
        amber: { DEFAULT: v('--amber'), dark: '#d98d0d' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
