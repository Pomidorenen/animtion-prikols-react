
const {OpenWeatherAPI} = require("openweather-api-node");
const key = "need key";

const weatherController = {
    getWeather: async (req, res) => {
        const {lat,lon} = req.query;
        const weather = new OpenWeatherAPI({
            key,
            coordinates:{lat:Number(lat),lon:Number(lon)},
            units: "metric"
        });
        console.log("getWeather");
        try {
            const location = await weather.getLocation();
            const data = await weather.getCurrent()
                .then(data=>{
                    return data;
                })
            console.log("Complete");
            res.send(JSON.stringify([location,data]));
        }
        catch (error){
            console.log(error);
            res.send(new Error(`Failed to get weather:${JSON.stringify(error)}`));
        }
    }
}

module.exports = weatherController;