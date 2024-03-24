import { userModel } from "../../DB/models/user.model.js"

const getAllUsers= async(req,res)=>{
    const users =await userModel.find()
    return res.json({success:true},users)
} 

const getSingleUser= async (req,res)=>{
    const {id}=req.params
    const user =await userModel.findById(id)
    return res.json({success:true},user)
}
const addUser=async(req,res)=>{
    await userModel.insertMany(req.body)
    return res.json({success:true,message:`${req.body.name} added successfully`})
}

const updateUser = async (req, res) => {
    let user = await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    if (!user) return res.json({message : "user not found"})
    res.json({ success: "updated successfully", note })

}

const deleteUser = async (req, res) => {
    let user = await userModel.findByIdAndDelete({ _id: req.params.id })
    if (!user) return res.json({ message: "user not found" })
    res.json({ success: "deleted successfully", message })

}

export {
    getAllUsers, 
    getSingleUser,
    addUser,
    updateUser,
    deleteUser
}