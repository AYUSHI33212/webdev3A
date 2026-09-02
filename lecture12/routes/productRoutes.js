const express=require("express");
const router=express.Router();
const products=require("../Database/data.js");
const {getproducts,getproductbyid,addproduct,updateproduct,deleteproduct}=require("../controller/productcontroller.js")

router .get("/",getproducts)

router .get("/:id",getproductbyid  )
////Create 

router .post("/",addproduct)
//Update

router .put("/:id",updateproduct)
//Delete

router.delete("/:id",deleteproduct)
module.exports=router;  