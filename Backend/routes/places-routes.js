const express = require('express');
const { check } = require('express-validator');

const placeControlllers =require('../controllers/places-controllers');

const router = express.Router();

router.get('/:pid', placeControlllers.getPlaceById);

router.get('/user/:uid', placeControlllers.getPlacesByUserId);

router.post(
    '/',
    [
      check('title')
       .not()
       .isEmpty(),
      check('description')
       .isLength({min: 5}), 
      check('address')
       .not()
       .isEmpty()
    ],   
    placeControlllers.createPlace
);

router.patch('/:pid', [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })  
] , placeControlllers.updatePlace);

router.delete('/:pid', placeControlllers.deletePlace);

module.exports = router; 