const Product = require("../models/Product");
const router = require("express").Router();
const {TokenAndAdmin} = require("./verifyToken");




router.post("/products", TokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  console.log(newProduct)
  try {
    if (newProduct) newProduct.save();
    res.status(200).send(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.post("/product-update",TokenAndAdmin , async (req,res)=>{
    try {
          const UpdateProduct = await Product.findByIdAndUpdate(req.body.id, { $set: req.body }, { new: true });
          res.status(200).send(UpdateProduct);
      } catch (error) {
          console.error("Error updating products:", error);
          res.status(500).send(error);
      }
  })
router.delete("/ProductDelete/:id",TokenAndAdmin,async (req,res)=>{
  console.log("what we get",req.params.id)
    try {
        if(!req.params.id) return res.send("Product not found");
        const products = await Product.findByIdAndDelete(req.params.id)
        if(products) return res.status(200).send("Product has been deleted");
    } catch (error) {
        console.log("Error deleting Product:", error);
        res.status(500).send(error);
    }
})
router.get("/product-find/:id",async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)  
        res.status(200).send(product);
    } catch (error) {
        console.log("Product not found", error);
    }
})
router.get("/AllProduct",async (req,res)=>{ 
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let products;
        if(qNew){
            products = Product.find().sort({createdAt: -1}).limit(5) 
        }else if(qCategory){
            products = await Product.find({categories:{$in:[qCategory],},})
        }else{
            products = await Product.find()
        }
        res.status(200).send(products);
    } catch (error) {
        console.log("Product not found", error);
    }
})



module.exports = router ;