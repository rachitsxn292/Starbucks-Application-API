const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Card = require('./models/card');
var md5= require('md5');

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

app.post('/AddCard', function (req, res) {
    var cardNumber = req.body.cardNumber;
    var cvv = req.body.cvv;
    cvv=md5(cvv);

    const entry = new Card({
        _id: new mongoose.Types.ObjectId(),
        cardNumber: req.body.cardNumber,
        cvv: cvv,
    })
    console.log('In CardDetails');
    entry.save().then(result => {
        console.log(res);
        res.status(200).send(true);
    }).catch(err => console.log(err));


});


app.listen(3001);
console.log('Server Listening on 3001');