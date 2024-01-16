module.exports = {
   compiler: {
    styledComponents: true,
    },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/CadAcesso',
        permanent: true,
      },
    ];
  },
};
