const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Card = require('./models/card');
const Order = require('./models/orders');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb+srv://starbucks:starbucks@cluster0-1nvae.mongodb.net/test?retryWrites=true');

app.get('/', (req, res) => {
  res.send('Hello');
})

app.post('/pinValidation', (req, res)=>{
    const {pin} = req.body;
    console.log(pin);
    if(pin === '1234'){
        res.status(200).send(true);
    }
    else{
        res.status(202).send(false);
    }
});

app.post('/addCard', (req, res) => {
    const {cardno} = req.body;
    const {cvv} = req.body;
    const card = new Card({
        _id: new mongoose.Types.ObjectId(),
        cardno: cardno,
        cvv: cvv,
        balance: 20
    });

    Card.find({cardno: cardno}).exec().then(result=>{
        if(result.length > 0){
            res.status(200).send(false);
        }
        else{
            card.save().then(result=>{
                console.log(result);
                res.status(200).send(true);
            })
        }
    });
});

app.get('/getCards', (req, res)=>{
    Card.find({}).exec().then(result=>{
        res.status(200).json(result);
    })
});




app.listen(3001);
console.log('Server Listening on 3001');