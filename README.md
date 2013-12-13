# League of Legends API Wrapper

A quick Node wrapper for their recent [API](https://developer.riotgames.com)

This is still very much a work in progress. Input is appreciated

## Installation

Installing should be as simple as `npm install`

This is my first npm package though, so anything could go wrong. If there's any issues, don't hesitate to contact me.

## Example usage:

    var api = require('lol-api');
    api.configure('YOUR KEY HERE');

    var summonerId;
    api.summonerByName('calmingchaos', 'na', function(results){
	    summonerId = results.id;

	    api.summonerRunes(summonerId, 'na', function(results){
	    console.log(results);
	    });

    });

For more information on the calls, check out the example folder. It's being updated as I go along.

Please note that the API itself doesn't play well with spaces right now. Looking for summoners with spaces in their names (i.e: Sir Desch), will produce a 500 error. percent encoding doesn't seem to work either. We'll have to wait on Riot to see how they want spaces encoded.

##License: 
(The MIT License)

Copyright (c) 2013 Stuart Macgregor

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
