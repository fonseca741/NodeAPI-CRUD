const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://admin:admin@nodejscluster.tuedd.mongodb.net/mongodb?retryWrites=true&w=majority"

mongoose.connect(mongoDB, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  });

var db = mongoose.connection;

db.on('connected', function () {
  console.log('Conectado ao banco');
});

db.on('error', console.error.bind(console, 'MongoDB: erro de conexão:'));

module.exports = db;