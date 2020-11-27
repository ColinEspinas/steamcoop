import config from './config';

export default {
  handler(req, res) {
    res.end('Everything ok! user');

    console.log(config.apiKey);
  }
}