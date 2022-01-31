module.exports = app => {

const city = require('all-the-cities')


const getCity = async (req, res) => {

    const body = req.body
    const cities = []

  if(body) {

  await city.filter(city => {
        if(city.name.match(body.termo) && city.country === 'BR') {
            cities.push(city)
        }
     })

     if(cities.length > 6) {
         cities.splice(6)
     }

     res.json(cities)

    }
}

return { getCity }

}


