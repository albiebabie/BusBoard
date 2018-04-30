module.exports = class Bus {
    constructor(lineName, destinationName, timeToStation) {
        this.lineName = lineName;
        this.destinationName = destinationName;
        this.timeToStation = timeToStation;
    }

    displayString() {
        return ("_____________________________________\n" +
            "The next bus to arrive at this stop will be the " +
            this.lineName +
            " towards " +
            this.destinationName +
            ". Arriving in " +
            (this.timeToStation / 60).toFixed(0) +
            " minutes.\n\n");
    }

    static getBusObjectsFromBusArrivals(busArrivals) {
        let listOfBuses = [];
        busArrivals.forEach(bus => {
            listOfBuses.push(new Bus(bus["lineName"], bus["destinationName"], bus["timeToStation"]));
        });
        return listOfBuses;
    }
};
