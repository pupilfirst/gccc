module.exports = {
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "http://apply.gdc.network/",
        permanent: true,
      },
    ];
  },
};
