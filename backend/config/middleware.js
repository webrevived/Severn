module.exports = ({ env }) => ({
    settings: {
      cache: {
        enabled: true,
        clearRelatedCache: true,
        withKoaContext: true,
        models: ["products", "category", "prouct-reviews", "severn-reviews"],
      },
    },
  });