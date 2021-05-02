const DEV = require("../models/devModel");

exports.index = function (req, res, next) {
  DEV.find({})
    .then(function (obj) {
      res.render("listDevs", { objs: obj });
    })
    .catch(next);
};

exports.details = function (req, res) {
  DEV.findById({ _id: req.params.id })
    .then(function (obj) {
      res.send(obj);
    })
    .catch((err) => {
      res.status(404).send({ error: err.message });
    });
};

exports.create = function (req, res, next) {
  DEV.create(req.body)
    .then(function (obj) {
      res.status(201).send(obj);
    })
    .catch(next);
};

exports.update = function (req, res, next) {
  DEV.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      DEV.findOne({ _id: req.params.id }).then(function (obj) {
        res.send(obj);
      });
    })
    .catch(next);
};

exports.delete = function (req, res, next) {
  DEV.findByIdAndRemove({ _id: req.params.id })
    .then(function (obj) {
      res.status(204).send(obj);
    })
    .catch(next);
};
