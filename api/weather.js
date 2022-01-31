module.exports = app => {
    const weather = require('weather-js')


const getWeather = (req, res) => {

    const termo = req.body.termo

    if(termo) {
    weather.find({search: termo, degreeType: 'F'}, (err, result) => {
        if(err) {
            console.log(err)
        }
    
        res.json(result)
    })
  } else {
      res.status(400).send('Cidade não informada')
  }

}

return { getWeather }

}

