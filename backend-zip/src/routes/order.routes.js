const express=require("express");
const authenticate = require("../middleware/authenticat.js");
const router=express.Router();
const orderController=require("../controllers/order.controller.js")

//Aaron
router.post("/",authenticate,orderController.createOrder);

//Haris
router.get("/user",authenticate,orderController.orderHistory);
router.get("/:id",authenticate,orderController.findOrderById);


module.exports=router;