const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const errorP = document.querySelector('.error')
const lieu = document.querySelector('.location')
const temperature = document.querySelector('.temperature')
const image = document.querySelector('img')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const address = search.value

    fetch(`http://api.weatherstack.com/current?access_key=ea3fc73816cad9adfd816415850b5377&query=${address}`)
        .then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    errorP.textContent = data.error.info
                    return
                }
                errorP.textContent = ''
                lieu.textContent = data.location.name + ' ' + data.location.country + ' ' + data.location.region
                image.src = data.current.weather_icons
                temperature.textContent = data.current.temperature + ' °C'

            })
        })
})