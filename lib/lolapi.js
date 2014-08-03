(function() {
  var BASE_REGION, BASE_URL, config, query, request;

  request = require('request');

  config = {
    key: null,
    region: 'na'
  };

  exports.configure = function(key) {
    return config.key = key;
  };

  exports.setRegion = function(region) {
    return config.region = region;
  };

  exports.champion = function(region, callback) {
    var url;
    url = "/api/lol/" + region;
    return query(url, null, callback);
  };

  exports.league = function(summoner_id, region, callback) {
    var url;
    url = "/api/" + region + "/v2.4/league/by-summoner/" + summoner_id;
    return query(url, null, callback);
  };

  exports.game = function(summoner_id, region, callback) {
    var url;
    url = "/api/lol/" + region + "/v1.3/game/by-summoner/" + summoner_id + "/recent";
    return query(url, null, callback);
  };

  exports.statsSummary = function(summoner_id, region, callback) {
    var url;
    url = "/api/lol/" + region + "/v1.3/stats/by-summoner/" + summoner_id + "/summary";
    return query(url, 'season=SEASON4', callback);
  };

  exports.statsRanked = function(summoner_id, region, callback) {
    var url;
    url = "/api/lol/" + region + "/v1.3/stats/by-summoner/" + summoner_id + "/ranked";
    return query(url, null, callback);
  };

  exports.summonerMasteries = function(summoner_id, region, callback) {
    var url;
    url = "/api/lol/" + region + "/v1.4/summoner/" + summoner_id + "/masteries";
    return query(url, null, callback);
  };

  exports.summonerRunes = function(summoner_id, region, callback) {
    var url;
    url = "/api/lol/" + region + "/v1.4/summoner/" + summoner_id + "/runes";
    return query(url, null, callback);
  };

  exports.summonerByName = function(summoner_name, region, callback) {
    var url;
    url = "/api/lol/" + region + "/v1.4/summoner/by-name/" + summoner_name;
    return query(url, null, callback);
  };

  exports.summonerByID = function(summoner_id, region, callback) {
    var url;
    url = "/api/lol/" + region + "/v1.4/summoner/" + summoner_id;
    return query(url, null, callback);
  };

  exports.summoners = function(summoners, region, callback) {
    var url;
    url = "/api/lol/" + region + "/v1.4/summoner/" + summoner_id + "/name";
    return query(url, null, callback);
  };

  exports.team = function(summoner_id, region, callback) {
    var url;
    url = "/api/" + region + "/v2.3/team/by-summoner/" + summoner_id;
    return query(url, null, callback);
  };

  BASE_REGION = "na";

  BASE_URL = "http://" + BASE_REGION + ".api.pvp.net";

  query = function(url, params, callback) {
    var path;
    if (params === null) {
      path = "" + BASE_URL + url + "?api_key=" + config.key;
      if (params) {
        path += "&" + params;
      }
      return request.get(path, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          return callback(JSON.parse(body));
        }
      });
    }
  };

}).call(this);
