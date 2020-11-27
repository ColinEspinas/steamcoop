import config from './config';

export default {
  handler(req, res) {

    console.log(req)
    res.end('Everything ok! game');

    console.log(config.apiKey);
  }
}