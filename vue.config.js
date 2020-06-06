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
  },
  publicPath: process.env.NODE_ENV === "production" ? "/iu-schedule-gen/" : "/"
};
