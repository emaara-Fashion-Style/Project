const express = require('express');
const router = express.Router();

<<<<<<< HEAD
router.post('/new', CategoryControl.CreateCategory)
router.get('/Getall', CategoryControl.GetallCategory)
router.put('/update/:Cat_ID', CategoryControl.Updatecategory)
router.delete('/De/:Cat_ID', CategoryControl.DeleteCategory)
=======
const categoryController = require("../controllers/categoryController")
// const { protect } = require('../middlewares/auth');


// ------------------ROUTES   LINKS-----------------------

// GET ALL
router.get('/all', categoryController.Getall);

// create patient
router.post('/create',  categoryController.createCategory);

// update category patch || put -> same -> EDITING -> Modification
router.patch('/:category_ID', categoryController.updateCategory);


// ROUTER FOR DELETE
router.delete('/:category_ID', categoryController.deleteCategory);


>>>>>>> 4b78a59c3bf0974445ddc8f108620f1344bb9ee0

module.exports= router