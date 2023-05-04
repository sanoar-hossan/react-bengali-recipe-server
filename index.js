const express=require('express');
const app =express();
const port = process.env.PORT||5000;
const cors = require('cors')

const chef=require('./data/chef.json')
const recipe=require('./data/recipe.json')
app.get('/',(req,res)=>{
res.send('news running')
});

app.use(cors());

app.get('/chefdetails',(req,res)=>{
    res.send(chef);
})
app.get('/recipedetails',(req,res)=>{
    res.send(recipe);
})

app.listen(port,()=>{
    console.log(`dragon api: ${port}`);
})
