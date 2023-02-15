const Blog = require('../models/Blogs');
const { validateBlogData } = require('../validation/blogs');
const { v4: uuidv4 } = require('uuid');


async function createOneBlog(req, res, next) {
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
 }


async function getAllBlogs(req, res) {

    //query blogs 
    try {
      const allBlogs = await Blog.find({});
      res.json({blogs: allBlogs });
    }catch(e){
      console.log(e);
    }
}


async function getOneBlog(req, res, next) {
    try {
        const oneBlogPost = await Blog.findOne({id: req.params.id});
        res.json({
            sucess: true,
            oneBlog: oneBlogPost
        })
    } catch (error) {
        console.log(error);
    }
}

async function updateOneBlog(req,res){
    const entryId = req.params.id;

    try {
        await Blog.updateOne({ id: entryId }, req.body);
    } catch (err) {
        console.log(err);
        throw err;  
    }
    res.json({
        success: true,
        message: `blog entry id ${entryId} updated`
    })
}

async function deleteOneBlog(req,res){
    const entryId = req.params.id;

    try {
        await Blog.deleteOne({id: entryId});
    } catch (err) {
        console.log(err);
        throw err;  
    }

    res.json({
        success: true,
        message: `blog entry id ${entryId} deleted`
    })
}



module.exports = {
    createOneBlog,
    deleteOneBlog,
    getAllBlogs,
    getOneBlog,
    updateOneBlog
};