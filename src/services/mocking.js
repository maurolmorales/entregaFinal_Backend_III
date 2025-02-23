import { generateMocksPets, generateMocksUsers } from "../utils/mocks.utils.js";
import { usersService } from "./index.js";
import { petsService } from "./index.js";

const generatePets = (amountPets) => {
  try {
    let numOfPets = amountPets;
    let pets = [];

    for (let i = 0; i < numOfPets; i++) {
      pets.push(generateMocksPets());
    }
    return pets;
  } catch (error) {
      throw new Error("Error al invocar generateMocksPets");
  }
};

const generateUsers = async (amountUsers) => {
  try {
    let numOfUsers = amountUsers;
    let users = [];

    for (let i = 0; i < numOfUsers; i++) {
      users.push(await generateMocksUsers());
    }
    return users;
  } catch (error) {
      throw new Error("Error al invocar generateMocksUsers");
  }
};

const saveData = async (petsGroup, usersGroup) => {
  try {
    const resultPets = await petsService.dao.saveMany(petsGroup);
    if (!resultPets) {
      return json({ status: "error", message: error.message });
    }
    const resultUsers = await usersService.dao.saveMany(usersGroup);
    if (!resultUsers) {
      return json({ status: "error", message: error.message });
    }

    return resultPets, resultUsers;
  } catch (error) {
      throw new Error("Error al tratar de guardar en DB");
  }
};

export default {
  generatePets,
  generateUsers,
  saveData,
};
