module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  module:{
    rules:[
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: "../components/HistorySection/asset/resource",
      },
    ],
  },
};
