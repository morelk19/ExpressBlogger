
const validateBlogData = (userData) =>{


    if(userData.title === undefined || typeof(userData.title) !== "string"){
        return {
            success: false,
            message: "Title must be a string.",
        }
    }
    if(userData.text === undefined || typeof(userData.text) !== "string"){
        return {
            success: false,
            message: "Text must be a string.",
        }
    }
    if(userData.author === undefined || typeof(userData.author) !== "string"){
        return {
            success: false,
            message: "Author must be a string.",
        }
    }
    if(userData.categories === undefined || typeof(userData.categories) !== "object"){
        return {
            success: false,
            message: "Category must be an object.",
        }
    }
    if(userData.title.length >40){
        return {
            success: false,
            message: "Title must be less than 40 characters in length.",
        }
    }
    if(userData.author.length >40){
        return {
            success: false,
            message: "Author must be less than 40 characters in length.",
        }
    }

    return {
        success: true,
    }





}
module.exports ={
    validateBlogData,
}

