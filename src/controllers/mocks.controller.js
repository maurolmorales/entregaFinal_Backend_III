import mocksService from "../services/mocking.js";

const getMockingPets =  (req, res) => {
  try {
    let amountPets = Number(req.params.cant);
    if (!amountPets || amountPets == 0) { amountPets = 100 }

    const pets =  mocksService.generatePets(amountPets);
    if (!pets) { return res.status(400).json({ status: "error", message: error.message }) }
    return res.status(200).json(pets);
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const getMockingUsers = async (req, res) => {
  try {
    let amountUsers = Number(req.params.cant)
    if (!amountUsers || amountUsers == 0) { amountUsers = 50 }

    const users = await mocksService.generateUsers(amountUsers);
    return res.status(200).json(users);
  } catch (error) {
    console.log("error: ", error.message);
    return res
      .status(500)
      .json({ mensaje: "answer error", respuesta: error.message });
  }
};

const postSaveDataDB = async (req, res) => {
  try {
    const amountPets  = Number(req.params.cantPets);
    const amountUsers = Number(req.params.cantUser);
    if (!amountPets  || amountPets == 0) { amountPets = 100 }
    if (!amountUsers || amountUsers == 0) { amountUsers = 50 }

    const petsGroup = await mocksService.generatePets(amountPets);
    if (!petsGroup || petsGroup === undefined) {
      res.status(401).json("no se encuentra petsgroup");
    }
    const usersGroup = await mocksService.generateUsers(amountUsers);
    if (!usersGroup || usersGroup === undefined) {
      res.status(401).json("no se encuentra usersGroup");
    }

    const saveData = await mocksService.saveData(petsGroup, usersGroup);

    if (!saveData || saveData === undefined) {
      res.status(401).json("NO se pudo grabar los datos en DB");
    }

    
    return res.status(200).json({ respuesta: "Done", pets: petsGroup, users: usersGroup });
  } catch (error) {
    return res.status(500).json({ "message:": error.message });
  }
};

export default {
  getMockingPets,
  getMockingUsers,
  postSaveDataDB,
};
