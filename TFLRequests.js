const request = require("request");
const moment = require("moment");

class TFLRequest {
    static getBusArrivalsForBusStop(busStopCode, callback) {
        const url =
            "https://api.tfl.gov.uk/StopPoint/" +
            busStopCode +
            "/Arrivals?app_id=e6d22ef6&app_key=d52e914b030019b478891bd9a6a964f6";
        return request(url, function(error, response, body) {
            const listOfBusArrivals = JSON.parse(body);
            listOfBusArrivals.sort(function(a, b) {
                return moment(b.expectedArrival).isBefore(a.expectedArrival);
            });
            return callback(listOfBusArrivals);
        });
    }
    static getBusStops(postcode, radius, callback) {
        const url =
            "https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanPublicBusCoachTram&lat=" +
            postcode.latitude +
            "&lon=" +
            postcode.longitude +
            "&radius=" +
            radius +
            "&app_id=07b2b2b4&app_key=39b80112283c09159030675d88b103a8";
        return request(url, function(error, response, body) {
            const listOfBusStops = JSON.parse(body);
            callback(listOfBusStops.stopPoints);
        });
    }

    static getRoutesForBus(busLineID) {
        const url = "https://api.tfl.gov.uk/Line/" + busLineID + "/Route";
        request(url, function(error, response, body) {
            const busRoutesMaybe = JSON.parse(body);
            console.log(busRoutesMaybe);
        });
    }
}
module.exports = TFLRequest;
