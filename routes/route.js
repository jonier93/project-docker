import express, { Router } from 'express'
import path from 'path'
import {autenticar, registrar, getProductos, addCarrito, verCarrito, comprar} from '../controllers/controller.js'

let dirFront = path.join(path.resolve(), 'src', 'build')
const router = express.Router()

router.get('/', function(req, resp){
    resp.sendFile(dirFront+"/index.html") 
})

router.get('/home', function(req, resp){
    resp.sendFile(dirFront+"/index.html") 
})

router.post('/registrar', function(req, resp) {
    registrar(req, resp)
})

router.post('/autenticacion', function (req, resp) {
    autenticar(req, resp)
})

router.get('/productos', function (req, resp) {
    getProductos(req, resp)
})

router.post('/agregarCarrito', (req, resp) => {
    addCarrito(req, resp)
})

router.post('/verCarrito', (req, resp) => {
    verCarrito(req, resp)
})

router.post('/comprar', (req, resp) => {
    comprar(req, resp)
})

export {router}