const express = require ('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/developers',apiController.index); 

router.get('/developers/:id',apiController.details); 

router.post('/developers',apiController.create); 

router.put('/developers/:id',apiController.update); 

router.delete('/developers/:id',apiController.delete); 


module.exports = router;

