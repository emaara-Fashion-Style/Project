const express = require('express');
const router = express.Router();

const categoryController = require("../controllers/categoryController")


// ------------------ROUTES   LINKS-----------------------

// GET ALL
router.get('/all', categoryController.allCats);

// create patient
router.post('/create', categoryController.createCategory);

// update category patch || put -> same -> EDITING -> Modification
router.patch('/edit/:category_ID', categoryController.updateCategory);


// ROUTER FOR DELETE
router.delete('/delete/:category_ID', categoryController.deleteCategory);
