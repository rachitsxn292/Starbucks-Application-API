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

app.post('/minusBalance', (req, res)=>{
    const cardno = req.body.cardno;
    Card.find({cardno: cardno}).exec().then(resultB=>{
        console.log(resultB);
        if(resultB[0].balance >= 1.50){
            Card.update({cardno: cardno}, {$inc: {balance: -1.5}}).exec().then(resultU=>{
                res.status(200).send(true);
            })
        }
        else{
            res.status(200).send(false);
        }
    })
});


app.post('/makeOrder', (req, res)=>{
    const cardno = req.body.cardno;
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        cardno: cardno
    });

    order.save().then(result=>{
        console.log(result);
        res.status(200).json({
            message: "Order Placed Successfully"
        })
    })
})

app.post('/removeCard', (req, res)=>{
    const cardno = req.body.cardno;
    Card.remove({cardno: cardno}).exec().then(result=>{
        console.log(result);
        res.status(200).json({
            message: "Card Removed Successfully"
        })
    })
});


app.get('/orders', (req, res)=>{
    Order.find({}).exec().then(result=>{
        res.status(200).json(result);
    })
});

app.post('/cancelOrder', (req, res)=>{
    const cardno = req.body.cardno;
    const orderid = req.body.orderid;
    Card.update({cardno: cardno}, {$inc: {balance: 1.5}}).exec().then(resultU=>{
        console.log(resultU);
        Order.remove({_id: orderid, cardno: cardno}).exec().then(result=>{
            res.status(200).json({
                message: "Order Cancelled"
            })
        })
    })
})


app.listen(3001);
console.log('Server Listening on 3001');