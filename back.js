const express= require('express');
const mongoose=require('mongoose');
const cors=require('cors');

var app=express();
mongoose.connect('mongodb://localhost:27017/contact');
const port=8000;
app.use('/static', express.static('static'));
app.use(cors());
app.use(express.urlencoded());

 const contactSchema = new mongoose.Schema({
     name: String,
     age: String,
     email: String,
     phone: String
 });

 const Contact = mongoose.model('Kitten', contactSchema);

 app.post('/contact', (req, res)=>{
  var myData = new Contact(req.body);
  myData.save().then(()=>{
  res.send('This item has been saved to the database')
  }).catch(()=>{
  res.status(400).send('item was not saved to the databse')
})
});

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})