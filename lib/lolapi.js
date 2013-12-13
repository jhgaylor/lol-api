var config = require('./config');
var request = require('request');

exports.configure = function(key) {
	config.key = key;
};

exports.champion = function(region, callback){
	var url = "/api/lol/" + region;
	query(url, null, callback);
};

exports.league = function(summoner_id, region, callback){
	var url = "/api/" + region +  "/v2.1/league/by-summoner/" + summoner_id;
	query(url, null, callback);
};

exports.game = function(summoner_id, region, callback){
	var url = "/api/lol/" + region + "/v1.1/game/by-summoner/" + summoner_id + "/recent";
	query(url, null, callback);
};

exports.statsSummary = function(summoner_id, region, callback){
	var url = "/api/lol/" + region + "/v1.1/stats/by-summoner/" + summoner_id + "/summary";
	query(url, 'season=SEASON3', callback);
};

exports.statsRanked = function(summoner_id, region, callback){
	var url = "/api/lol/" + region + "/v1.1/stats/by-summoner/" + summoner_id + "/ranked";
	query (url, null, callback);
};

exports.summonerMasteries = function(summoner_id, region, callback){
	var url = "/api/lol/" + region + "/v1.1/summoner/" + summoner_id + "/masteries";
	query (url, null, callback);
};

exports.summonerRunes = function(summoner_id, region, callback){
	var url = "/api/lol/" + region + "/v1.1/summoner/" + summoner_id + "/runes";
	query (url, null, callback);
};

exports.summonerByName = function(summoner_name, region, callback){
	var url = "/api/lol/" + region + "/v1.1/summoner/by-name/" + summoner_name;
	query (url, null, callback);
};

exports.summonerByID = function(summoner_id, region, callback){
	var url = "/api/lol/" + region + "/v1.1/summoner/" + summoner_id;
	query (url, null, callback);
};
//this needs work. a string for summoners just isn't good. Should be an array, and then parsed from there.
exports.summoners = function(summoners, region, callback){
	var url = "/api/lol/" + region + "/v1.1/summoner/" + summoner_id + "/name";
	query (url, null, callback);
};

exports.team = function(summoner_id, region, callback){
	var url = "/api/" + region + "/v2.1/team/by-summoner/" + summoner_id;
	query(url, null, callback);
};

function query(url, params, callback){
	if (params == null) {
		var path = "http://prod.api.pvp.net" + url + "?api_key=" + config.key;
		request.get(path, function (error, response, body) {
  			if (!error && response.statusCode == 200) {
    			callback(JSON.parse(body));
  			}

		});
		
		
	} else {
		var path ="http://prod.api.pvp.net" + url + "?" + params + "&api_key=" + config.api_key;
		request.get(path, function (error, response, body) {
  			if (!error && response.statusCode == 200) {
    			callback(JSON.parse(body));
  			}
		});
	}
}