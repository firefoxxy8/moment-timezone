"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Phnom_Penh"] = {
	"1906" : helpers.makeTestYear("Asia/Phnom_Penh", [
		["1906-06-08T17:00:19+00:00", "23:59:59", "LMT", -25180 / 60],
		["1906-06-08T17:00:20+00:00", "00:06:40", "SMT", -25580 / 60]
	]),

	"1911" : helpers.makeTestYear("Asia/Phnom_Penh", [
		["1911-03-10T16:54:39+00:00", "00:00:59", "SMT", -25580 / 60],
		["1911-03-10T16:54:40+00:00", "23:54:40", "ICT", -420]
	]),

	"1912" : helpers.makeTestYear("Asia/Phnom_Penh", [
		["1912-04-30T16:59:59+00:00", "23:59:59", "ICT", -420],
		["1912-04-30T17:00:00+00:00", "01:00:00", "ICT", -480]
	]),

	"1931" : helpers.makeTestYear("Asia/Phnom_Penh", [
		["1931-04-30T15:59:59+00:00", "23:59:59", "ICT", -480],
		["1931-04-30T16:00:00+00:00", "23:00:00", "ICT", -420]
	])
};