const express =require ("express");
const router = express.Router();
const CategoryControl = require('../controllers/categoryController')

router.post('/new', CategoryControl.CreateCategory)
router.get('/Getall', CategoryControl.GetallCategory)
router.put('/update/:Cat_ID', CategoryControl.Updatecategory)
router.delete('/De/:Cat_ID', CategoryControl.DeleteCategory)



module.exports =router