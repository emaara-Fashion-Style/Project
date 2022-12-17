const express = require('express');
const router = express.Router();
const ProductCon = require('../controllers/productController')

router.post('/new', ProductCon.Createproducts)
router.get('/get', ProductCon.GetProduct)
router.get('/:pro_id', ProductCon.getonepro)
router.put('/:pro_id', ProductCon.Updateproduct)
router.delete('/:pro_id', ProductCon.Deleteproduct)



module.exports = router;