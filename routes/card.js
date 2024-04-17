const Card = require("../models/Card");
const router = require("express").Router();
const {TokenAndAdmin,TokenAuthorization} = require("./verifyToken");




router.post("/Create-card", TokenAuthorization, async (req, res) => {
  const newCard = new Card(req.body);
  try {
    if (newCard) newCard.save();
    res.status(200).send(newCard);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.post("/card-update",TokenAuthorization , async (req,res)=>{
    try {
          const UpdateCard = await Card.findByIdAndUpdate(req.body.id, { $set: req.body }, { new: true });
          res.status(200).send(UpdateCard);
      } catch (error) {
          console.error("Error updating Cards:", error);
          res.status(500).send(error);
      }
  })
router.delete("/CardDelete/:id",TokenAndAdmin,async (req,res)=>{
    try {
        if(!req.params.id) return res.send("Card not found");
        const Cards = await Card.findByIdAndDelete(req.params.id)
        if(Cards) return res.status(200).send("Card has been deleted");
    } catch (error) {
        console.log("Error deleting Card:", error);
        res.status(500).send(error);
    }
})
router.get("/Card-find/:userId",TokenAuthorization,async (req,res)=>{
    try {
        const Card = await Card.findOne({userId:req.params.userId})  
        res.status(200).send(Card);
    } catch (error) {
        console.log("Card not found", error);
    }
})
router.get("/AllCard",TokenAndAdmin,async (req,res)=>{ 
   try {
     const card = await Card.find()
     res.status(200).send(card)
   } catch (error) {
    console.log("Card not found", error);
   }
})



module.exports = router ;