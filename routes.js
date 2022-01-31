module.exports = app => {

    app.route('/city')
        .post(app.api.city.getCity)


    app.route('/weather')
        .post(app.api.weather.getWeather) 
}