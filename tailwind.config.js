module.exports = {
  content: ['./src/**/*.{js,jsxits,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        munsell: '#009DAE',
        sky: '#71DFE7',
        celeste: '#C2FFF9',
        minion: '#FFE652',
        bulgar:'#8B1515',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        schedule: 'repeat(2, minmax(200px, 1fr))',

        // Complex site-specific column configuration
        list: 'repeat(4, minmax(200px, 1fr))',
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
    plugins: [],
  },
};
