request = require 'request'

config = 
  key: null
  region: 'na'

exports.configure = (key) ->
  config.key = key;

exports.setRegion = (region) ->
  config.region = region

exports.champion = (region, callback) ->
  url = "/api/lol/" + region;
  query url, null, callback

exports.league = (summoner_id, region, callback) ->
  url = "/api/" + region +  "/v2.4/league/by-summoner/" + summoner_id;
  query url, null, callback

exports.game = (summoner_id, region, callback)->
  url = "/api/lol/" + region + "/v1.3/game/by-summoner/" + summoner_id + "/recent";
  query url, null, callback

exports.statsSummary = (summoner_id, region, callback)->
  url = "/api/lol/" + region + "/v1.3/stats/by-summoner/" + summoner_id + "/summary";
  query url, 'season=SEASON3', callback

exports.statsRanked = (summoner_id, region, callback)->
  url = "/api/lol/" + region + "/v1.3/stats/by-summoner/" + summoner_id + "/ranked";
  query url, null, callback

exports.summonerMasteries = (summoner_id, region, callback)->
  url = "/api/lol/" + region + "/v1.4/summoner/" + summoner_id + "/masteries";
  query url, null, callback

exports.summonerRunes = (summoner_id, region, callback)->
  url = "/api/lol/" + region + "/v1.4/summoner/" + summoner_id + "/runes";
  query url, null, callback

exports.summonerByName = (summoner_name, region, callback)->
  url = "/api/lol/" + region + "/v1.4/summoner/by-name/" + summoner_name;
  query url, null, callback

exports.summonerByID = (summoner_id, region, callback)->
  url = "/api/lol/" + region + "/v1.4/summoner/" + summoner_id;
  query url, null, callback

#this needs work. a string for summoners just isn't good. Should be an array, and then parsed from there.
exports.summoners = (summoners, region, callback)->
  url = "/api/lol/" + region + "/v1.4/summoner/" + summoner_id + "/name";
  query url, null, callback

exports.team = (summoner_id, region, callback)->
  url = "/api/" + region + "/v2.3/team/by-summoner/" + summoner_id;
  query url, null, callback

BASE_REGION = "na"
BASE_URL = "http://#{BASE_REGION}.api.pvp.net"
query = (url, params, callback) ->
  if params == null
    path = "#{BASE_URL}#{url}?api_key=#{config.key}"
    if params
      path += "&#{params}"
    request.get path, (error, response, body) ->
      if (!error and response.statusCode == 200)
        callback JSON.parse(body)
