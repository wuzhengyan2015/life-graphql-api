const { RESTDataSource } = require('apollo-datasource-rest');

class WeatherAPI extends RESTDataSource {
  baseURL = 'https://gwgp-h4bqkmub7dg.n.bdcloudapi.com';

  willSendRequest(request) {
    request.headers.set('Content-Type', 'application/json;charset=UTF-8');
    request.headers.set('X-Bce-Signature', 'AppCode/31eeac4188064978881bf7dd7c37ea35');
  }

  getWeather(city) {
    return this.get(`/day?city=${city}`)
  }
}

module.exports = WeatherAPI;
