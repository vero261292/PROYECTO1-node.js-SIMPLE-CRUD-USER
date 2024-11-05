import ModelUser from '../../models/modelUser.js'

const getAllUser = async (req, res) => {
  try {
    const user = await ModelUser.findAll()
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}

const postUser = async (req, res) => {
  try {
    const { body } = req
    const user = await ModelUser.create(body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}

const putUser = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const user = await ModelUser.update(body, {
      where: { id },
    })
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getUserId = async (req, res) => {
  try {
    const { id } = req.params
    const user = await ModelUser.findByPk(id)
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await ModelUser.destroy({
      where: { id },
    })
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}

export { getAllUser, postUser, putUser, getUserId, deleteUser }
