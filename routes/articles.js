const express=require('express');
const Article=require('./../models/article')
const router=express.Router();

router.get('/new',(req,res)=>{
    res.render('new_article')
})

router.get('/:id',async (req,res)=>{
    const article=await Article.findById(req.params.id);
    if(article==null) {
        res.redirect('/');
    } else {
        res.render('show',{article : article});
    }
})

router.post('/',async (req,res)=>{
    let article=new Article({
        title: req.body.title,
        description: req.body.description
    })

    try {
        let aid=await article.save();
        res.redirect(`/articles/${aid.id}`);
    } catch(e){
        console.log(e);
    }
})

module.exports= router