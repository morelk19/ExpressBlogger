var express = require('express');
const { validatedBlogData } = require('../validation/blogs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({success: true, route: "users", message: "welcome to the users page"})
});

router.post("/create-one", (req, res) =>{

  try{
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const favoriteFood = req.body.favoriteFood;

    const userData = {
      email,
      firstName,
      lastName,
      age,
      favoriteFood,
      fullName: firstName + lastName,
      createdAt: new Date(),
      lastModified: new Date()
    }

    const userDataCheck = validatedUser
  }catch(e){
    console.log(e);
    res.json({
      success: false,
      error: String(e)
    })
  }
})

module.exports = router;
