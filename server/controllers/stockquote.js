'use strict';

var mongoose  = require( 'mongoose' );
var User      = mongoose.model( 'User' );
var WatchlistItems = mongoose.model( 'WatchlistItems' );
var Promise   = require( 'bluebird' );

var config    = require( '../config/config.js' );
var validator = require( 'validator' );
var _ = require('lodash');
var util = require('util');
var yahooFinance = require('yahoo-finance');;

exports.getQuote = function( ticker )
{
	var FIELDS = _.flatten([
		// // Pricing
		// ['a', 'b', 'b2', 'b3', 'p', 'o'],
		// // Dividends
		// ['y', 'd', 'r1', 'q'],
		// // Date
		// ['c1', 'c', 'c6', 'k2', 'p2', 'd1', 'd2', 't1'],
		// // Averages
		// ['c8', 'c3', 'g', 'h', 'k1', 'l', 'l1', 't8', 'm5', 'm6', 'm7', 'm8', 'm3', 'm4'],
		// // Misc
		// ['w1', 'w4', 'p1', 'm', 'm2', 'g1', 'g3', 'g4', 'g5', 'g6'],
		// // 52 Week Pricing
		// ['k', 'j', 'j5', 'k4', 'j6', 'k5', 'w'],
		// // System Info
		// ['i', 'j1', 'j3', 'f6', 'n', 'n4', 's1', 'x', 'j2'],
		// // Volume
		// ['v', 'a5', 'b6', 'k3', 'a2'],
		// // Ratio
		// ['e', 'e7', 'e8', 'e9', 'b4', 'j4', 'p5', 'p6', 'r', 'r2', 'r5', 'r6', 'r7', 's7'],
		// // Misc
		// ['t7', 't6', 'i5', 'l2', 'l3', 'v1', 'v7', 's6', 'e1']
		['l1']
	]);

	var SYMBOLS = [
	];

	function setTickerPrice(element, index, array) {
	  SYMBOLS.push(element.ticker);
	}

	// Notice that index 2 is skipped since there is no item at
	// that position in the array.
	watchlistItems.forEach(setTickerPrice);

	yahooFinance.snapshot({
	  fields: FIELDS,
	  symbols: SYMBOLS
	}).then(function (result) {
	  _.each(result, function (snapshot, symbol) {
	    // console.log(util.format('=== %s ===', symbol).cyan);
	    // console.log(snapshot);
	    resolve( watchlistItems );
	  });
	});
}


