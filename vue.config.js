module.exports = {
  outputDir: "docs",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/views/styles/_variables";
        `
      }
    }
  }
};
