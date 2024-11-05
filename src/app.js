import express from 'express'
import dataBase from './utils/database.js'
import ModelUser from './models/modelUser.js'
import routerUsers from './components/modelUsers/routerUser.js'

ModelUser

const PORT = 3000

dataBase
  .authenticate() //probar coneccion correcta
  .then(() => {
    console.log('coneccion correcta')
  })
  .catch(error => console.log(error))

dataBase
  .sync() // sincronizacion a base de datos
  .then(() => {
    console.log('base de datos zincronizada')
  })
  .catch(error => console.log(error))

const app = express() //instancia de express

app.use(express.json())

app.get('/', (req, res) => {
  res.send('TODO BIEN')
})

app.use(routerUsers)

app.listen(PORT, () => {
  console.log(`escuchando en el puerto ${PORT}`)
})
