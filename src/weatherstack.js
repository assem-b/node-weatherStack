const request = require('postman-request')

const accessKey = 'ea3fc73816cad9adfd816415850b5377'

const weatherStack = (address, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${address}`
    request({url, json: true}, (error, {body}) => { 
        if (error) 
            callback('Unable to connect to weather stack', undefined)
        else if (body.error) 
            callback('Unable to find location', undefined)
        else
            callback(undefined, body)
    })
}

module.exports = weatherStack