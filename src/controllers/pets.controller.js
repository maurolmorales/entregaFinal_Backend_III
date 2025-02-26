import PetDTO from "../dto/Pet.dto.js";
import { petsService } from "../services/index.js";
import __dirname from "../utils/index.js";

const getAllPets = async (req, res) => {
  try {
    const pets = await petsService.getAll();
    if (!pets) {
      return res.status(400).send({ status: "success", payload: pets });
    }
    res.status(200).send({ status: "success", payload: pets });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

const createPet = async (req, res) => {
  try {
    const { name, specie, birthDate } = req.body;
    if (!name || !specie || !birthDate)
      return res
        .status(400)
        .send({ status: "error", error: "Incomplete values" });
    const pet = PetDTO.getPetInputFrom({ name, specie, birthDate });
    const result = await petsService.create(pet);
    res.status(201).send({ status: "success", payload: result });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

const updatePet = async (req, res) => {
  try {
    const petUpdateBody = req.body;
    const petId = req.params.pid;
    const result = await petsService.update(petId, petUpdateBody);
    res.status(200).send({ status: "success", message: "pet updated" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

const deletePet = async (req, res) => {
  try {
    const petId = req.params.pid;
    const result = await petsService.delete(petId);
    res.status(200).send({ status: "success", message: "pet deleted" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

const createPetWithImage = async (req, res) => {
  try {
    const file = req.file;
    const { name, specie, birthDate } = req.body;
    if (!name || !specie || !birthDate)
      return res
        .status(400)
        .send({ status: "error", error: "Incomplete values" });
    console.log(file);
    const pet = PetDTO.getPetInputFrom({
      name,
      specie,
      birthDate,
      image: `${__dirname}/../public/img/${file.filename}`,
    });
    console.log(pet);
    const result = await petsService.create(pet);
    res.status(200).send({ status: "success", payload: result });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};
export default {
  getAllPets,
  createPet,
  updatePet,
  deletePet,
  createPetWithImage,
};
