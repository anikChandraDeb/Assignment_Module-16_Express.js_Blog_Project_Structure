//CRUD-CREATE READ UPDATE DELETE
//Create todo
export const createBlog= async (req,res)=>{
    return res.json({Message:'Blog created successfully'});
}
//Create read
export const readBlog= async (req,res)=>{
    return res.json({Message:'Blog read successfully'});
}
//Create update
export const updateBlog= async (req,res)=>{
    return res.json({message:'Blog update successfully'});
}
//Create Delete
export const deleteBlog= async (req,res)=>{
    return res.json({message:'Blog delete successfully'});
}
