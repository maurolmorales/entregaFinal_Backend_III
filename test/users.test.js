import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";
import assert from "assert";
import config from "../src/config/config.js";

const connection = mongoose.connect(config.mongoUrl, { dbName: config.bdname });

describe("testeamos el dao de usuarios", function () {
  before(function () { this.usersDao = new User() });

  it("El get de usuarios me debe devolver un array", async function () {
    const resultado = await this.usersDao.get();
    assert.strictEqual(Array.isArray(resultado), true);
  });

  it("ingresar un usuario", async function(){
    
    let usuario = {
      first_name: "Carlos",
      last_name: "Martinez",
      email: "carlosm@gmail.com",
      password: "carlos1234"
    }
    
    const resultado = await this.usersDao.save(usuario);
    assert.ok(resultado._id);
  })

  after(async function(){
    await mongoose.disconnect();
  })
});
