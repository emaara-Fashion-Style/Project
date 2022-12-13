
const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/UserControles')


router.post('/new', userControllers.Registertion)
router.get('/Get', userControllers.Getallusers)
router.post('/login', userControllers.Login)
router.get("/getnoe", userControllers.GetOneuser)
router.put("/:userID", userControllers.UpdateUser)
router.delete("/delete", userControllers.DeleteUser)

module.exports = router;