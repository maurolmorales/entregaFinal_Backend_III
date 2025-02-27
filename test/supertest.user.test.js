import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://localhost:8080");

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
      password: "patri1234",
    };

    const { status, _body } = await requester.post("/api/users").send(newUser);
    expect(status).to.equal(201);
    expect(_body).to.have.property("status", "success");
  });

  it("GET /api/users/{uid} - Debe devolver un usuario por id", async function () {
    let uid = "67c0c3e9c7948c942e87dd1f";
    const { status, _body } = await requester.get(`/api/users/${uid}`);
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });

  it("PUT /api/users/{uid} - Debe actualizar un usuario por el id", async function () {
    let uid = "67c0c3e9c7948c942e87dd20";
    let userUpdated = {
      first_name: "Carlos",
      last_name: "Martinez",
      email: "carlos_nuevomail@gmail.com",
      password: "carlosm123",
    };
    const { status, _body } = await requester
      .put(`/api/users/${uid}`)
      .send(userUpdated);
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });

  it("DELETE /api/users/{uid} - Debe eliminar un usuario por id", async function () {
    let uid = "67c0c3e9c7948c942e87dd23";
    const { status, _body } = await requester.delete(`/api/users/${uid}`);
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });
});
