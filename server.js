import ex from 'express'
import cors from 'cors'
import {router} from './routes/route.js'
import path from 'path'

let app = ex()

app.use(cors())
app.use(ex.json())
app.use(ex.static(path.resolve()+"/src/build"))
app.use(router)

app.use(function(req, res) {
    res.redirect('/')
});

const port = 8080

app.listen(port, function(){
    console.log("Servidor iniciado")
})
