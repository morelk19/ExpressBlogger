var express = require('express');
var router = express.Router();
const { validateBlogData } = require('../validation/blogs');
const Blog = require('../models/Blogs');
const { v4: uuidv4 } = require  ("uuid");

// const { db } = require('../mongo');


router.get('/', async function(req, res) {

  //query blogs 
  try {
    const allBlogs = await Blog.find({});
    res.json({blogs: allBlogs });
  }catch(e){
    console.log(e);
  }
});


router.get("/all", async function (req, res, next){
  try {
    const allBlogs = await Blog.find({});
    res.json({blogs: allBlogs });
  }catch(e){
    console.log(e);
  }
  });

// router.get("/get-one/:idToGet", async function (req, res, next){

// const agg = [
//   {
//     '$search': {
//       'index': 'blogIndex', 
//       'text': {
//         'query': req.params.idToGet, 
//         'path': 'id'
//       }
//     }
//   }
// ];

// const client = await db('blog_data')
// .collection('sample_blogs');
// const cursor = client.aggregate(agg);
// const result = await cursor.toArray();

// 	res.json({
// 		success: true,
// 		result : result
// 	})
// })

// router.get("/get-one", async function (req, res, next){
//   const blogs = await db()
//   .collection('sample_blogs')
//   .find()
//   .limit(1)
//   .toArray(function(err, result){
//   if(err){
//     res.status(400).send('error fetching blogs')
//   }else{
//     res.json(result)
//   }
//   })

//   res.json({
//   success:true,
//   blogs: blogs,
//   })

// })

// router.delete("/delete-one/:id", async function (req, res, next){

// const blogQuery = {id: req.params.id};


// const removedBlog = await db('blog_data')
//   .collection('sample_blogs')
//   .deleteOne(blogQuery, function (err, _result) {
//   if (err) {
//     res
//       .status(400)
//       .send(`Error deleting listing with title ${req.params.titleToGet}!`);
//   } else {
//     console.log('1 document deleted');
//     res.status(204).send();
//   }
// })
// })

router.post("/create-one", async function (req, res){

    try{
      const id =  uuidv4();
      const text = req.body.text;
      const title = req.body.title;
      const author = req.body.author;
      const categories = req.body.categories;
      const createdAt = new Date();
      const lastModified = new Date();

      const newBlog = new Blog({
        id,
        text,
        title,
        author,
        categories,
        createdAt,
        lastModified,
      });
      
      
  
      const userDataCheck = validateBlogData(newBlog);

       if(userDataCheck.success === false){
         throw Error(userDataCheck.message)
       }

       const savedData = await newBlog.save();

       res.json({
        success: true,
        blogs: savedData
      })

    
    }catch(e){
      console.log(e);
      res.json({
        success: false,
        error: String(e)
      })
    }
  })

//   router.put("/update-one/:blogTitle", (req, res) =>{

//     try{
//         const originalBlog = sampleBlogs.find((blog)=>{
//             return blog.title = req.params.blogTitle
//         })
//         if(!originalBlog){
//             res.json({
//                 success: false,
//                 message: "Could not find Blog"
//             })
//         }
//         const newBlog = {};
//         if(req.body.title !== undefined){
//             newBlog.title = req.body.title;
//         }else{
//             newBlog.title = originalBlog.title
//         }
//         if(req.body.text !== undefined){
//             newBlog.text = req.body.text;
//         }else{
//             newBlog.text = originalBlog.text
//         }
//         if(req.body.title !== undefined){
//             newBlog.title = req.body.title;

//         }else{
//             newBlog.title = originalBlog.title
//         }if(req.body.author !== undefined){
//             newBlog.author = req.body.author;

//         }else{
//             newBlog.author = originalBlog.author
//         }if(req.body.category !== undefined){
//             newBlog.category = req.body.category;

//         }else{
//             newBlog.category = originalBlog.category
//         }if(req.body.createdAt !== undefined){
//             newBlog.createdAt = req.body.createdAt;

//         }else{
//             newBlog.createdAt = originalBlog.createdAt
//         }
//             newBlog.lastModified = new Date();


//         sampleBlogs.forEach((blog, index)=>{
//             if(blog.title === req.params.blogTitle){
//                 sampleBlogs[index] = newBlog;
//             }
//         })

      
  
//       const userDataCheck = validateBlogData(newBlog);

//        if(userDataCheck.success === false){
//          throw Error(userDataCheck.message)
//        }

      
//       res.json({
//         success: true,
//       })

//     }catch(e){
//       console.log(e);
//       res.json({
//         success: false,
//         error: String(e)
//       })
//     }
//   })


//   router.get("/get-multi", async function (req, res, next){
//     const searchTitle  = req.query.title;
//     const searchId = req.query.id;
//     const searchAuthor = req.query.author;
//     res.json({
//       success:true,
//       searchAuthor: searchAuthor
//       })
        

//     const blogs = await db()
//       .collection('sample_blogs')
//       .find({
//         "author" : searchAuthor
//        })
//       .toArray(function(err, result){
//       if(err){
//         res.status(400).send('error fetching blogs')
//       }else{
//         res.json(result)
//       }
//       })
    
//       res.json({
//       success:true,
//       searchAuthor: searchAuthor
//       })
    
//     });
 

 module.exports = router;