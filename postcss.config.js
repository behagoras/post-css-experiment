module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   grid: true
    // }),

    require('postcss-custom-media')({
      preserve: false
    }),
    require('postcss-preset-env')({
      stage: 1,
      autoprefixer: {
        grid: true
      },
      preserve: false
    }),
    require('postcss-color-hwb'),
    require('postcss-apply')

  ]
}
