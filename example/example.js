var api = require('../lib/lolapi');
api.configure('KEY HERE');

var summonerId;
api.summonerByName('calmingchaos', 'na', function(nameResults){
	console.log(nameResults);
	summonerId = nameResults.id;
	console.log("summoner ID: " + summonerId);

	api.summonerRunes(summonerId, 'na', function(runeResults){
	console.log(runeResults);
	});

});