const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 8000;

const p1=path.join(__dirname,"../public");
const p2=path.join(__dirname,"../templete/views");
//console.log(p2);
const p3=path.join(__dirname,"../templete/partials");
app.use(express.static(p1));
app.set("view engine","hbs");
app.set("views",p2);
hbs.registerPartials(p3);


app.get("",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404page",{
        adderror:"My Resume has not been added!"
    });
})
app.listen(port,()=>{
    console.log(`listening at port ${port}!`);
})