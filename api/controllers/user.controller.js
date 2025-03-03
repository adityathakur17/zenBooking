import User from "../models/User.js"


export const updateUser = async(req,res,next)=>{
    try{
        const updatedUser = await  User.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true} //to get newly set field in postman response
        )
        res.status(200).json(updatedUser)
    }catch(err){
        next(err);
    }
}

export const deleteUser = async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted successfully")
    }
    catch(err){
        next(err)
    }
}

export const getUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)

    } catch (err) {
        next(err)
    }
}

export const getAllUser = async(req,res,next)=>{
    try {
        const allUser = await User.find()
        res.status(200).json(allUser)
    } catch (err) {
        next(err)
        
    }
} 