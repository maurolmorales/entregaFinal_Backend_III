import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://localhost:8080");

describe("Tests para todos los endpoints de adoptions", function () {
  
  it("GET /api/adoptions - Debe obtener todas las adopciones", async function () {
    const { status, _body } = await requester.get("/api/adoptions");
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
    expect(_body.payload).to.be.an("array");
  });

  it("GET /api/adoptions - Caso de error. Debe obtener status 404", async function () {
    const { status } = await requester.get("/api/adopciones");
    expect(status).to.equal(404);
  });

  it("GET /api/adoptions/{aid} - Debe devolver una adopción por id", async function () {
    let aid = "67c0c45ac7948c942e87dd32";
    const { status, _body } = await requester.get(`/api/adoptions/${aid}`);
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
  });

  it("GET /api/adoptions/{aid} - Caso de error. Debe obtener status 404", async function () {
    let aid = "67c0b48392045e83e97c0d25";
    const { status, _body } = await requester.get(`/api/adoptions/${aid}`);
    expect(status).to.equal(404);
  });

  it("POST /api/adoptions/{uid}/{pid} - para crear una adopción", async function () {
    let uid = "67c0c3e9c7948c942e87dd20";
    let pid = "67c0c3e9c7948c942e87dd1a";

    const { status, _body } = await requester.post(
      `/api/adoptions/${uid}/${pid}`
    );
    expect(status).to.equal(201);
    expect(_body).to.have.property("status", "success");
  });

  it("POST /api/adoptions/{uid}/{pid} - Caso de Error, debe devolver un setado 404", async function () {
    let uid = "67c09db95ac3ca40bf8c7da9"; // _id incorrecto
    let pid = "67c09db85ac3ca40bf8c7da7";

    const { status } = await requester.post(`/api/adoptions/${uid}/${pid}`);
    expect(status).to.equal(404);
  });
});
