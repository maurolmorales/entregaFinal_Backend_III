import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://localhost:8080");
/*
describe("Tests para todos los endpoints de users", function () {
  
  it("GET /api/users - Debe obtener todos los usuarios", async function () {
    const { status, _body } = await requester.get("/api/users");
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
    expect(_body.payload).to.be.an("array");
  });

  it("POST /api/users - para crear un usuario", async function () {
    let newUser = {
      first_name: "Patricia",
      last_name: "Caballero",
      email: "patric@gmail.com",
      password: "patri1234"
    }

    const {status, _body} = await requester.post("/api/users").send(newUser);
    expect(status).to.equal(201);
    expect(_body).to.have.property("status", "success");
  });


  it("GET /api/users/{uid} - Debe devolver un usuario por id", async function () {
    let uid = "6798035a4cab0ac00f27ba89";
    const { status, _body } = await requester.get(`/api/users/${uid}`);
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });

  it("PUT /api/users/{uid} - Debe actualizar un usuario por el id", async function () {
    let uid = '67bbfc3e121bc1083595cc64';
    let userUpdated = {
      first_name: "Carlos",
      last_name: "Martinez",
      email: "carlos_nuevomail@gmail.com",
      password: "carlosm123",
    };
    const {status, _body} = await requester.put(`/api/users/${uid}`).send(userUpdated)
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });


  it("DELETE /api/users/{uid} - Debe eliminar un usuario por id", async function () {
    let uid = "67beb13edd17c392a879152a";
    const { status, _body } = await requester.delete(`/api/users/${uid}`);
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });

});
*/
/* ---------------------------------------------------------------------------------------- */

describe("Tests para todos los endpoints de pets", function () {
  
  // it("GET /api/pets - Debe obtener todos las mascotas", async function () {
  //   const { status, _body } = await requester.get("/api/pets");
  //   expect(status).to.equal(200);
  //   expect(_body).to.have.property("status", "success");
  //   expect(_body.payload).to.be.an("array");
  // });

  // it("POST /api/pets - para crear una mascota", async function () {
  //   let newPet = {
  //     name: 'Firu',
  //     specie: 'Perro',
  //     birthDate: '2021-06-01',
  //     adopted: false,
  //     owner: ''      
  //   }

  //   const {status, _body} = await requester.post("/api/pets").send(newPet);
  //   expect(status).to.equal(201);
  //   expect(_body).to.have.property("status", "success");
  // });

  it("POST /api/pets/withimage - para crear una mascota", async function () {
    let newPet = {
      name: 'Firu',
      specie: 'Perro',
      birthDate: '2021-06-01',
      adopted: false,
      owner: '',
      image: '/public/img/fido.jpg'
    }

    const {status, _body} = await requester.post("/api/pets/withimage").send(newPet);
    expect(status).to.equal(201);
    expect(_body).to.have.property("status", "success");
  });

  // it("GET /api/users/{uid} - Debe devolver un usuario por id", async function () {
  //   let uid = "6798035a4cab0ac00f27ba89";
  //   const { status, _body } = await requester.get(`/api/users/${uid}`);
  //   expect(status).to.equal(200);
  //   expect(_body).to.have.property("status", "success");
  // });

  it("PUT /api/pets/{pid} - Debe actualizar un usuario por el id", async function () {
    let pid = '6798035a4cab0ac00f27ba85';
    let petUpdated = {
      name: 'Bandit',
      specie: 'abeja',
      birthDate: '2021-06-01',
      adopted: false,
      owner: ''      
    }
    const {status, _body} = await requester.put(`/api/pets/${pid}`).send(petUpdated)
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });


  it("DELETE /api/pets/{pid} - Debe eliminar un usuario por id", async function () {
    let pid = "67beb64f6e9d1071491131e9";
    const { status, _body } = await requester.delete(`/api/pets/${pid}`);
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });


});