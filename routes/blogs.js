var express = require('express');
var router = express.Router();




const blogController = require('../controllers/blogController');


// const { db } = require('../mongo');

router.get('/', blogController.getAllBlogs);

router.get("/all", blogController.getAllBlogs);

router.post("/create-one", blogController.createOneBlog);

router.get("/get-one/:id", blogController.getOneBlog);

router.put("/update-one/:id", blogController.createOneBlog);

router.delete("/delete-one/:id", blogController.deleteOneBlog);


module.exports = router;