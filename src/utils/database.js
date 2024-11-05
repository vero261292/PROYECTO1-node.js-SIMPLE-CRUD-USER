import { Sequelize } from 'sequelize'
import 'dotenv/config'

// coneccion a base de datos, objeto Sequelise como ORM y variables de entorno de archivo .env

const dataBase = new Sequelize({
  server: process.env.MODELUSER_SERVER,
  database: process.env.MODELUSER_DATABASE,
  port: process.env.MODELUSER_PORT,
  username: process.env.MODELUSER_USERNAME,
  password: process.env.MODELUSER_PASSWORD,
  dialect: 'postgres',
})

export default dataBase
