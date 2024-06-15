const express=require("express")
const cors=require('cors');

const app=express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api - node"})
})

const authRouter=require("./routes/auth.routes.js")
app.use("/auth",authRouter)

const userRouter=require("./routes/user.routes.js");
app.use("/api/users",userRouter)

const productRouter=require("./routes/product.routes.js");
app.use("/api/products",productRouter);

//Pawan / Aaron
const adminProductRouter=require("./routes/product.admin.routes.js");
app.use("/api/admin/products",adminProductRouter);

//Aaron
const cartRouter=require("./routes/cart.routes.js")
app.use("/api/cart", cartRouter);

const cartItemRouter=require("./routes/cartItem.routes.js")
app.use("/api/cart_items",cartItemRouter);

//Haris /Aaron
const orderRouter=require("./routes/order.routes.js");
app.use("/api/orders",orderRouter);

const paymentRouter=require("./routes/payment.routes.js");
app.use('/api/payments',paymentRouter)

//Haris
const reviewRouter=require("./routes/review.routes.js");
app.use("/api/reviews",reviewRouter);

const ratingRouter=require("./routes/rating.routes.js");
app.use("/api/ratings",ratingRouter);

// Pawan 
const adminOrderRoutes=require("./routes/adminOrder.routes.js");
app.use("/api/admin/orders",adminOrderRoutes);

module.exports={app};