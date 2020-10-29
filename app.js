const request = require('request')

//importing the geocode file here
const geocode = require('./utils/geocode')
//importing the forrecast
const forecast = require('./utils/forecast')

// const url = "https://api.darksky.net/forecast/b912d3236048696e1423be7ecd7438de/37.8267,-122.4233"

// request({ url:url, json:true},(error, response)=> {
 
//     if(error){
//         console.log("Unable to connect server!")
//     }else if(response.body.error){
//         console.log("Unable to find Location")
//     }else{
//         console.log(response.body.currently.temperature+ " " + response.body.currently.precipProbability)
//     }
    
// })
// Geocoding
// address --> Lat/Lang --> Weather
// const geocodURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGhlbmlscyIsImEiOiJja2d0NnpoZnAwN3lpMnpxcnQ1dzhqcGJvIn0.OPWCmhZ-x6U4CklLv5772A&limit=1"
// request({url:geocodURL, json:true}, (error, response)=>{
//     if(error){
//         console.log("Unable to connect server!")
//     }else if(response.body.features.length === 0 ){
//         console.log("Unable to find Location")
//     }else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
    
// })
address = process.argv[2]
// console.log(process.argv)

if(!address){
    console.log("Pleas enter a location")
}else{
    geocode(address, (error, { latitude, longitude, location}) => {
        // console.log('Error ', error)
        // console.log('Data ', data)
        if(error){
            return console.log(error)
        }
        // console.log(data)
        //forecast according the the geocode output
        forecast(latitude, longitude, (error, forecastData) =>{
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
    
}


