const express = require('express')
const hbs = require('hbs')
const path = require('path')
const weatherstack = require('./weatherstack')

const app = express()

app.set('view engine', 'hbs')
hbs.registerPartials('./partials')

pathStatic = path.join(__dirname, './static')
console.log(pathStatic)
app.use(express.static(pathStatic))


app.get('', (req, res) => {
    return res.render('template', { whichPartial: () => 'welcome'})
})

app.get('/about', (req, res) => {
    res.render('template', { whichPartial: () => 'about' })
})

app.get('/help', (req, res) => {
    res.render('template', { whichPartial: () => 'help'})
})

app.listen(3000, () => 
    console.log('Server is running on 3000')
)