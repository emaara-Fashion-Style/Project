const express =require ("express");
const router = express.Router();
const CategoryControl = require('../controllers/categoryController')

router.post('/new', CategoryControl.CreateCategory)





module.exports =router