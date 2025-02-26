import supertest from "supertest";
import {expect} from "chai";

const requester = supertest("http://localhost:8080");

describe("Tests para todos los endpoints de users", function(){

  it("GET /api/users - Debe obtener todos los usuarios", async function () {
    const {status, _body} = await requester.get("/api/users");
    expect(status).to.equal(200);
    expect(_body).to.have.property("status", "success");
    expect(_body.payload).to.be.an("array");
  });




  after("cierra la base", function(){
    
  })

})
