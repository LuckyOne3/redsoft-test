module.exports = {
  transpileDependencies: ['vuex-persist'],
  css: {
    loaderOptions: {
      scss: { // the change was made here (match the option name with file extension)
        prependData: `
            @import "@/assets/scss/clearCss.scss";
            `,
      },
    },
  },
};
