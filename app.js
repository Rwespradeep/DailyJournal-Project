const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
let posts = [];
let newPosts = [];

const homeStartingContent = "Hello and all! I am Pradeep Rvs, I have built this web app for my own learnings." ;
const aboutContent = "This Daily Journal app is built on Node and Express JS and EJS with bootstrap framework. Not yet connected to a database. Will plan one in future, preferably MongoDB";
const contactContent = "You can reach out to me at pradeeprvs@outlook.com"
const app = new express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

app.get("/",(req,res) => {
    res.render("home",{homeStartingContent,newPosts:posts});
})

app.get("/about",(req,res) => {
    res.render("about",{aboutContent});
})
app.get("/contact",(req,res) => {
    res.render("contact",{contactContent});
})

app.get("/compose", (req,res) => {
    res.render("compose");
})

app.post("/compose",(req,res) => {

    const post = {
        title:req.body.postTitle,
        content:req.body.postBody
    };
    posts.push(post);
    res.redirect("/");
})

app.listen(port,()=>{
    console.log("Journal server started");
})