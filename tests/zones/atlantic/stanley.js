"use strict";

var helpers = require("../../helpers/helpers");

exports["Atlantic/Stanley"] = {
	"1912" : helpers.makeTestYear("Atlantic/Stanley", [
		["1912-03-12T03:51:23+00:00", "23:59:59", "SMT", 13884 / 60],
		["1912-03-12T03:51:24+00:00", "23:51:24", "-04", 240]
	]),

	"1937" : helpers.makeTestYear("Atlantic/Stanley", [
		["1937-09-26T03:59:59+00:00", "23:59:59", "-04", 240],
		["1937-09-26T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1938" : helpers.makeTestYear("Atlantic/Stanley", [
		["1938-03-20T02:59:59+00:00", "23:59:59", "-03", 180],
		["1938-03-20T03:00:00+00:00", "23:00:00", "-04", 240],
		["1938-09-25T03:59:59+00:00", "23:59:59", "-04", 240],
		["1938-09-25T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1939" : helpers.makeTestYear("Atlantic/Stanley", [
		["1939-03-19T02:59:59+00:00", "23:59:59", "-03", 180],
		["1939-03-19T03:00:00+00:00", "23:00:00", "-04", 240],
		["1939-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1939-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1940" : helpers.makeTestYear("Atlantic/Stanley", [
		["1940-03-24T02:59:59+00:00", "23:59:59", "-03", 180],
		["1940-03-24T03:00:00+00:00", "23:00:00", "-04", 240],
		["1940-09-29T03:59:59+00:00", "23:59:59", "-04", 240],
		["1940-09-29T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1941" : helpers.makeTestYear("Atlantic/Stanley", [
		["1941-03-23T02:59:59+00:00", "23:59:59", "-03", 180],
		["1941-03-23T03:00:00+00:00", "23:00:00", "-04", 240],
		["1941-09-28T03:59:59+00:00", "23:59:59", "-04", 240],
		["1941-09-28T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1942" : helpers.makeTestYear("Atlantic/Stanley", [
		["1942-03-22T02:59:59+00:00", "23:59:59", "-03", 180],
		["1942-03-22T03:00:00+00:00", "23:00:00", "-04", 240],
		["1942-09-27T03:59:59+00:00", "23:59:59", "-04", 240],
		["1942-09-27T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1943" : helpers.makeTestYear("Atlantic/Stanley", [
		["1943-01-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1943-01-01T03:00:00+00:00", "23:00:00", "-04", 240]
	]),

	"1983" : helpers.makeTestYear("Atlantic/Stanley", [
		["1983-05-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1983-05-01T04:00:00+00:00", "01:00:00", "-03", 180],
		["1983-09-25T02:59:59+00:00", "23:59:59", "-03", 180],
		["1983-09-25T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1984" : helpers.makeTestYear("Atlantic/Stanley", [
		["1984-04-29T01:59:59+00:00", "23:59:59", "-02", 120],
		["1984-04-29T02:00:00+00:00", "23:00:00", "-03", 180],
		["1984-09-16T02:59:59+00:00", "23:59:59", "-03", 180],
		["1984-09-16T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1985" : helpers.makeTestYear("Atlantic/Stanley", [
		["1985-04-28T01:59:59+00:00", "23:59:59", "-02", 120],
		["1985-04-28T02:00:00+00:00", "23:00:00", "-03", 180],
		["1985-09-15T02:59:59+00:00", "23:59:59", "-03", 180],
		["1985-09-15T03:00:00+00:00", "00:00:00", "-03", 180]
	]),

	"1986" : helpers.makeTestYear("Atlantic/Stanley", [
		["1986-04-20T02:59:59+00:00", "23:59:59", "-03", 180],
		["1986-04-20T03:00:00+00:00", "23:00:00", "-04", 240],
		["1986-09-14T03:59:59+00:00", "23:59:59", "-04", 240],
		["1986-09-14T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1987" : helpers.makeTestYear("Atlantic/Stanley", [
		["1987-04-19T02:59:59+00:00", "23:59:59", "-03", 180],
		["1987-04-19T03:00:00+00:00", "23:00:00", "-04", 240],
		["1987-09-13T03:59:59+00:00", "23:59:59", "-04", 240],
		["1987-09-13T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1988" : helpers.makeTestYear("Atlantic/Stanley", [
		["1988-04-17T02:59:59+00:00", "23:59:59", "-03", 180],
		["1988-04-17T03:00:00+00:00", "23:00:00", "-04", 240],
		["1988-09-11T03:59:59+00:00", "23:59:59", "-04", 240],
		["1988-09-11T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1989" : helpers.makeTestYear("Atlantic/Stanley", [
		["1989-04-16T02:59:59+00:00", "23:59:59", "-03", 180],
		["1989-04-16T03:00:00+00:00", "23:00:00", "-04", 240],
		["1989-09-10T03:59:59+00:00", "23:59:59", "-04", 240],
		["1989-09-10T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1990" : helpers.makeTestYear("Atlantic/Stanley", [
		["1990-04-22T02:59:59+00:00", "23:59:59", "-03", 180],
		["1990-04-22T03:00:00+00:00", "23:00:00", "-04", 240],
		["1990-09-09T03:59:59+00:00", "23:59:59", "-04", 240],
		["1990-09-09T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1991" : helpers.makeTestYear("Atlantic/Stanley", [
		["1991-04-21T02:59:59+00:00", "23:59:59", "-03", 180],
		["1991-04-21T03:00:00+00:00", "23:00:00", "-04", 240],
		["1991-09-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["1991-09-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1992" : helpers.makeTestYear("Atlantic/Stanley", [
		["1992-04-19T02:59:59+00:00", "23:59:59", "-03", 180],
		["1992-04-19T03:00:00+00:00", "23:00:00", "-04", 240],
		["1992-09-13T03:59:59+00:00", "23:59:59", "-04", 240],
		["1992-09-13T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1993" : helpers.makeTestYear("Atlantic/Stanley", [
		["1993-04-18T02:59:59+00:00", "23:59:59", "-03", 180],
		["1993-04-18T03:00:00+00:00", "23:00:00", "-04", 240],
		["1993-09-12T03:59:59+00:00", "23:59:59", "-04", 240],
		["1993-09-12T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1994" : helpers.makeTestYear("Atlantic/Stanley", [
		["1994-04-17T02:59:59+00:00", "23:59:59", "-03", 180],
		["1994-04-17T03:00:00+00:00", "23:00:00", "-04", 240],
		["1994-09-11T03:59:59+00:00", "23:59:59", "-04", 240],
		["1994-09-11T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1995" : helpers.makeTestYear("Atlantic/Stanley", [
		["1995-04-16T02:59:59+00:00", "23:59:59", "-03", 180],
		["1995-04-16T03:00:00+00:00", "23:00:00", "-04", 240],
		["1995-09-10T03:59:59+00:00", "23:59:59", "-04", 240],
		["1995-09-10T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1996" : helpers.makeTestYear("Atlantic/Stanley", [
		["1996-04-21T02:59:59+00:00", "23:59:59", "-03", 180],
		["1996-04-21T03:00:00+00:00", "23:00:00", "-04", 240],
		["1996-09-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["1996-09-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1997" : helpers.makeTestYear("Atlantic/Stanley", [
		["1997-04-20T02:59:59+00:00", "23:59:59", "-03", 180],
		["1997-04-20T03:00:00+00:00", "23:00:00", "-04", 240],
		["1997-09-14T03:59:59+00:00", "23:59:59", "-04", 240],
		["1997-09-14T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1998" : helpers.makeTestYear("Atlantic/Stanley", [
		["1998-04-19T02:59:59+00:00", "23:59:59", "-03", 180],
		["1998-04-19T03:00:00+00:00", "23:00:00", "-04", 240],
		["1998-09-13T03:59:59+00:00", "23:59:59", "-04", 240],
		["1998-09-13T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1999" : helpers.makeTestYear("Atlantic/Stanley", [
		["1999-04-18T02:59:59+00:00", "23:59:59", "-03", 180],
		["1999-04-18T03:00:00+00:00", "23:00:00", "-04", 240],
		["1999-09-12T03:59:59+00:00", "23:59:59", "-04", 240],
		["1999-09-12T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2000" : helpers.makeTestYear("Atlantic/Stanley", [
		["2000-04-16T02:59:59+00:00", "23:59:59", "-03", 180],
		["2000-04-16T03:00:00+00:00", "23:00:00", "-04", 240],
		["2000-09-10T03:59:59+00:00", "23:59:59", "-04", 240],
		["2000-09-10T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2001" : helpers.makeTestYear("Atlantic/Stanley", [
		["2001-04-15T04:59:59+00:00", "01:59:59", "-03", 180],
		["2001-04-15T05:00:00+00:00", "01:00:00", "-04", 240],
		["2001-09-02T05:59:59+00:00", "01:59:59", "-04", 240],
		["2001-09-02T06:00:00+00:00", "03:00:00", "-03", 180]
	]),

	"2002" : helpers.makeTestYear("Atlantic/Stanley", [
		["2002-04-21T04:59:59+00:00", "01:59:59", "-03", 180],
		["2002-04-21T05:00:00+00:00", "01:00:00", "-04", 240],
		["2002-09-01T05:59:59+00:00", "01:59:59", "-04", 240],
		["2002-09-01T06:00:00+00:00", "03:00:00", "-03", 180]
	]),

	"2003" : helpers.makeTestYear("Atlantic/Stanley", [
		["2003-04-20T04:59:59+00:00", "01:59:59", "-03", 180],
		["2003-04-20T05:00:00+00:00", "01:00:00", "-04", 240],
		["2003-09-07T05:59:59+00:00", "01:59:59", "-04", 240],
		["2003-09-07T06:00:00+00:00", "03:00:00", "-03", 180]
	]),

	"2004" : helpers.makeTestYear("Atlantic/Stanley", [
		["2004-04-18T04:59:59+00:00", "01:59:59", "-03", 180],
		["2004-04-18T05:00:00+00:00", "01:00:00", "-04", 240],
		["2004-09-05T05:59:59+00:00", "01:59:59", "-04", 240],
		["2004-09-05T06:00:00+00:00", "03:00:00", "-03", 180]
	]),

	"2005" : helpers.makeTestYear("Atlantic/Stanley", [
		["2005-04-17T04:59:59+00:00", "01:59:59", "-03", 180],
		["2005-04-17T05:00:00+00:00", "01:00:00", "-04", 240],
		["2005-09-04T05:59:59+00:00", "01:59:59", "-04", 240],
		["2005-09-04T06:00:00+00:00", "03:00:00", "-03", 180]
	]),

	"2006" : helpers.makeTestYear("Atlantic/Stanley", [
		["2006-04-16T04:59:59+00:00", "01:59:59", "-03", 180],
		["2006-04-16T05:00:00+00:00", "01:00:00", "-04", 240],
		["2006-09-03T05:59:59+00:00", "01:59:59", "-04", 240],
		["2006-09-03T06:00:00+00:00", "03:00:00", "-03", 180]
	]),

	"2007" : helpers.makeTestYear("Atlantic/Stanley", [
		["2007-04-15T04:59:59+00:00", "01:59:59", "-03", 180],
		["2007-04-15T05:00:00+00:00", "01:00:00", "-04", 240],
		["2007-09-02T05:59:59+00:00", "01:59:59", "-04", 240],
		["2007-09-02T06:00:00+00:00", "03:00:00", "-03", 180]
	]),

	"2008" : helpers.makeTestYear("Atlantic/Stanley", [
		["2008-04-20T04:59:59+00:00", "01:59:59", "-03", 180],
		["2008-04-20T05:00:00+00:00", "01:00:00", "-04", 240],
		["2008-09-07T05:59:59+00:00", "01:59:59", "-04", 240],
		["2008-09-07T06:00:00+00:00", "03:00:00", "-03", 180]
	]),

	"2009" : helpers.makeTestYear("Atlantic/Stanley", [
		["2009-04-19T04:59:59+00:00", "01:59:59", "-03", 180],
		["2009-04-19T05:00:00+00:00", "01:00:00", "-04", 240],
		["2009-09-06T05:59:59+00:00", "01:59:59", "-04", 240],
		["2009-09-06T06:00:00+00:00", "03:00:00", "-03", 180]
	]),

	"2010" : helpers.makeTestYear("Atlantic/Stanley", [
		["2010-04-18T04:59:59+00:00", "01:59:59", "-03", 180],
		["2010-04-18T05:00:00+00:00", "01:00:00", "-04", 240],
		["2010-09-05T05:59:59+00:00", "01:59:59", "-04", 240],
		["2010-09-05T06:00:00+00:00", "03:00:00", "-03", 180]
	])
};