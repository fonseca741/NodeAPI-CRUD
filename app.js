// ========================= MIDDLEWARE ==============================

const app = require("./config/api-config");

// ======================== VIEW ENGINE ==============================

app.set("view engine", "ejs");

// ======================= BANCO DE DADOS =============================

const db = require("./config/database");

// ====================================================================

let PORT = 4000;
let HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log("API iniciada, porta: " + PORT);
});

module.exports = app;