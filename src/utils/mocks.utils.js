import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

const generateMocksPets = () => {
  return {
    name: faker.animal.petName(),
    specie: faker.animal.type(),
    birthDate: faker.date.birthdate(),
    adopted: false,
    owner: null,
    image: faker.image.avatar(),
  };
};

const generateMocksUsers = async () => {
  const hashedPass = await createHash("coder123");
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: hashedPass,
    role: faker.helpers.arrayElement(['admin', 'user']),
    pets: []
  };
};

export { generateMocksPets, generateMocksUsers };
