const request = require("request");
const PostCode = require("./postcode");

class postcodesRequest {
    static getPostcode(postcode, callback) {
        const url = "http://api.postcodes.io/postcodes/" + postcode;
        console.log(url);

        return request(url, function(error, response, body) {
            const postcodeDetails = JSON.parse(body);
            const postcodeLongLat = new PostCode(postcodeDetails.result.longitude, postcodeDetails.result.latitude);
            // console.log(postcodeDetails);
            return callback(postcodeLongLat);
        });
    }
}

module.exports = postcodesRequest;
