import { DataTypes } from 'sequelize'
import database from '../utils/database.js' //base de datos

const ModelUser = database.define('mlUser', {
  //primer parametro =>  nombre de tabla en la base de datos // segundo parametro => modelo de base de datos
  // definir atributos
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default ModelUser
