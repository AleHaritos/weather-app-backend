const express = require('express')
const consign = require('consign')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

consign()
    .then('./api')
    .then('./routes.js')
    .into(app)


app.listen(process.env.PORT || 3000, () => {
    console.log('Executando backend')
})