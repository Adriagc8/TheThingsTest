const { createUser, getUsers } = require('./users.service');

const controller = {
  async post({ req, res }) {
    // Crea un nuevo usuario en el archivo de usuarios.
    const { name, surnames } = req.body;
    const user = await createUser(name, surnames);
    res.status(200).json({ user });
  },
  async get({ req, res }) {
    // Devuelve una lista de todos los usuarios en el archivo de usuarios que coincidan con los parámetros de búsqueda especificados.
    const { name, surnames } = req.query;
    const users = await getUsers(name, surnames);
    res.status(200).json({ users });
  },
};

module.exports = controller;
