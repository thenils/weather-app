const request = require('request')

const url = "https://api.darksky.net/forecast/b912d3236048696e1423be7ecd7438de/37.8267,-122.4233"

request({ url:url, json:true},(error, response)=> {
    // console.log(response)
    // console.log(response.body.currently)
    // const data = JSON.parse(response.body)
    // console.log(data.currently)
    if(error){
        console.log("Unable to connect server!")
    }else if(response.body.error){
        console.log("Unable to find Location")
    }else{
        console.log(response.body.currently.temperature+ " " + response.body.currently.precipProbability)
    }
    
})
// Geocoding
// address --> Lat/Lang --> Weather
const geocodURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGhlbmlscyIsImEiOiJja2d0NnpoZnAwN3lpMnpxcnQ1dzhqcGJvIn0.OPWCmhZ-x6U4CklLv5772A&limit=1"
request({url:geocodURL, json:true}, (error, response)=>{
    // console.log(response.body.features[0].center[0])
    // const latitude = response.body.features[0].center[1]
    // const longitude = response.body.features[0].center[0]

    // console.log(latitude, longitude)
    if(error){
        console.log("Unable to connect server!")
    }else if(response.body.features.length === 0 ){
        console.log("Unable to find Location")
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
    
})