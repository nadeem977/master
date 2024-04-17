const Order = require("../models/Order");
const router = require("express").Router();
const {TokenAndAdmin, TokenAuthorization} = require("./verifyToken");




router.post("/Orders", TokenAuthorization, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    if (newOrder) newOrder.save();
    res.status(200).send(newOrder);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.post("/Order-update",TokenAndAdmin , async (req,res)=>{
    try {
          const UpdateOrder = await Order.findByIdAndUpdate(req.body.id, { $set: req.body }, { new: true });
          res.status(200).send(UpdateOrder);
      } catch (error) {
          console.error("Error updating Orders:", error);
          res.status(500).send(error);
      }
  })
router.delete("/OrderDelete/:id",TokenAndAdmin,async (req,res)=>{
    try {
        if(!req.params.id) return res.send("Order not found");
        const Orders = await Order.findByIdAndDelete(req.params.id)
        if(Orders) return res.status(200).send("Order has been deleted");
    } catch (error) {
        console.log("Error deleting Order:", error);
        res.status(500).send(error);
    }
})
router.get("/Order-find/:id",async (req,res)=>{
    try {
        const orders = await Order.find(req.params.id)  
        res.status(200).send(orders);
    } catch (error) {
        console.log("Order not found", error);
    }
})
router.get("/AllOrder",TokenAndAdmin ,async (req,res)=>{ 
    try {
         const orders = await Order.find()
            res.status(200).send(orders);
    } catch (error) {
        console.log("Order not found", error);
    }
})

router.get("/income",TokenAndAdmin, async(req,res)=>{

    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
    try {
        const income = await Order.aggregate([
            {$match:{createdAt:{$gte:prevMonth} } },
            {
                $project:{
                    month:{$month: "$creatdAt"},
                    sales: "$amount",
                },
                $group:{
                    _id:'$month',
                    total:{$sum:"$sales"}
                }
            }
        ])
      res.status(200).send(income)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router ;