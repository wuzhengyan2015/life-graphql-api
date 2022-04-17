const resolvers = {
  Query: {
    weather: async (_, args, { dataSources }) => {
      const { date, city, wea } = await dataSources.weatherAPI.getWeather(args.city)
      return {
        date,
        city,
        wea
      }
    },
  },
};

module.exports = resolvers;
