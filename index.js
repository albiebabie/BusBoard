const readlineSync = require("readline-sync");
const TFLRequest = require("./TFLRequests");
const consoleDisplay = require("./consoleDisplay");
const Bus = require("./bus");
const postcodesRequests = require("./postcodesRequest");

// Your program should ask the user for a stop code,...
//  and print a list of the next five buses at that stop code,
// with their routes, destinations, and the
// time until they arrive in minutes.
const busStopCode = "490008660N";
// let stopCode = readlineSync.question("Please input a stop code: ");
// console.log("You have entered bus stop code: " + stopCode);

let postcode = readlineSync.prompt("Please enter your postcode: ");
postcodesRequests.getPostcode(postcode, postcodeDetails => {
    let radius = 500;
    TFLRequest.getBusStops(postcodeDetails, radius, busStops => {
        console.log(busStops.length + " bus stops found within " + radius + " metres of: " + postcode);
        console.log("Top two results:\n");
        busStops.slice(0, 2).forEach(busStop => {
            console.log("Name: " + busStop.commonName);
            console.log("Stop letter: " + busStop.stopLetter);
            busStop.additionalProperties.forEach(prop => {
                if (prop.key === "Towards") {
                    console.log("Towards: " + prop.value);
                }
            });
            console.log("");
        });
    });
});

// TFLRequest.getBusArrivalsForBusStop(busStopCode, busArrivals => {
//     const listOfBuses = Bus.getBusObjectsFromBusArrivals(busArrivals);
//     consoleDisplay.printNBuses(listOfBuses, 5);
// });
