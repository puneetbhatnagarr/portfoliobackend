const contactModel = require("../models/contact.js");
class contactinsert{
    
    static insertcontact = async(req,res)=>{
    console.log(req.body)
    try{
       res.setHeader('Access-Control-Allow-Origin','*');
       const insertcontact = await contactModel.create(req.body);
       res.status(200).json({
        message:"Successfully Registered",
        success:true,
        insertcontact 
       })
    }catch(err){
        console.log(err)
    }
}

    static getcontact = async(req,res)=>{
    try{
       
        const contactall = await contactModel.find()
        res.status(200).json({
            message:"Successfully Registered",
            success:true,
            contactall
        })
        res.send(contactall)
    }catch(err){
        console.log(err);
    }
}

}
module.exports = contactinsert