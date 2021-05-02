const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DEVSchema = new Schema({
  nome: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  sexo: {
    type: String,
  },
  idade: {
    type: Number,
  },
  hobby: {
    type: String,
  },
  datanascimento: {
    type: Date,
  },
});

const DEV = mongoose.model("developers", DEVSchema);

module.exports = DEV;
