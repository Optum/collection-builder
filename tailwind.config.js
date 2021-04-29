const oe_colors = {
  'tumo-teal': '#367796',
  primary: 'var(--color-primary)'
};

module.exports = {
  prefix: 'oe-',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./src/components/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...oe_colors
      },
      height: {
        'builder': '38rem'
      },
      outline: {
        'white': ['1.5px dotted #ffff', '3px'],
        'black': ['1.5px dotted black', '3px'],
        'add-page': ['1.5px dotted black', '5px']
      }
    },
  },
  variants: {
    extend: {
      outline: ['focus-visible'],
    }
  },
  plugins: []
};
