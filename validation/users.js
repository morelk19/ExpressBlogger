
const validateUserData = (userData) =>{


    if(userData.firstName=== undefined || typeof(userData.firstName) !== "string"){
        return {
            success: false,
            message: "First Name must be a string.",
        } 
        
    }
    if(userData.lastName === undefined || typeof(userData.lastName) !== "string"){
        return {
            success: false,
            message: "Last Name must be a string.",
        }
        
    }
    if(userData.age=== undefined || typeof(userData.age) !== "number"){
        return {
            success: false,
            message: "Age must be a Number.",
        }
    }
    if(userData.email=== undefined || typeof(userData.email) !== "string"){
        return {
            success: false,
            message: "Email must be a string.",
        }
    }



}
module.exports ={
    validateUserData,
}

