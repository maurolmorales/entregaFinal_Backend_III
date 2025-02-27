import supertest from "supertest";
import { expect } from "chai";
const requester = supertest("http://localhost:8080");

describe("Tests para todos los endpoints de pets", function () {
  it("GET /api/pets - Debe obtener todos las mascotas", async function () {
    const { status, _body } = await requester.get("/api/pets");
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
    expect(_body.payload).to.be.an("array");
  });

  it("POST /api/pets - para crear una mascota", async function () {
    let newPet = {
      name: 'Lio',
      specie: 'goat',
      birthDate: '2021-06-01',
      adopted: false,
      owner: ''
    }

    const {status, _body} = await requester.post("/api/pets").send(newPet);
    expect(status).to.equal(201);
    expect(_body).to.have.property("status", "success");
  });
/*
  it("POST /api/pets/withimage - para crear una mascota", async function () {
    let newPet = {
      name: "Firu",
      specie: "Perro",
      birthDate: "2021-06-01",
      adopted: false,
      owner: "",
    };

    const imagePath = path.join(__dirname, "../public/img/1740631367169-firu.jpg");

    const { status, _body } = await requester.post("/api/pets/withimage")
    .field("name", newPet.name)
    .field("specie", newPet.specie)
    .field("birthDate", newPet.birthDate)
    .field("adopted", newPet.adopted)
    .field("owner", newPet.owner)
    .attach("image", imagePath); // Enviar imagen correctamente
    expect(status).to.equal(201);
    expect(_body).to.have.property("status", "success");
  });
*/

  it("PUT /api/pets/{pid} - Debe actualizar una mascota por el id", async function () {
    let pid = "67c0c3e9c7948c942e87dd19";
    let petUpdated = {
      name: "Bandit",
      specie: "abeja",
      birthDate: "2002-07-23T08:00:44.672Z",
      adopted: true,
      owner: "67c0c3e9c7948c942e87dd1f",
      image: "https://avatars.githubusercontent.com/u/11234335"
      
    };
    const { status, _body } = await requester
      .put(`/api/pets/${pid}`)
      .send(petUpdated);
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });

  it("DELETE /api/pets/{pid} - Debe eliminar una mascota por id", async function () {
    let pid = "67c0c3e9c7948c942e87dd1d";
    const { status, _body } = await requester.delete(`/api/pets/${pid}`);
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });
});
