const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b912d3236048696e1423be7ecd7438de/'+ latitude +','+ longitude

    request({url:url, json:true},(error, response)=>{
        if(error){
            callback('Unable to Connect Server!', undefined)
        }else if(response.body.error){
            callback('Unable to find Location', undefined)
        }else{
            callback(undefined, response.body.data + ' its currently ' +response.body.currently.temperature + " degrees & " + response.body.currently.precipProbability + '% chance to rain')
        }
    })
}


module.exports = forecast
