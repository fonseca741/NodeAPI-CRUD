const chai = require("chai");
const http = require("chai-http");
const subSet = require("chai-subset");
let ADRESS = "http://localhost:4000";

chai.use(http);
chai.use(subSet);

describe("Testes de integração CRUD", () => {

  it("POST /developers     - expect status 201", async () => {

    const res = await chai.request(ADRESS).post("/developers").send({
      nome: "Teste",
      sexo: "F",
      idade: 18,
      hobby: "Futebol",
      datanascimento: "01/01/1991",
    });

    chai.expect(res).to.have.status(201);
  });

  it("POST /developers     - expect status 400", async () => {

    const res = await chai.request(ADRESS).post("/developers").send({
      sexo: "F",
      idade: 18,
      hobby: "Futebol",
      datanascimento: "01/01/1991",
    });

    chai.expect(res).to.have.status(400);
  });

  it("GET  /developers     - expect status 200", async () => {

    const res = await chai.request(ADRESS).get("/developers");

    chai.expect(res).to.have.status(200);
  });

  it("GET  /developers/:id - expect status 404", async () => {

    const res = await chai.request(ADRESS).post("/developers/1");

    chai.expect(res).to.have.status(404);
  });

  it("PUT  /developers/:id - expect status 400 ", async () => {

    const res = await chai.request(ADRESS).put("/developers/1").send({
      nome: "Nome Atualizado",
      sexo: "F",
      idade: 18,
      hobby: "Futebol",
      datanascimento: "01/01/1991",
    });

    chai.expect(res).to.have.status(400);
  });

  it("DEL  /developers/:id - expect status 400 ", async () => {
    const res = await chai.request(ADRESS).delete("/developers/1");

    chai.expect(res).to.have.status(400);
  });
});