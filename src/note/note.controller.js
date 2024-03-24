import { noteModel } from "../../DB/models/note.model.js"

const getAllNotes= async(req,res)=>{
    const notes =await noteModel.find()
    return res.json({success:true},notes)
} 

const addNote=async(req,res)=>{
    await noteModel.insertMany(req.body)
    return res.json({success:true,message:"note added successfully"})
}

const updateNote = async (req, res) => {
    let note = await noteModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    if (!note) return res.json({message : "note not found"})
    res.json({ success: "updated successfully", note })

}

const deleteNote = async (req, res) => {
    let note = await noteModel.findByIdAndDelete({ _id: req.params.id })
    if (!note) return res.json({ message: "note not found" })
    res.json({ success: "deleted successfully", message })

}

export {
    getAllNotes, 
    addNote,
    updateNote,
    deleteNote
}