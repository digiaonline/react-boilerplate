module.exports = () => ({
  plugins: [
    require('postcss-import')(),
    require('postcss-units')(),
    require('postcss-cssnext')(),
  ],
})
