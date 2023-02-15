const mongoose = require ("mongoose");
const { v4: uuidv4 } = require  ("uuid");

const blogSchema = new mongoose.Schema({
    id: {type: String, default: uuidv4()},
    title: String,
    text: String,
    text: String,
    author: String,
    categories: [String],
    createdAt: { type: Date, default: Date.now },
    lastModified: { type: Date, default: Date.now }
});


const Blog = mongoose.model("sample_blog", blogSchema);



module.exports = Blog
