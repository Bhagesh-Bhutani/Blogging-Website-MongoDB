const express=require('express')
const path=require('path')
const app=express();
const article_router=require('./routes/articles')
const mongoose=require('mongoose');
const Article=require('./models/article')

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
let port= process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser: true,useUnifiedTopology: true});

app.get('/',async (req,res)=>{
    const articles=await Article.find().sort({createdAt : 'desc'});
    res.render('index',{articles:articles});
})

app.use('/articles',article_router)

app.listen(port,()=>{
    console.log("Server running on : http://localhost:"+port);
})