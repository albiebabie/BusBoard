module.exports = class ConsoleDisplay {
    static printNBuses(listOfBusArrivals, n) {
        console.log("***************************************************** \n");
        for (let i = 0; i < Math.min(listOfBusArrivals.length, n); i++) {
            const busArrival = listOfBusArrivals[i];
            console.log(i + 1);
            let busDisplay = busArrival.displayString()
            console.log(busDisplay)
        }
    }
};
