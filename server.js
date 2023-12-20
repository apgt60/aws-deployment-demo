const express = require('express')
//we dont need cors for this app

const app = express()

//telling app to use a resource
//__dirname is the location of the current running server
app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => console.log("Up on 4000"))



