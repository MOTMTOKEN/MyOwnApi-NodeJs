const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'sheyaa bin',
        'birthLocation': 'London, England'
    },
    'chance the capper': {
        'age': 27,
        'birthName': 'Chancelor',
        'birthLocation': 'Chicago'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }

}

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get("/api/rappers:rapperName", (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()
    if (rappers[rapName]){
        response.json(rappers[rapName])
    } else {
        response.json(rappers['unknown'])
    }
    
})

app.listen( process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
})