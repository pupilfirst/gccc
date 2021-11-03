module.exports = {
  async redirects() {
    return [
      {
        source: '/apply',
        destination: 'http://apply.pupilfirst.org/',
        permanent: true,
      },
    ]
  },
}
