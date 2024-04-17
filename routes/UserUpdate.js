const User = require("../models/User")
const router = require("express").Router()
const {TokenAuthorization,TokenAndAdmin} = require("./verifyToken")


router.post("/UserNameUpdate",TokenAuthorization , async (req,res)=>{
  try {
    if(!req.body) return res.status(404).send("Please enter a valid user name")
        const updateUser = await User.findByIdAndUpdate(req.body.id, { $set: req.body }, { new: true });
        if (!updateUser) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(updateUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send(error);
    }
})
router.delete("/UserDelete/:id",TokenAuthorization,async (req,res)=>{
    try {
        if(!req.params.id) return res.send("user not found");
        const user = await User.findByIdAndDelete(req.params.id)
        if(user) return res.status(200).send("User has been deleted");
    } catch (error) {
        console.log("Error deleting user:", error);
    }
})
router.get("/find/:id",TokenAndAdmin,async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;  
        res.status(200).send(others);
    } catch (error) {
        console.log("User not found", error);
    }
})
router.get("/AllUser",TokenAndAdmin,async (req,res)=>{
    const query = req.query.new
    try {
        const user = query ? await User.find().sort({_id:-1}).limit(5) : await User.find()  
        res.status(200).send(user);
    } catch (error) {
        console.log("User not found", error);
    }
})
router.get("/states",TokenAndAdmin,async (req,res)=>{
const date = new Date();
const lastYear = new Date(date.getFullYear(date.getFullYear() - 1));
    try {
         const data = await User.aggregate([
            {$match: {createdAt:{$gte:lastYear}} },
            { 
                $project :{
                    month : {$month:"$createdAt"},
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum: 1},
                },
            }
         ]);
        res.status(200).send(data);
    } catch (error) {
        console.log("User not found", error);
    }
})





module.exports = router